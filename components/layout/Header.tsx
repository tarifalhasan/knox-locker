import { etheIcon, sunIcon, userIcon } from "@/assets/icons";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavigationMenus from "./Navigation";
const Header = () => {
  return (
    <header className="flex h-20 items-center px-5  bg-skin-primary justify-between">
      <div className=" inline-flex items-center gap-8">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavigationMenus />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="inline-flex px-5 gap-2 items-center h-10 rounded-[20px] bg-skin-bg">
          <Image src={etheIcon} alt="sdsdsd" />
          <h4 className="text-t-14 font-medium">0xED9...a9e</h4>
        </div>
        <Link href={""}>
          <Image src={userIcon} alt="user" />{" "}
        </Link>
        <Link href={""}>
          <Image src={sunIcon} alt="user" />{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
