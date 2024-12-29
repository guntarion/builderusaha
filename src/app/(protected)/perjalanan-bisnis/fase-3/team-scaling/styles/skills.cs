// src/app/(protected)/perjalanan-bisnis/fase-3/team-scaling/styles/skills.css

/* Skills Matrix Styling */
.skills-matrix {
  @apply overflow-x-auto;
  -webkit-overflow-scrolling: touch;
}

.skills-matrix table {
  @apply min-w-full divide-y divide-gray-200;
}

.skills-matrix th {
  @apply sticky top-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider;
}

.skills-matrix td {
  @apply whitespace-nowrap px-6 py-4 text-sm text-gray-900;
}

/* Gap Indicators */
.gap-indicator {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
}

.gap-indicator-critical {
  @apply bg-red-100 text-red-800;
}

.gap-indicator-high {
  @apply bg-orange-100 text-orange-800;
}

.gap-indicator-medium {
  @apply bg-yellow-100 text-yellow-800;
}

.gap-indicator-low {
  @apply bg-green-100 text-green-800;
}

/* Category Filter */
.category-filter {
  @apply flex gap-2 overflow-x-auto pb-2 -mx-2 px-2;
  scrollbar-width: thin;
  scrollbar-color: theme('colors.gray.300') transparent;
}

.category-filter::-webkit-scrollbar {
  @apply h-1.5;
}

.category-filter::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.category-filter::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

/* Stat Cards */
.stat-card {
  @apply p-6 rounded-lg border transition-shadow hover:shadow-md;
}

.stat-card-critical {
  @apply bg-red-50 border-red-200;
}

.stat-card-high {
  @apply bg-orange-50 border-orange-200;
}

.stat-card-medium {
  @apply bg-yellow-50 border-yellow-200;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.2s ease-out;
}

.slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}