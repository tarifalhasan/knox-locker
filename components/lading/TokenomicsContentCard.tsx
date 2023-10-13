import { FC } from "react";

interface props {
  shortTitle: string;
  heading: string;
  des: string;
}

const TokenomicsContentCard: FC<props> = ({ shortTitle, heading, des }) => {
  return (
    <>
      <div className=" w-full lg:max-w-[330px]">
        <h2 className="text-t-24 xl:text-t-36 text-center  font-bold text-skin-yellow">
          {shortTitle}
        </h2>
        <h3 className="text-center lg:max-w-[240px] w-full  text-t-20 lg:text-t-24 leading-[30px] font-bold text-white">
          {heading}
        </h3>
        <p className="text-center lg:max-w-[240px] w-full  text-base font-normal text-white">
          {des}
        </p>
      </div>
    </>
  );
};

export default TokenomicsContentCard;
