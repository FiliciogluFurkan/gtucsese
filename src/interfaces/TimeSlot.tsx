import { User } from "./User";

export interface TimeSlot {
  time: string;
  status: "boş" | "dolu";
  user?: User | null;
}

export enum TimeSlotStatus {
  CLOSED = "CLOSED",
  PAST_TIME = "PAST_TIME",
  AVAILABLE = "AVAILABLE",
  RESERVED = "RESERVED",
}
