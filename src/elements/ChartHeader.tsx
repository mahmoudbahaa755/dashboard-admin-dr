import React from 'react';
import HidingList from './HidingList'; // adjust the path according to your project structure

interface WeeklySalesHeaderProps {
    title: string;
    input: string;
}

const ChartHeader: React.FC<WeeklySalesHeaderProps> = ({title,input}) => {
    return (
        <div className='flex mb-4 border-b border-gray-200 justify-between items-center'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <HidingList input={input} options={undefined}/>
        </div>
    );
}

export default ChartHeader;