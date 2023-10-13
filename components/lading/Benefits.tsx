import icon from "@/assets/icons/Icon.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const Benefits = () => {
  const Card = () => (
    <div className="flex items-start gap-2">
      <div className="">
        <Image src={icon} alt="icopn" />
      </div>
      <div className=" space-y-4 lg:space-y-2 xl:space-y-4">
        <h2 className=" text-lg xl:text-2xl  text-skin-yellow font-medium">
          Describe feature and benefit
        </h2>
        <p className=" text-xs xl:text-base text-left">
          Highlight Unique Selling Propositions with a short summary of the key
          feature and how it benefits customers.
        </p>
        <Button variant={"yellow"} className="!text-t-16 !font-medium">
          Learn more
        </Button>
      </div>
    </div>
  );

  return (
    <section className="bg-benefits-bg  flex items-center  absolute  left-0 right-0 top-[168vh]    z-30  bg-no-repeat  bg-cover   w-full  h-[130vh] 2xl:h-[150vh]">
      <div className="grid relative z-[888]  2xl:pt-[2rem] xl:mb-[-2rem] mb-0 container grid-cols-2">
        <div></div>
        <div className="space-y-9 relative z-[10000]">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
