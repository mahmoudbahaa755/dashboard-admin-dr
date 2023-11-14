import Link from "next/link";
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='mt-3'>
            <footer className="bottom-0 text-white p-4 text-center -z-1">
            <p>
          &copy; {currentYear}{' '}
          <Link className="text-white hover:text-gray-300 transition-colors duration-200" href='/'>
           Dr Code 
          </Link>{' '}
          All rights reserved.
        </p>
            </footer>
        </div>
    );
};

export default Footer;