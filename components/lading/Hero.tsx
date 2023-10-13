import { heroImage, heroImageShadow } from "@/assets/images";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="lg:bg-hero-bg   z-10 relative  bg-no-repeat  bg-cover flex items-center bg-center w-full h-full  min-h-[85vh]">
      <div className=" space-y-5 relative pt-[120px]  z-50 h-full  lg:pt-5 lg:space-y-0  grid lg:grid-cols-2 gap-7  container items-center justify-between">
        <div className=" space-y-5">
          <h2 className="heading1 text-center lg:text-left">
            Resonate with the visitor&apos;s problem
          </h2>
          <p className="text-t-16 leading-[24px] sm:text-t-20 text-center lg:text-left  font-normal text-white sm:leading-[30px]">
            Describe exactly what your product or service does to solve this
            problem. Avoid using verbose words or phrases.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4">
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
        <div className="">
          <Image src={heroImage} alt="Hero image" />
        </div>
      </div>
      <Image
        src={heroImageShadow}
        className="absolute z-40  top-0  t"
        alt="shadow"
      />
    </section>
  );
};

export default Hero;
