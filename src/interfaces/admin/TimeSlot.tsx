export interface TimeSlot {
  status: string;
  reservable: {
    id?: string;
    userId?: string;
    courtId?: string;
    date?: string;
    hour?: number;
    status?: string;
    requestedAt?: string;
    updatedAt?: string;
    type?: string;
    name?: string;
    phoneNumber?: string;
  } | null;
}

export interface LocaleTimeSlot {
  status: string;
  reservable: {
    courtId: string;
    name: string;
    phoneNumber: number;
    date: string;
    hour: number;
    type: string;
  } | null;
}