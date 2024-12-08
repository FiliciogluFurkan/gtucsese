export interface Court {
  id: number;
  name: string;
  description: string;
  images: string[];
  rating: number;
  reviews: string[];
  numberOfReviews: number;
  phoneNumber: string;
  amenities: string[];
  capacity: string;
  price: number;
  city: string;
  district: string;
  location: string;
  width: number;
  height: number;
  isActive: boolean;
}
