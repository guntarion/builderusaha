export interface Client {
  id: string;
  name: string;
  company: string;
  avatar: string;
  industry: string;
  program: string;
  startDate: Date;
  status: 'active' | 'pending' | 'completed' | 'paused';
  progress: number;
  nextSession: Date | null;
  recentActivity: {
    type: string;
    description: string;
    date: Date;
  }[];
  contacts: {
    email: string;
    phone: string;
    position: string;
  }[];
}

export interface ClientFilters {
  status?: string;
  industry?: string;
  program?: string;
}

export interface ClientTableState {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  currentPage: number;
  itemsPerPage: number;
  selectedClients: string[];
}
