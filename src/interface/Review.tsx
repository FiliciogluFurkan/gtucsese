export interface Review {
    id: number;
    userId: number;
    review: string;
    day: string;
    rating: number;
    fullname: string;
}


export interface CommentOfCourtsProps {
    review: Review;
  }

export interface FootballCourtsCommentsCardsProps {
    comment: Review;
}