"use client";

import { whiteLogo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Button } from "../ui/button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <header className="flex  z-[999] items-center justify-between container fixed left-0 right-0 top-5">
        <Link href={"/"}>
          <Image src={whiteLogo} alt="knox_locker" />
        </Link>
        <div className="flex items-center gap-6">
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
              <div className="">
                <div className="dropdown inline-block relative">
                  <button className=" bg-transparent text-lg hover:text-yellow-400 transition-all duration-300 font-medium py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Dropdown</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu w-28 absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <Button
            className="text-t-16 hidden lg:inline-flex text-skin-black font-bold"
            variant={"yellow"}
          >
            Learn more
          </Button>
          <button onClick={toggleMenu}>
            <BiMenu className="text-2xl lg:hidden text-white" />
          </button>
        </div>
      </header>

      <div
        className={`transition-all  ${
          openMenu ? "right-0" : "right-full"
        } duration-500 lg:hidden top-0 fixed bg-skin-bg z-[999999999999] h-screen w-full`}
      >
        <div className="flex px-5 py-5 items-center justify-between">
          <Link href={"/"}>
            <Image onClick={toggleMenu} src={whiteLogo} alt="knox_locker" />
          </Link>
          <button onClick={toggleMenu}>
            <IoMdClose className="text-2xl text-white" />
          </button>
        </div>
        <div className="space-y-5 px-5 ">
          <ul className="  space-y-4">
            <li>
              <Link
                className="text-lg hover:text-yellow-400 transition-all duration-300 font-medium"
                href={"/"}
                onClick={toggleMenu}
              >
                Link One
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-yellow-400 transition-all duration-300 font-medium"
                href={"/"}
                onClick={toggleMenu}
              >
                Link Two
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-yellow-400 transition-all duration-300 font-medium"
                href={"/"}
                onClick={toggleMenu}
              >
                Link Three
              </Link>
            </li>
            <li>
              <div className="">
                <div className="dropdown inline-block relative">
                  <button className=" bg-transparent text-lg hover:text-yellow-400 transition-all duration-300 font-medium py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Dropdown</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu w-28 absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <Button
            className="text-t-16 !flex w-full text-skin-black font-bold"
            variant={"yellow"}
            onClick={toggleMenu}
          >
            Learn more
          </Button>
          <div className=" flex flex-wrap items-center justify-between pt-4">
            <p className="text-sm font-normal text-white">
              © 2023 Knox Locker. All rights reserved.
            </p>
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  onClick={toggleMenu}
                  className="text-sm underline font-normal"
                  href="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  className="text-sm underline font-normal"
                  href="/"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  className="text-sm underline font-normal"
                  href="/"
                >
                  Cookies Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
