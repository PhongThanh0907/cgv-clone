export interface Movie {
    id: number;
    title: string;
    description: string;
    duration: number;
    trailer: string;
    releaseDate: Date;
    createdAt: Date;
    updatedAt: Date;
    image: string;
    director: string;
    actors: string[];
    liked: number
    category: string[];
    typeCinemaRoom: string[];
}