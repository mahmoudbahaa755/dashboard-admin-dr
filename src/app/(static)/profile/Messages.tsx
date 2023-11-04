'use client';
import React, { useState } from 'react';

export default function Messages(){
    const [showAlert, setShowAlert] = useState(true);
    const messages = [
        { date: '3 hrs ago', text: 'Here is your a link to the latest summary report from the..' },
        { date: 'Yesterday', text: 'There has been a request on your account since that was..' },
        { date: '9/10', text: 'Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.' },
        { date: '9/4', text: 'Vestibulum tincidunt ullamcorper eros eget luctus.' },
        { date: '9/4', text: 'Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.' },
    ];

    return(
        <div className="p-6">
            {showAlert && (
                <div className="flex flex-row justify-between bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                    <p><strong>Info!</strong> Lorem Ipsum is simply dummy text.</p>
                    <button type="button"
                        className="border border-gray rounded px-2 font-bold text-opacity-50"
                        onClick={() => setShowAlert(false)}>X</button>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    <tbody>                                    
                        {messages.map((message, index) => (
                            <tr key={index} className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                <td className="px-4 py-3">
                                    {message.text}
                                </td>
                                <td className="px-4 py-3">
                                    <span className="text-gray-900 font-bold">{message.date}</span> 
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
            </div>
        </div>
    )
}