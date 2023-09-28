import {
  backIcon,
  crossIcon,
  etheIcon,
  lockIcon,
  token1,
} from '@/assets/icons';
import LpTokens from '@/components/LpTokens';
import UnLockDate from '@/components/UnLockDate';
import DropDown from '@/components/common/DropDown';
import MainTabs from '@/components/common/TopTabs';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LockLiquidity = () => {
  return (
    <>
      <Header />
      <div className="flex pt-5 flex-col  items-center">
        <DropDown />
        <MainTabs />
      </div>
      <main className=" px-5 py-5   w-full relative overflow-hidden ">
        <div className="mx-auto flex flex-col relative space-y-3 justify-center items-center">
          <div className="bg-skin-primary relative px-5 py-3 w-full flex items-center gap-4 max-w-[576px] rounded-[20px]">
            <button className="text-t-16 font-medium text-skin-dark-green">
              New Lock
            </button>
            <button className="text-t-16 font-medium text-skin-white">
              Edit / Withdraw
            </button>
          </div>

          <div className="bg-skin-primary relative space-y-5 px-5 py-3 w-full  gap-4 max-w-[576px] rounded-[20px]">
            <Link
              href={''}
              className="inline-flex text-t-14 font-medium items-center gap-2"
            >
              <Image src={backIcon} alt="back_icon" />
              <span className="text-t-14  font-medium">Back</span>
            </Link>
            <h2 className="pt-3 relative z-30 text-center text-t-34 font-bold text-skin-silver-100">
              Lock Liquidity
            </h2>
            <Image
              className=" z-10 absolute   right-0 pr-5  top-0"
              src={lockIcon}
              alt="sdsds"
            />
            <div className="flex items-center justify-center gap-3">
              <Image src={token1} alt="token1" />
              <h4 className="text-t-24 font-normal">UNCX / WETH</h4>
              <Image src={etheIcon} alt="eth" />
            </div>
            {/* Lp Tokens */}
            <LpTokens />
            <UnLockDate />
            <div className="space-y-5">
              <h2 className="text-t-20 font-bold text-center">
                Who can withdraw the tokens?
              </h2>
              <div className="flex items-center justify-center gap-2">
                <button className="inline-flex hover:bg-opacity-75 bg-skin-dark-green items-center rounded  py-3 px-5 text-t-14 font-medium text-white">
                  Me
                </button>
                <button className="text-t-14 font-medium text-white">
                  Someone else
                </button>
              </div>
            </div>
            <div className="">
              <h2 className="text-t-20 font-bold text-center">
                Do you have a valid referral address?
              </h2>
              <p className="text-t-12 text-skin-silver-100 font-normal text-center">
                Enjoy a 10% flatrate discount if so!
              </p>
              <div className="flex pt-4 items-center justify-center gap-2">
                <button className="inline-flex hover:bg-opacity-75 bg-skin-dark-green items-center rounded  py-3 px-5 text-t-14 font-medium text-white">
                  No
                </button>
                <button className="text-t-14 font-medium text-white">
                  Yes
                </button>
              </div>
            </div>
            <div className="space-y-3 flex-col items-center">
              <h2 className="text-t-20 font-bold text-center">Fee options</h2>
              <div className="flex justify-center">
                <div>
                  <button className="flex  justify-center h-24 hover:bg-opacity-75 bg-skin-dark-green items-center rounded  py-3 px-12 text-t-14 font-medium text-white">
                    <span className="flex flex-col">
                      <span className="text-t-20 font-medium">0.1 ETH</span>
                      <span className="text-t-12 font-normal">
                        (+ 1% UNIV2)
                      </span>
                    </span>
                  </button>
                  <p className="text-t-12 font-normal text-skin-silver-100 text-center">
                    Your balance: 0.02 ETH
                  </p>
                </div>
              </div>
            </div>
            <p className="text-t-16 font-normal text-center">
              Once tokens are locked they cannot be withdrawn under any
              circumstances until the timer has expired. Please ensure the
              parameters are correct, as they are final.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <button className=" bg-skin-gray-800 rounded inline-flex justify-center items-center h-[45px] text-skin-gray-900 text-t-16 font-medium ">
                Approve
              </button>
              <button className=" bg-skin-gray-800 rounded inline-flex justify-center items-center h-[45px] text-skin-gray-900 text-t-16 font-medium ">
                Lock
              </button>
            </div>
            <div className="bg-skin-danger bg-opacity-20 rounded-lg py-4 px-5 flex items-center gap-3">
              <div>
                <div className="bg-red-500 basis-9 w-9 h-9 rounded-full grid place-items-center text-white font-bold">
                  X
                </div>
              </div>
              <p className="text-t-16 f font-medium">
                You do not not have enough ETH in your wallet to perform this
                transction. 0.1 ETH required
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LockLiquidity;
