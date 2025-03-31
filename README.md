# README.md

# Book Rating App

This is a simple React application that displays a list of books along with their ratings. The book data is managed via a JSON file, making it easy to update and maintain.

## Features

- Displays a list of books with titles, authors, and ratings.
- Uses star ratings to visually represent book ratings.
- Built with React and TypeScript for type safety.

## Project Structure

```
book-rating-app
├── src
│   ├── components
│   │   ├── BookList.tsx
│   ├── data
│   │   └── books.json
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd book-rating-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.