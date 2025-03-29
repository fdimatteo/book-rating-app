import React from 'react';
import StarRating from './StarRating';
import { Book } from '../types';

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    return (
        <div className="book-item">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <StarRating rating={book.rating} />
        </div>
    );
};

export default BookItem;