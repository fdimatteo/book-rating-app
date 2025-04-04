export interface Book {
    id: number;
    title: string;
    author: string;
    rating: number;
}

export type BookList = Book[];