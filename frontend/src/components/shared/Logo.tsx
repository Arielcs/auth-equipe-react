import Image from "next/image";

export interface LogoProps {
    width?: number;
    height?: number;
}

export default function Logo(props: LogoProps) {
    return (
        <div>
            <Image 
                src="/logo.png" 
                alt="Logo" 
                width={props.width} height={props.height} 
            />
        </div>
    );
}