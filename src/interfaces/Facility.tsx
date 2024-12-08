import { Court } from "./Court";

export interface Facility {
  id: string;
  name: string;
  address: string;
  city: string;
  district: string;
  phone: string;
  courts: Court[];
  amenities: string[];
  location: string;
  openTime: string;
  rating: string;
  closeTime: string;
  description: string;
  isActive: boolean;
  images: string[];
}
