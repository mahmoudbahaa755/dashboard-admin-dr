
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='mt-5'>
            <footer className="bottom-0 text-white p-4 text-center -z-1">
                <p>© {new Date().getFullYear()} Dr Code. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;