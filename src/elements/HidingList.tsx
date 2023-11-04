'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
interface ListItem {
  id: number;
  name: string;
  svg?: JSX.Element;
  url: string;
}
  
  interface ChartInfoProps {
    input: JSX.Element;
    options?: ListItem[];
  }


  const HidingList: React.FC<ChartInfoProps> = ({ input, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
            <div ref={ref} className="relative">
                <div className='font-bold w-max cursor-pointer text-xl' onClick={() => setIsOpen(!isOpen)}>{input}</div>
                {isOpen && (
                    <ul className='bg-black absolute right-0 flex flex-col gap-2 py-2 rounded px-4 text-right'>
                        {options && options.map((option)=> {
                            return(
                                <li key={option.id}>
                                    <Link href={option.url || ''} className='flex w-max flex-row gap-2' >
                                        {option.svg}
                                        {option.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
    );
}
export default HidingList;