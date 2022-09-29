import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user from '../../images/01013235.jpg'
import React from 'react';

const UserInfo = () => {
    return (
        <div>
             <div className='mt-16 bg-white rounded-lg py-2 px-2 flex gap-2'>
                <img className='rounded-full' src={user} alt="" />
                <div>
                    <p className='text-2xl font-semibold'>Abul Hayat</p>
                    <p className='text-gray-500'><FontAwesomeIcon icon={faLocationDot}/>Chattogram, Bangladesh</p>
                </div>
                
                
            </div>
            <div className='flex my-6 gap-4'>
                    <div className='bg-white p-4 rounded-md'>
                        <p className='text-2xl font-semibold'>11</p>
                        <p className='font-semibold text-gray-500'>Class</p>
                    </div>
                    <div className='bg-white p-4 rounded-md'>
                        <p  className='text-2xl font-semibold'>11012</p>
                        <p  className='font-semibold text-gray-500'>Id</p>
                    </div>
                    <div className='bg-white p-4 rounded-md'>
                        <p  className='text-2xl font-semibold'><small className='text-3xl'>16</small> yrs</p>
                        <p  className='font-semibold text-gray-500'>Age</p>
                    </div>
            </div>
            <div>
                <p className='text-3xl font-semibold'>Add a Break</p>
                <div className='flex gap-2 my-3'>
                    <button className='px-4 py-2 rounded-full bg-white'><p className='text-2xl font-semibold'>5</p></button>
                    <button className='px-3 py-2 rounded-full bg-white'><p className='text-2xl font-semibold'>10</p></button>
                    <button className='px-3 py-2 rounded-full bg-white'><p className='text-2xl font-semibold'>15</p></button>
                    <button className='px-3 py-2 rounded-full bg-white'><p className='text-2xl font-semibold'>20</p></button>
                    <button className='px-3 py-2 rounded-full bg-white'><p className='text-2xl font-semibold'>25</p></button>
                </div>

            </div>
        </div>
    );
};

export default UserInfo;