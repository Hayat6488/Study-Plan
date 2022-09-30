import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Study_Details = (props) => {

    const notify = () => toast('Congratulations! You have completed Your Daily study task!');

    const { completeList, breakTime } = props;
    // console.log(props);
    let totalTime = 0;

    for (const book of completeList) {
        totalTime = totalTime + book.time;
    }

    return (
        <div className='py-6 ml-4'>
            <p className='text-3xl font-semibold mb-4 break-normal'>Study Details</p>
            <div className='text-2xl bg-slate-100 text-gray-500 rounded-xl p-1 mb-4'><p className='ml-2 break-normal'>Reading Time: {totalTime} mins</p></div>

            <div className='text-2xl bg-slate-100 text-gray-500 rounded-xl p-1 mb-4'><p className='ml-2 break-normal'>Break Time: {breakTime} mins</p></div>
            <button onClick={notify} className='py-2 w-full bg-sky-500 rounded-md text-white break-normal'>Activity Completed</button>
            <ToastContainer />

        </div>
    );
};

export default Study_Details;