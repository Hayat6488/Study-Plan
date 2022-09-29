import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='bg-black p-4'>
            <p className='text-red-700 text-5xl font-semibold container mx-auto'><FontAwesomeIcon icon={faBookOpenReader} /> Study Plan</p>
            </div>
        </div>
    );
};

export default Header;