import { placeholder_image } from "@/assets/images";
import Image from "next/image";
import TokenomicsContentCard from "./TokenomicsContentCard";

const Tokenomics = () => {
  return (
    <section className="   bg-cover  bg-tokenomics-bg    bg-center   z-30  bg-no-repeat    w-full  h-full">
      <div>
        <div className="container space-y-10 lg:space-y-0 py-10">
          <div className="max-w-[768px]  pt-2 lg:pt-20 lg:pb-28  mx-auto">
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
              {" "}
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
            <Image src={placeholder_image} alt="sdsd" />
            <div className=" space-y-8">
              {" "}
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
    </section>
  );
};

export default Tokenomics;
