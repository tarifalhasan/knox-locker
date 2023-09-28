import { etheIcon, flokiIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';
import { IoMdLock } from 'react-icons/io';

const PairLock = () => {
  return (
    <li className="flex border-b border-[#363636] py-5 items-center justify-between">
      <div>
        <div className="flex items-center gap-3.5 ">
          <div className="flex relative items-center">
            <div className=" ">
              <Image
                className="w-8 h-8 border border-black rounded-full z-50"
                src={flokiIcon}
                alt="floki"
              />
            </div>
            <div>
              <Image
                className="w-8 h-8 border border-black rounded-full z-50"
                src={etheIcon}
                alt="sdsd"
              />
            </div>
          </div>
          <h3 className="text-t-20 font-medium">
            CULT
            <span className="text-t-16 text-skin-silver-100 font-normal">
              /ETH
            </span>
          </h3>
        </div>
        <h4 className="text-t-12 pt-1 pr-1 text-skin-silver-100 font-medium">
          Liquidity:{' '}
          <span className="text-white text-t-12 font-medium">$3.14M</span>
        </h4>
      </div>
      <div className="flex flex-col">
        <h4 className="inline-flex  justify-end items-center  text-t-16  font-medium text-skin-dark-green">
          $4.76M <IoMdLock size={20} />
        </h4>

        <p className="text-t-12 text-skin-silver-100 font-medium">
          160% - next in 2 years
        </p>
      </div>
    </li>
  );
};

export default PairLock;
