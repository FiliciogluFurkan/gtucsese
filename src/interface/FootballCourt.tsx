export interface FootballCourt {
    id: number;
    name: string;
    description?: string;
    image: string;
    rating: number;
    place: string;
}

export interface FootballCourtsCartProps {
    field: FootballCourt;
    city: string;
    district: string;
}
