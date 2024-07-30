import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const SeeMore = ({ url, title }) => {
    return (
        <div>
            <Link href={url} className='flex items-center gap-2 hover:text-primary text-hover cursor-pointer'>
                {title} 
                <span className='font-bold text-xl animate-moveRight'>
                    <FaArrowRightLong />
                </span>
            </Link>
        </div>
    );
};

export default SeeMore;
