import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo-icon.png";

interface LogoProps {
    width: number;
    height: number;
    classes: string;
}

const Logo: React.FC<LogoProps> = ({width=50, height=50 ,classes}) => {
    return (
       
            <Link href="/" className={classes || ''}>
                <Image
                    src={logo}
                    width={width}
                    height={height}
                   
                    alt="Logo Icon"
                />
              
            </Link>
     
    );
};

export default Logo;