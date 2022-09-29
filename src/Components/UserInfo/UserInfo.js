import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from '../../images/01013235.jpg'
import React from 'react';

const UserInfo = () => {
    return (
        <div className='ml-4'>
             <div className='mt-16 bg-slate-100 rounded-lg py-2 px-2 flex flex-wrap gap-2'>
                <img className='rounded-full' src={user} alt="" />
                <div>
                    <p className='text-2xl font-semibold break-normal'>Abul Hayat</p>
                    <p className='text-gray-500'><FontAwesomeIcon icon={faLocationDot}/>Chattogram, Bangladesh</p>
                </div>
                
                
            </div>
            <div className='flex flex-wrap my-6 gap-4'>
                    <div className='bg-slate-100 p-4 rounded-md'>
                        <p className='text-2xl font-semibold break-normal'>11</p>
                        <p className='font-semibold text-gray-500 break-normal'>Class</p>
                    </div>
                    <div className='bg-slate-100 p-4 rounded-md'>
                        <p  className='text-2xl font-semibold break-normal'>11012</p>
                        <p  className='font-semibold text-gray-500 break-normal'>Id</p>
                    </div>
                    <div className='bg-slate-100 p-4 rounded-md'>
                        <p  className='text-2xl font-semibold break-normal'><small className='text-3xl'>16</small> yrs</p>
                        <p  className='font-semibold text-gray-500 break-normal'>Age</p>
                    </div>
            </div>
            <div>
                <p className='text-3xl font-semibold break-normal'>Add a Break</p>
                <div className='flex flex-wrap gap-2 my-3'>
                    <button className='px-4 py-2 rounded-full bg-slate-100'><p className='text-2xl font-semibold'>5</p></button>
                    <button className='px-3 py-2 rounded-full bg-slate-100'><p className='text-2xl font-semibold'>10</p></button>
                    <button className='px-3 py-2 rounded-full bg-slate-100'><p className='text-2xl font-semibold'>15</p></button>
                    <button className='px-3 py-2 rounded-full bg-slate-100'><p className='text-2xl font-semibold'>20</p></button>
                    <button className='px-3 py-2 rounded-full bg-slate-100'><p className='text-2xl font-semibold'>25</p></button>
                </div>

            </div>
        </div>
    );
};

export default UserInfo;