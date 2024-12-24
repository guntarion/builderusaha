// src/types/auth.ts
import 'next-auth';
import { JWT } from 'next-auth/jwt';

export interface User {
  id: string;
  name: string;
  email: string;
  businessPhase?: 'ideation' | 'planning' | 'growth' | 'maturity';
  createdAt: Date;
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface Profile {
    sub?: string;
    name?: string;
    email?: string;
    image?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
  }
}
