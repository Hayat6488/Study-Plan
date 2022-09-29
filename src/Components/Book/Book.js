import React from 'react';
import './book.css'

const Book = (props) => {
    const{id, img, author, name, time} = props.book;
    return (
        <div className='book bg-white border border-zinc-400 relative rounded-md'>
            <div className='my-1'>
            <img className='w-40 mx-auto' src={img} alt="" />
            <p className='break-normal font-bold p-1'>Book: {name}</p>
            <p className='break-normal font-semibold p-1'>Author: {author}</p>
            <p className='break-normal font-semibold p-1'>Time: {time} mins</p>
            <button className='bg-sky-500 rounded-b-md w-full absolute bottom-0 text-white py-1'>Add To List</button>
            </div>
        </div>
    );
};

export default Book;