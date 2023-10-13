import { heroImage, heroImageShadow } from "@/assets/images";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="bg-hero-bg  z-10 relative  bg-no-repeat bg-cover flex items-center bg-center w-full h-full  min-h-[85vh]">
      <div className=" space-y-5 relative z-50 h-full  pt-5 lg:space-y-0 flex-col lg:flex-row  flex container items-center justify-between">
        <div className="basis-full lg:basis-1/2 space-y-4">
          <h2 className="heading1">Resonate with the visitor&apos;s problem</h2>
          <p className="text-t-20 font-bold text-white leading-[30px]">
            Describe exactly what your product or service does to solve this
            problem. Avoid using verbose words or phrases.
          </p>
          <div className="flex items-center gap-4">
            <Button
              className="!text-t-16 gap-2 text-skin-black !font-medium"
              variant={"yellow"}
            >
              <FaReact className="text-xl" /> Get started
            </Button>
            <Button
              className="!text-t-16 gap-2  bg-skin-black border border-skin-white !font-medium"
              variant={"outline"}
            >
              <FaReact className="text-xl" />
              Learn more
            </Button>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2">
          <Image src={heroImage} alt="Hero image" />
        </div>
      </div>
      <Image src={heroImageShadow} className="absolute z-40   t" alt="shadow" />
    </section>
  );
};

export default Hero;
