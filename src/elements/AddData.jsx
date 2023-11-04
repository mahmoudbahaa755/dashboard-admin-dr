'use client';
import React, { useState } from 'react';

const AddDataButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const fields = [
        { id: 'ID', label: 'ID', type: 'number' },
        { id: 'firstName', label: 'First Name', type: 'text' },
        { id: 'lastName', label: 'Last Name', type: 'text' },
        { id: 'email', label: 'Email', type: 'email' },
    ];

    return (
        <div className="p-4 bg-black rounded">
            <form className="space-y-4">
                {fields.map(field => (
                    <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-medium text-white">{field.label}</label>
                        <input type={field.type} id={field.id} className="mt-1 w-full rounded-md bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-white"/>
                    </div>
                ))}
            </form>
            <div className="mt-4 flex justify-between">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={closeModal}>Close</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Data</button>
            </div>
        </div>
    );
};

export default AddDataButton;