import Link from "next/link";

const NavigationItem = ({ item }) => {
    const { svg, label, href, badge } = item;
  
    return (
      <li className=" hover:border-l-2  border-gray pl-4">
        <Link  className="text-white flex gap-4 py-2 justify-start" href={href}>
          {svg}
          <span>{label}</span>
          {badge && (
            <small className="badge float-right bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {badge}
            </small>
          )}
        </Link>
      </li>
    );
  };
  
export default NavigationItem;