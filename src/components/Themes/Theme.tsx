"use client";
import React, { useState } from "react";
import Image from "next/image";



const themes = [
  { type: 'gradient', name: "Theme 2", img: true, src: '/background/2.png', background: "url(/background/2.png)" },
  { type: 'gradient', name: "Theme 3", img: true, src: '/background/3.png', background: "url(/background/3.png)" },
  { type: 'gradient', name: "Theme 4", img: true, src: '/background/4.png', background: "url(/background/4.png)" },
  { type: 'gradient', name: "Theme 1", img: true, src: '/background/1.png', background: "url(/background/1.png)" },
  { type: 'gradient', name: "Theme 5", img: true, src: '/background/5.png', background: "url(/background/5.png)" },
  { type: 'gradient', name: "Theme 6", img: true, src: '/background/6.png', background: "url(/background/6.png)" },
  { type: 'color', name: "Theme 3", img: false, background: "linear-gradient(567deg, rgba(165, 42, 4, 0.89), rgba(113, 102, 8, 0.89), rgba(13, 95, 16, 0.93), rgba(4, 79, 88, 0.94), rgba(19, 56, 86, 0.9), rgba(24, 32, 78, 0.94), rgba(100, 8, 115, 0.95))" },
  { type: 'color', name: "Theme 4", img: false, background: "linear-gradient(180deg, #08a50e, #69bb03)" },
  { type: 'color', name: "Theme 5", img: false, background: "linear-gradient(45deg, #795548, #945c48)" },
  { type: 'color', name: "Theme 7", img: false, background: "linear-gradient(45deg, #29323c, #485563)" },
  { type: 'color', name: "Theme 7", img: false, background: "linear-gradient(45deg, #1565C0, #1E88E5)" },
  { type: 'color', name: "Theme 7", img: false, background: "linear-gradient(45deg, #65379b, #886aea)" },
  { type: 'color', name: "Theme 7", img: false, background: "linear-gradient(180deg, #ff5447, #f1076f)" },
  // { type: 'color', name: "Theme 7", img: false, background: "" },
  // { type: 'color', name: "Theme 7", img: false, background: "" },
  { type: 'color', name: "Theme 8", img: false, background: "#09867B" },
];

var themeColor = 'Theme 2';
export default function Theme() {
  const ratio_w_h = 80;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Theme 1');

  const selectThemeFunction = (theme: any) => {
    console.log(theme);
    document.body.style.background = theme.background;
    setSelectedTheme(theme);

    // if (typeof theme === 'string') {
    //   document.body.style.backgroundColor = theme;
    //   setSelectedTheme(theme);
    // } else if (theme.type === 'color') {
    //   document.body.style.backgroundColor = theme.background;
    //   setSelectedTheme(theme.background);
    // } else {
    //   document.body.style.backgroundImage = `url(${theme.background})`;
    //   setSelectedTheme(theme.background);
    // }
  }


  themeColor = selectedTheme;
  return (
    <div className="">
      {isSidebarOpen && (
        <div
          style={isSidebarOpen ? { display: 'block' } : { display: 'none' }}
          className="bg-gray-800 w-48 p-2 absolute right-0 top-0 h-screen shadow-lg">
          <h2 className="font-bold mb-4 text-white">Gradient Background</h2>
          <ul className="flex flex-row flex-wrap gap-3">
            {themes.map((theme, index) => (
              <li key={index} className="mb-2 cursor-pointer" onClick={(e) => { e.stopPropagation(); selectThemeFunction(theme); }}>         {theme.img ? (
                <Image
                  src={theme.src || '/background/1.png'}
                  alt={theme.name}
                  width={ratio_w_h}
                  height={ratio_w_h}
                  className="rounded"
                  style={{
                    width: `${ratio_w_h}px`,
                    height: `${ratio_w_h}px`,
                    borderRadius: "15px",
                  }}

                />
              ) : (
                <div
                  style={{
                    background: theme.background,
                    width: `${ratio_w_h}px`,
                    height: `${ratio_w_h}px`,
                    borderRadius: "15px",
                  }}
                ></div>
              )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={`absolute rounded bg-black ${isSidebarOpen ? 'right-48' : 'right-0'} top-1/2 items-center justify-center shadow-lg`}>
        <button
          className="p-2 border-2 border-gray-600 rounded bg-black hover:bg-gray-700 transition-colors duration-200 ease-in-out"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 duration-5000 ease-in-out"
          // className="h-6 w-6 animate-spin duration-5000 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.847.516 1.874.282 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { themeColor };