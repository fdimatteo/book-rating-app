import React, { useEffect, useState } from 'react';
import booksData from '../data/books.json';

interface Book {
  id: number;
  title: string;
  author: string;
  rating: number;
}

interface BookListProps {
  books?: Book[];
}

const BookList: React.FC<BookListProps> = ({ books: propBooks }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // If books are provided as props, use them; otherwise load from JSON
    if (propBooks) {
      setBooks(propBooks);
    } else {
      setBooks(booksData);
    }
  }, [propBooks]);

  return (
    <ul className="book-list">
      {books.length === 0 ? (
        <li>No books available</li>
      ) : (
        books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - Rating: {book.rating}/5
          </li>
        ))
      )}
    </ul>
  );
};

export default BookList;
