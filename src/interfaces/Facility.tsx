import { Court } from "./Court";

export interface Facility {
  id: string;
  phoneNumber: string;
  name: string;
  description: string;
  city: string;
  district: string;
  fullAddress: string;
  location: string;
  contactDetails: string;
  openTime: number;
  closeTime: number;
  imageUrls: string[];
  rating: string;
  reviewCount: number;
  lowerPriceLimit: number;
  upperPriceLimit: number;
  amenities: any;
  courts: Court[];
  isActive: boolean;
}
