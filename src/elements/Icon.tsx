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
  src = "/default.png", // provide a default image
  href = "/", // provide a default link
  className,
  width = 25,
  height = 25,
}) => {
  const icon = <Image src={src} alt={name} width={width} height={height} />;

  return (
    <Link href={href} className={`cursor-pointer ${className}`}>
    {icon}
    </Link>
  );
};

export default Icon;