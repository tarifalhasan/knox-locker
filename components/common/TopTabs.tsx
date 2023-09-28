'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const MainTabs = () => {
  const pathName = usePathname();
  return (
    <div className="flex border overflow-hidden border-[#363636] max-w-[800px] rounded-full items-center  justify-between  w-full bg-[#1E2023] h-[50px]">
      <Link
        href={'/tokens'}
        className={` ${
          pathName === '/tokens' && 'bg-skin-bg'
        } basis-[33.33333333333333%] h-full uppercase inline-flex items-center justify-center`}
      >
        Tokens
      </Link>
      <Link
        href={'/lock-liquidity'}
        className={`${
          pathName === '/lock-liquidity' && 'bg-skin-bg'
        } basis-[33.33333333333333%] uppercase h-full inline-flex items-center justify-center`}
      >
        LOCK LIQUIDITY
      </Link>
      <Link
        href={'/launchpad'}
        className={`${
          pathName === '/launchpad' && 'bg-skin-bg'
        } basis-[33.33333333333333%] h-full inline-flex items-center justify-center`}
      >
        LAUNCHPAD
      </Link>
    </div>
  );
};

export default MainTabs;
