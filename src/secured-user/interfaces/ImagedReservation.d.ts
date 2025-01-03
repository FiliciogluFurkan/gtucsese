import { ReservationResponse } from "@/interfaces/admin/Reservation";

export interface ImagedReservation {
    reservation: ReservationResponse;
    images: string[];
}