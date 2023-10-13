import { relume, webflow } from "@/assets/images";
import Image from "next/image";
import { Button } from "../ui/button";

const Features = () => {
  const topIcons = [
    {
      icon: relume,
      ic: 1,
    },
    {
      icon: webflow,
      ic: 2,
    },
    {
      icon: relume,
      ic: 3,
    },
    {
      icon: webflow,
      ic: 4,
    },
    {
      icon: relume,
      ic: 5,
    },
    {
      icon: webflow,
      ic: 6,
    },
  ];
  return (
    <section className="bg-features-bg  absolute  left-0 right-0 top-[75vh]   z-30  bg-no-repeat bg-cover  bg-center w-full  h-[90vh] 2xl:h-[105vh]">
      <div className="container">
        <div className="space-y-1  pt-[120px]">
          <p className="pera">
            Trusted by the world&apos;s best companies [social proof to build
            credibility]
          </p>
          <div className="flex items-center justify-center gap-7 flex-wrap">
            {topIcons.map((icon) => (
              <Image src={icon.icon} key={icon.ic} alt="swdsdsd" />
            ))}
          </div>
        </div>
        <div className=" pt-[150px] md:pt-[119px]  lg:max-w-[1000px] mx-auto">
          <h2 className="heading1 text-center text-skin-yellow">
            Describe main feature and benefit of using your product or service
          </h2>
          <p className="pera px-5 py-5">
            Highlight the Unique Selling Proposition (USP) with a short summary
            of the main feature and how it benefits customers. The idea here is
            to keep it short and direct. If the visitor wishes to learn more
            they will hit the button.
          </p>
          <div className="flex justify-center pt-7">
            <Button variant={"yellow"} className="  !text-t-16 !font-medium">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
