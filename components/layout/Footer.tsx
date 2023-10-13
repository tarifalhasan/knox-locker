import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-skin-primary h-[75px]">
      <div className="flex items-center gap-5">
        <Link href={"/"} target="_blank">
          <FaTwitter className="text-t-24 text-skin-silver-100 hover:text-white" />
        </Link>
        <ul className="flex items-center gap-3">
          <li>
            <Link
              href={"/"}
              className="text-t-14 hover:underline text-skin-silver-100 font-medium"
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-t-14 hover:underline text-skin-silver-100 font-medium"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-t-14 hover:underline text-skin-silver-100 font-medium"
            >
              uncx.network
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
