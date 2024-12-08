import { User } from "./User";

export interface TimeSlot {
    time: string;
    status: 'boş' | 'dolu';
    user?: User | null; 
  }