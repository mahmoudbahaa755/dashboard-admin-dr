import Link from "next/link";
import Image from "next/image";

interface IconProps {
  name: string;
  href?: string;
  src?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  src,
  href,
  className,
  width = 25,
  height = 25,
}) => {
  const icon = <img src={src} alt={name} width={width} height={height} />;

 
    return (
      <Link href={href} className={` cursor-pointer ${className}`}>
        {icon}
      </Link>
    );
  
};

export default Icon;
