import React from 'react';

interface ProgressBarProps {
    completed: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed }) => {
    const containerStyles = 'my-3 bg-gray-500  h-1';

    const fillerStyles = `h-full bg-gray-300 rounded  ${
        completed > 0 ? 'transition-all duration-500 ease-in-out' : ''
    }`;

    return (
        <div className={containerStyles}>
            <div style={{ width: `${completed}%` }} className={fillerStyles}>
                {completed > 0 && (
                    <span className="text-white text-xs px-2">
                    
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;