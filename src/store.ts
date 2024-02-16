import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Tenant {
  id: number;
  name: string;
  address: string;
}

type Roles = 'customer' | 'admin' | 'manager';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Roles;
  tenant?: Tenant;
}

interface AuthState {
  user: null | User;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user: user }),
    logout: () => set({ user: null }),
  }))
);
