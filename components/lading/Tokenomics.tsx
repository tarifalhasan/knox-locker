import { placeholder_image } from "@/assets/images";
import tokenomics_bg_m from "@/public/tokenomics-mobilr.png";
import tokenomics_bg from "@/public/tokenomics.png";
import Image from "next/image";
import TokenomicsContentCard from "./TokenomicsContentCard";
const Tokenomics = () => {
  return (
    <section className="    bg-cover     relative    bg-top  z-30  bg-no-repeat    w-full  h-full">
      <div className=" relative z-50">
        <div className="container space-y-10 lg:space-y-0 2xl:py-10">
          <div className="max-w-[768px]  pt-2 2xl:pt-10 lg:pb-5  2xl:pb-28  mx-auto">
            <h2 className="text-center text-t-34 leading-[44px] lg:text-t-48 font-bold lg:leading-[60px] text-skin-yellow">
              This where the stats section for Knox Locker
            </h2>
            <p className="pera pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="lg:hidden flex justify-center">
            <Image src={placeholder_image} alt="sdsd" />
          </div>
          <div className="grid lg:hidden grid-cols-2 gap-x-7  gap-y-12 ">
            <TokenomicsContentCard
              shortTitle="12345+"
              heading="Short heading goes here"
              des="Lorem ipsum dolor sit amet, "
            />
            <TokenomicsContentCard
              shortTitle="12345+"
              heading="Short heading goes here"
              des="Lorem ipsum dolor sit amet, "
            />
            <TokenomicsContentCard
              shortTitle="12345+"
              heading="Short heading goes here"
              des="Lorem ipsum dolor sit amet, "
            />
            <TokenomicsContentCard
              shortTitle="12345+"
              heading="Short heading goes here"
              des="Lorem ipsum dolor sit amet, "
            />
          </div>
          <div className="hidden lg:flex items-center  justify-between">
            <div className=" space-y-8">
              <TokenomicsContentCard
                shortTitle="12345+"
                heading="Short heading goes here"
                des="Lorem ipsum dolor sit amet, "
              />
              <TokenomicsContentCard
                shortTitle="12345+"
                heading="Short heading goes here"
                des="Lorem ipsum dolor sit amet, "
              />
            </div>
            <Image
              className="w-full h-full max-w-[600px] mx-auto"
              src={placeholder_image}
              alt="sdsd"
            />
            <div className=" space-y-8">
              <TokenomicsContentCard
                shortTitle="12345+"
                heading="Short heading goes here"
                des="Lorem ipsum dolor sit amet, "
              />
              <TokenomicsContentCard
                shortTitle="12345+"
                heading="Short heading goes here"
                des="Lorem ipsum dolor sit amet, "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:block absolute z-10  left-0 right-0 -top-[10%] 2xl:top-[-11%]">
        <Image src={tokenomics_bg} className="w-full" alt="" />
      </div>
      <div className="  md:hidden absolute z-10  left-0 right-0 -top-[40%]">
        <Image src={tokenomics_bg_m} alt="" />
      </div>
    </section>
  );
};

export default Tokenomics;
