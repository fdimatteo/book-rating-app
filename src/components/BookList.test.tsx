import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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
    const testBooks = [
      { id: 1, title: 'Test Book 1', rating: 4, author: 'Test Author 1' },
      { id: 2, title: 'Test Book 2', rating: 5, author: 'Test Author 2' }
    ];
    
    render(<BookListTest books={testBooks} />);
    testBooks.forEach(book => {
      expect(screen.getByText(text => text.includes(book.title))).toBeInTheDocument();
    });
  });
});
