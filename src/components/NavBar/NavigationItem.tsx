import Link from "next/link";

const NavigationItem = ({ item }:any) => {
    const { svg, label, href, badge } = item;
  
    return (
      <li className=" hover:border-l-4  border-gray pl-4">
        <Link  className="text-white flex gap-4 py-2 justify-start" href={href}>
          {svg}
          <span>{label}</span>
         
        </Link>
      </li>
    );
  };
  
export default NavigationItem;