import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockBooks from '../data/mockBooks.json';
import BookListTest from './BookList';

describe('BookList', () => {
  test('renders book list component', () => {
    render(<BookListTest />);
    const bookListElement = screen.getByRole('list');
    expect(bookListElement).toBeInTheDocument();
  });

  test('displays no books message when list is empty', () => {
    render(<BookListTest books={[]} />);
    const noBooksMessage = screen.getByText(/no books available/i);
    expect(noBooksMessage).toBeInTheDocument();
  });

  test('renders books when provided', () => {
    const testBooks = mockBooks;
    
    render(<BookListTest books={testBooks} />);
    testBooks.forEach(book => {
      expect(screen.getByText(text => text.includes(book.title))).toBeInTheDocument();
    });
  });
});
