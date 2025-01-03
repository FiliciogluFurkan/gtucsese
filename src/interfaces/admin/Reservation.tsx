export interface Reservation {
  id: number;
  date: string;
  hour: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  courtName: string;
}

export interface ReservationResponse {
  id: string; 
  date: string; 
  hour: number; 
  userId: string; 
  ownerId: string; 
  courtId: string; 
  status: string; 
  requestedAt: string; 
  updatedAt: string; 
  type: string; 
}
