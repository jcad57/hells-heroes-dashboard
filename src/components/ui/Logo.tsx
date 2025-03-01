import Image from "next/image";
import logo from "@/assets/images/hhvii-logo.png";

export default function Logo() {
    return <Image layout="intrinsic" src={logo} width={220} height={100} alt="logo" />;
}
