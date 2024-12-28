// src/app/(protected)/perjalanan-bisnis/fase-1/lean-canvas/lib/rateLimit.ts

const WINDOW_SIZE = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute

const requestLog: { timestamp: number; ip: string }[] = [];

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Clean old entries
  while (requestLog.length && requestLog[0].timestamp < now - WINDOW_SIZE) {
    requestLog.shift();
  }

  // Count requests for this IP
  const recentRequests = requestLog.filter((r) => r.ip === ip).length;

  if (recentRequests >= MAX_REQUESTS) {
    return false;
  }

  requestLog.push({ timestamp: now, ip });
  return true;
}

// Simple in-memory cache
const cache = new Map<string, { value: any; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export function getCachedValue(key: string): any | null {
  const cached = cache.get(key);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }

  return cached.value;
}

export function setCachedValue(key: string, value: any): void {
  cache.set(key, { value, timestamp: Date.now() });
}
