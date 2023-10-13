import rocket from "@/assets/icons/Rocket.svg";
import chackMark from "@/assets/icons/checkmark.svg";
import lockIcon from "@/assets/icons/lock1.svg";
import benifitsImageMobile from "@/assets/images/bg benefits-mobile.png";
import img from "@/assets/images/bg benefits.png";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
const Benefits = () => {
  interface Props {
    icon: StaticImageData;
    title: string;
    description: string;
  }

  const Card: FC<Props> = ({ icon, title, description }) => (
    <div className="flex items-start gap-2">
      <div className="">
        <Image src={icon} alt="icopn" />
      </div>
      <div className=" space-y-4 lg:space-y-2 xl:space-y-4">
        <h2 className=" text-lg xl:text-2xl  text-skin-yellow font-medium">
          {title}
        </h2>
        <p className=" text-xs xl:text-base text-left">{description}</p>
        <Button variant={"yellow"} className="!text-t-16 !font-medium">
          Learn more
        </Button>
      </div>
    </div>
  );

  return (
    <section className=" relative -mt-[292px]  mb-[2rem] sm:mb-0 sm:mt-0  flex items-center  z-30  bg-no-repeat  bg-cover min-h-screen   w-full h-full md:min-h-[65vh]  lg:min-h-screen">
      <div className=" hidden md:block absolute  inset-0 top-0  md:top-[23%] lg:top-0">
        <Image src={img} className=" w-full" alt="asdsd" />
      </div>
      <div className="md:hidden absolute left-0 z-10">
        <Image src={benifitsImageMobile} alt="sdsd" />
      </div>
      <div className="grid pt-[44rem] md:pt-0 relative z-[888]  2xl:pt-[2rem] xl:mb-[-2rem] mb-0 container grid-cols-1 md:grid-cols-2">
        <div></div>
        <div className="space-y-9 relative z-50">
          <Card
            icon={chackMark}
            title="Describe feature and benefit"
            description="Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers."
          />
          <Card
            icon={lockIcon}
            title="Describe feature and benefit"
            description="Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers."
          />
          <Card
            icon={rocket}
            title="Describe feature and benefit"
            description="Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
