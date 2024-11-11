export interface FootballCourt {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    services: string;
    price: number;
    city: string;
    district: string;
    location: string;
}


export interface FootballCourtsCartProps {
    field: FootballCourt;
}
