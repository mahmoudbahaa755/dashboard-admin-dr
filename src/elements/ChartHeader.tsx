import React from 'react';
import ChartInfo from './HiddingList'; // adjust the path according to your project structure

interface WeeklySalesHeaderProps {
    title: string;
}

const ChartHeader: React.FC<WeeklySalesHeaderProps> = ({title,input}) => {
    return (
        <div className='flex mb-4 border-b border-gray-200 justify-between items-center'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <ChartInfo input={input}/>
        </div>
    );
}

export default ChartHeader;