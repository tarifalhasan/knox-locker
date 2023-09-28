import React from 'react';

const LpTokens = () => {
  return (
    <>
      <div>
        <h2 className="text-t-20 font-bold text-center">
          Lock how many LP tokens?
        </h2>
        <div className="mt-2 space-y-3 overflow-hidden bg-[#101010] rounded-[12px] px-5 py-5">
          <h6 className="text-right text-t-12 font-normal">Balance: 0</h6>
          <div className="flex items-center justify-between">
            <div className=" max-w-[50%] sm:max-w-full">
              <input
                className="focus:outline-none block outline-none bg-transparent text-t-16 font-normal"
                value={0}
              />
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-t-16 font-bold">UNIV2</h3>
              <button className="inline-flex hover:bg-opacity-75 bg-skin-dark-green items-center rounded  py-2.5 px-5 text-t-12 font-medium text-white">
                MAX
              </button>
            </div>
          </div>
          <div className="flex pt-4  items-center gap-3">
            <button className="border-[#363636] hover:bg-slate-100 hover:text-black border rounded-full py-2.5  p-3 sm:px-5  text-t-[8px] sm:text-t-14 font-medium">
              25%
            </button>
            <button className="border-[#363636] hover:bg-slate-100 hover:text-black border rounded-full py-2.5  p-3 sm:px-5  text-t-[8px] sm:text-t-14 font-medium">
              50%
            </button>
            <button className="border-[#363636] hover:bg-slate-100 hover:text-black border rounded-full py-2.5  p-3 sm:px-5  text-t-[8px] sm:text-t-14 font-medium">
              75%
            </button>
            <button className="border-[#363636] hover:bg-slate-100 hover:text-black border rounded-full py-2.5  p-3 sm:px-5  text-t-[8px] sm:text-t-14 font-medium">
              100%
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LpTokens;
