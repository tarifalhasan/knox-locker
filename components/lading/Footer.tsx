"use client";
import { whiteLogo } from "@/assets/images";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-skin-footer overflow-hidden py-14 w-full border-t border-[#252528]">
      <div className="container flex-col lg:flex-row flex  gap-24 justify-between">
        <div className="basis-[40%]">
          <Link href={"/"}>
            <Image src={whiteLogo} alt="sdsd" />
          </Link>
          <p className="text-lg font-medium py-5">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex items-center  gap-2 w-full">
            <input
              type=" text"
              placeholder="Enter your email"
              className="text-base font-normal bg-transparent py-2 px-4 flex-1 outline-none focus:outline-none border border-white rounded-[6px]"
            />
            <button className="py-2 border border-transparent px-4 rounded-[6px] bg-white text-skin-black font-medium active:bg-opacity-70 ">
              Send
            </button>
          </div>
          <p className="text-sm font-normal text-white pt-4">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
        <div className="basis-[60%] grid grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-bold">Column One</h4>
            <ul className="pt-4 space-y-2">
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Column Two</h4>
            <ul className="pt-4 space-y-2">
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
              <li>
                <Link
                  className="text-base transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  Link1
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Follow Use</h4>
            <ul className="pt-4 space-y-2">
              <li>
                <Link
                  className="text-base  inline-flex items-center gap-3 transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  <FaFacebookF />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="text-base  inline-flex items-center gap-3 transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  <FaInstagram />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="text-base  inline-flex items-center gap-3 transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  <FaTwitter />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="text-base  inline-flex items-center gap-3 transition-all duration-300 hover:text-skin-yellow font-medium text-white"
                  href={"/"}
                >
                  <FaLinkedin />
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap items-center justify-between pt-10">
        <p className="text-sm font-normal text-white">
          © 2023 Knox Locker. All rights reserved.
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <Link className="text-sm underline font-normal" href="/">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="text-sm underline font-normal" href="/">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link className="text-sm underline font-normal" href="/">
              Cookies Settings
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
