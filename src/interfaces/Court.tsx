export interface Court {
  id: string;
  name: string;
  description: string;
  images: string[];
  rating: number;
  reviews: string[];
  numberOfReviews: number;
  phoneNumber: string;
  amenities: string[];
  capacity: number;
  price: number;
  city: string;
  district: string;
  location: string;
  width: number;
  height: number;
  isActive: boolean;
}
