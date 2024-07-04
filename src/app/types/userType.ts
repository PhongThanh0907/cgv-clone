export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}