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
    <div className='sm:bg-black'>
    <div className={`w-52 bg-black sm:bg-black relative`} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="flex flex-row align-center sm:bg-black border-b mb-3 border-gray-600 mb-3 gap-2 justify-center self-center">
        <Logo width={50} classes="" height={50}/>
        <span>Dashtreme Admin</span>
      </div>
      <div className="flex fixed ">
        <ul className="overflow-y-auto">
          <li className="text-gray-500 uppercase text-xs font-bold tracking-wider p-2">
            MAIN NAVIGATION
          </li>
          {memoizedMenuItems.map((item) => (
            <NavigationItem key={item.href} item={item} />
          ))}
          <li  className="text-gray-500  uppercase text-xs ml-1 font-bold tracking-wider p-2">
            LABELS
          </li>
          {memoizedLabelItems.map((item) => (
            <NavigationItem key={item.href} item={item} />
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}