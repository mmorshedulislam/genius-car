import React from 'react';
import {FaCalendar, FaLocationArrow,  FaPhoneAlt} from 'react-icons/fa'

const FindUs = () => {
    return (
        <div className='bg-black p-20 grid grid-cols-1 md:grid-cols-3 my-10 text-white rounded-xl'>
            <div className='flex items-center justify-evenly'>
                <div>
                    <FaCalendar/>
                    </div>
                <div>
                    <p>We are open monday-friday</p>
                    <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex items-center justify-evenly'>
                <div>
                    <FaPhoneAlt/>
                    </div>
                <div>
                    <p>Have a question?</p>
                    <p className='text-2xl font-bold'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex items-center justify-evenly'>
                <div>
                    <FaLocationArrow/>
                    </div>
                <div>
                    <p>Need a repair? our address</p>
                    <p className='text-2xl font-bold'>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default FindUs;