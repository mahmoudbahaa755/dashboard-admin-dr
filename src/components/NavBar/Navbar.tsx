'use client'
import { useContext, useMemo } from "react";
import Logo from "@/elements/Logo";
import { NavToggleContext } from '@/hooks/context/NavToggle';
import { menuItems, labelItems } from './data';
import NavigationItem from "./NavigationItem";

export default function Navbar() {
  const { isOpen } = useContext(NavToggleContext);
  const memoizedMenuItems = useMemo(() => menuItems, []);
  const memoizedLabelItems = useMemo(() => labelItems, []);

  return (
      <div className={`w-52 bg-inner `} style={{ display: isOpen ? 'block' : 'none' }}>
       
        <div className="flex  fixed ">
          <ul className="overflow-y-auto">
            <li>
            <div className="flex flex-row py-2 align-center  border-b mb-3 border-gray-600 gap-2 justify-center self-center">
          <Logo width={50} classes="" height={50} />
          <span>Endo Hub Admin</span>
        </div>
        </li>
            <li className="text-gray-500 uppercase text-xs font-bold tracking-wider p-2">
              MAIN NAVIGATION
            </li>
            {memoizedMenuItems.map((item,key) => (
              <NavigationItem key={key} item={item} />
            ))}
            <li className="text-gray-500  uppercase text-xs ml-1 font-bold tracking-wider p-2">
              LABELS
            </li>
            {memoizedLabelItems.map((item,key) => (
              <NavigationItem key={key} item={item} />
            ))}
          </ul>
        </div>
      </div>
  );
}