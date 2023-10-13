import { whiteLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex  z-[999] items-center justify-between container fixed left-0 right-0 top-5">
      <Link href={"/"}>
        <Image src={whiteLogo} alt="knox_locker" />
      </Link>
      <div className="flex items-center gap-3">
        <ul className=" hidden lg:flex items-center gap-5">
          <li>
            <Link
              className="text-lg hover:text-yellow-400 transition-all duration-300 font-medium"
              href={"/"}
            >
              Link One
            </Link>
          </li>
          <li>
            <Link
              className="text-lg hover:text-yellow-400 transition-all duration-300 font-medium"
              href={"/"}
            >
              Link Two
            </Link>
          </li>
          <li>
            <Link
              className="text-lg hover:text-yellow-400 transition-all duration-300 font-medium"
              href={"/"}
            >
              Link Three
            </Link>
          </li>
          <li>
            <Link
              className="text-lg hover:text-yellow-400 transition-all duration-300 font-medium"
              href={"/"}
            >
              Link Four
            </Link>
          </li>
        </ul>
        <Button
          className="text-t-16 text-skin-black font-bold"
          variant={"yellow"}
        >
          Learn more
        </Button>
      </div>
    </header>
  );
};

export default Header;
