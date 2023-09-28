import { token2 } from '@/assets/icons';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiArrowFromRight, BiArrowToRight } from 'react-icons/bi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import DropDown from '@/components/common/DropDown';
import MainTabs from '@/components/common/TopTabs';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import React from 'react';
import PairLock from '@/components/common/PairLock';

const Launchpad = () => {
  return (
    <>
      <Header />
      <div className="flex pt-5 flex-col  items-center">
        <DropDown />
        <MainTabs />
      </div>
      <main className=" px-5 py-5  w-full relative overflow-hidden ">
        <div className="mx-auto flex flex-col space-y-3 justify-center items-center">
          <div className="bg-[#1E2023] space-y-5 px-5 py-3 w-full  gap-4 max-w-[1100px] rounded-[20px]">
            <div>
              <h3 className="text-center text-t-24 sm:text-t-34 font-medium">
                $80.59M
              </h3>
              <p className="text-t-12 font-normal text-center text-skin-silver-100">
                total value locked in 43161 pairs
              </p>
              <div className="flex pt-4 justify-center">
                <div className=" inline-flex justify-center rounded-sm items-center mx-auto text-t-14 font-medium bg-skin-dark-green py-3 px-5">
                  Lock / Withdraw Liquidity
                </div>
              </div>
            </div>
            <div className="bg-skin-bg rounded-full flex items-center justify-between py-3.5 px-5">
              <div className="flex-1 flex items-center gap-2">
                <Image src={token2} alt="token" />
                <input
                  type="text"
                  className="outline-none bg-transparent focus:outline-none flex-1 text-t-14 text-skin-silver-100 w-full"
                  placeholder="Pair name or address..."
                />
              </div>
              <HiOutlineSearch className="text-skin-silver-100 text-2xl" />
            </div>
            <div className="flex justify-end ">
              <Select>
                <SelectTrigger
                  iconColor="text-skin-dark-green"
                  className="w-[120px] h-8 border-[#363636]"
                >
                  <SelectValue placeholder="Sort Value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* pagination */}
            <div className="flex pt-3  justify-end items-center gap-4">
              <button>
                <BiArrowFromRight className="text-2xl rounded hover:bg-slate-100 hover:text-slate-950 text-skin-gray-900" />
              </button>
              <button>
                <MdKeyboardArrowLeft className="text-2xl rounded hover:bg-slate-100 hover:text-slate-950 text-skin-gray-900" />
              </button>
              <button>
                <MdKeyboardArrowRight className="text-2xl rounded hover:bg-slate-100 hover:text-slate-950 text-skin-gray-900" />
              </button>
              <button>
                <BiArrowToRight className="text-2xl rounded text-skin-gray-900 hover:text-slate-950 hover:bg-slate-100" />
              </button>
            </div>
            {/* list of pair */}

            <ul>
              <PairLock />
              <PairLock />
              <PairLock />
              <PairLock />
            </ul>
            <div className="flex pt-3  justify-center items-center gap-4">
              <button>
                <BiArrowFromRight className="text-2xl rounded hover:bg-slate-100 hover:text-slate-950 text-skin-gray-900" />
              </button>
              <button>
                <MdKeyboardArrowLeft className="text-2xl rounded hover:bg-slate-100 hover:text-slate-950 text-skin-gray-900" />
              </button>
              1/2159
              <button>
                <MdKeyboardArrowRight className="text-2xl rounded hover:bg-slate-100 hover:text-slate-950 text-skin-gray-900" />
              </button>
              <button>
                <BiArrowToRight className="text-2xl rounded text-skin-gray-900 hover:text-slate-950 hover:bg-slate-100" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Launchpad;
