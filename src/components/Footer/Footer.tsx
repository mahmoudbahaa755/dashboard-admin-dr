
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='mt-5'>
            
        <footer className=" absolute bottom-0 w-screen text-white p-4 text-center">
            <p>© {new Date().getFullYear()} Dr Code. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default Footer;