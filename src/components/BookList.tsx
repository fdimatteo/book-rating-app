import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
import StarRating from './StarRating';
import booksData from '../data/books.json';

interface Book {
    id: number;
    title: string;
    author: string;
    rating: number;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const columnDefs: ColDef<Book>[] = [
        { field: 'title', headerName: 'Title', flex: 2 },
        { field: 'author', headerName: 'Author', flex: 1 },
        { 
            field: 'rating', 
            headerName: 'Rating', 
            flex: 1,
            cellRenderer: (params: { value: number }) => <StarRating rating={params.value} />,
            sortable: true
        }
    ];

    const defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true
    };

    useEffect(() => {
        setBooks(booksData);
    }, []);

    return (
        <div>
            <h1>Book List</h1>
            <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
                <AgGridReact
                    rowData={books}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    rowSelection="single"
                />
            </div>
        </div>
    );
};

export default BookList;