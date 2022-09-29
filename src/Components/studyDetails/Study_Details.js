import React from 'react';

const Study_Details = () => {
    return (
        <div className='py-6 ml-4'>
            <p className='text-3xl font-semibold mb-4 break-normal'>Study Details</p>
            <div className='text-2xl bg-slate-100 text-gray-500 rounded-xl p-1 mb-4'><p className='ml-2 break-normal'>Reading Time: </p></div>
            
            <div className='text-2xl bg-slate-100 text-gray-500 rounded-xl p-1 mb-4'><p className='ml-2 break-normal'>Break Time: </p></div>
            <button className='py-2 w-full bg-sky-500 rounded-md text-white break-normal'>Activity Completed</button>
            
        </div>
    );
};

export default Study_Details;