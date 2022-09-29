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

    const addToList = (bookId) => {
        console.log(bookId);
    }
    return (
        <div>
            <div className='flex flex-nowrap flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row xxl:flex-row gap-4'>
                <div className='basis-9/12 my-16 container ml-0 sm:ml-0 md:ml-0 lg:ml-20 xl:ml-20 xxl:ml-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        books.map(book => <Book key={book.id} book={book} addToList={addToList}></Book>)
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