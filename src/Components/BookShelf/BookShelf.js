import React, { useEffect, useState } from 'react';
import Activity_Timeline from '../Activity-Timeline/Activity_Timeline';
import Book from '../Book/Book';

const BookShelf = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div className='flex flex-row gap-4'>
                <div className='basis-9/12 my-16 container ml-20 grid grid-cols-4 gap-4'>
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
                <div className='basis-3/12 bg-white'>
                    <Activity_Timeline></Activity_Timeline>
                </div>
            </div>
        </div>
    );
};

export default BookShelf;