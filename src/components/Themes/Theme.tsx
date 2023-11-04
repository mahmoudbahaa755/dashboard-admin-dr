"use client";
import React, { useState } from "react";
import Image from "next/image";
const themes = [
  { name: "Theme 2", img: true, background: "/background/2.png" },
  { name: "Theme 3", img: true, background: "/background/3.png" },
  { name: "Theme 4", img: true, background: "/background/4.png" },
  { name: "Theme 1", img: true, background: "/background/1.png" },
  { name: "Theme 5", img: true, background: "/background/5.png" },
  { name: "Theme 6", img: true, background: "/background/6.png" },
  { name: "Theme 3", img: false, background: "blue" },
  { name: "Theme 4", img: false, background: "green" },
  { name: "Theme 5", img: false, background: "red" },
];

var themeColor= 'Theme 2';
export default function(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Theme 1');
  themeColor= selectedTheme;
  return (
    <div className="">
      {isSidebarOpen && (
        <div className="bg-gray-800 w-64 p-3 absolute right-0 top-0 h-screen">
          <h2 className="font-bold mb-4">Themes</h2>
          <ul className="flex flex-row flex-wrap gap-1">
            {themes.map((theme, index) => (
              <li key={index} className="mb-2">
                {theme.img ? (
                  <Image
                    src={theme.background}
                    alt={theme.name}
                    width={70}
                    height={70}
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: theme.background,
                      width: "60px",
                      height: "60px",
                    }}
                  ></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={` absolute rounded bg-black ${isSidebarOpen ? 'right-64' :'right-0'} top-1/2 items-center justify-center`}>
        <button
          className="p-2 border-2 border-gray-600 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export {themeColor};