import React from 'react';

export default function Loader() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="relative">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
                    R
                </div>
            </div>
        </div>
    );
}