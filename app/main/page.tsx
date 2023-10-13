import { token1, token2 } from "@/assets/icons";
import DropDown from "@/components/common/DropDown";
import MainTabs from "@/components/common/TopTabs";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <div className="flex pt-5 flex-col  items-center">
        <DropDown />
        <MainTabs />
      </div>
      <main className=" px-5 py-5  w-full relative overflow-hidden ">
        <div className="mx-auto flex flex-col space-y-3 justify-center items-center">
          <div className="bg-skin-primary px-5 py-3 w-full flex items-center gap-4 max-w-[576px] rounded-[20px]">
            <button className="text-t-16 font-medium text-skin-dark-green">
              New Lock
            </button>
            <button className="text-t-16 font-medium text-skin-white">
              Edit / Withdraw
            </button>
          </div>
          <div className="bg-skin-primary space-y-3 px-5 py-3 w-full  gap-4 max-w-[576px] rounded-[20px]">
            <div className="pt-5 w-full flex items-center gap-3">
              <div>
                <div className=" w-10 h-10  rounded-full grid place-items-center">
                  <Image src={token2} alt="sdsdsd" />
                </div>
              </div>
              <h3 className="text-t-20 font-bold w-full">Uniswap V2 Locker</h3>
            </div>
            <p className="text-t-16 font-normal">
              Use the locker to prove to investors you have locked liquidity. If
              you are not a token developer, this section is almost definitely
              not for you.
            </p>
            <div>
              <p className="text-t-16 pt-2 font-normal">Our lockers offer</p>
              <ul className="pl-6 pt-1">
                <li className="text-t-16 font-normal">Lock splitting</li>
                <li className="text-t-16 font-normal">Liquidity Migration</li>
                <li className="text-t-16 font-normal">Relocking</li>
                <li className="text-t-16 font-normal">
                  Lock ownership transfer
                </li>
              </ul>
            </div>
            <p className="text-t-16 pt-7 font-normal">
              Enter the Uniswap V2 pair address youd like to lock liquidity for
            </p>
            <div>
              <input
                className="outline-none w-full focus:outline-none py-3 rounded-3xl px-4 bg-skin-heavy-dark"
                value="0xc70bb2736e218861dca818d1e9f7a1930fe61e5b"
              />
              <small className="text-center pt-1 block text-t-12 text-skin-silver-100">
                e.g. 0xc70bb2736e218861dca818d1e9f7a1930fe61e5b
              </small>
            </div>
            {/* Pair found */}
            <div className="mt-5 space-y-4 rounded-[20px] mb-6 shadow-sm py-4 px-5">
              <h4 className="text-t-24 font-normal">Pair found</h4>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center ">
                  <div>
                    <Image
                      className=" rounded-full w-8 h-8  "
                      src={token2}
                      alt="token12"
                    />
                  </div>
                  <div>
                    <Image
                      className=" rounded-full w-8 h-8  "
                      src={token1}
                      alt="token"
                    />
                  </div>
                  <h3 className="text-t-16 font-normal text-skin-white ml-2">
                    UNCX / WETH
                  </h3>
                </div>
                <h5 className="text-t-16 font-normal text-skin-white">0</h5>
              </div>
              <button className="flex w-full items-center justify-center h-[52px] bg-skin-yellow text-t-16 rounded-full font-normal text-black">
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
