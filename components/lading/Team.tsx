import cta from "@/assets/images/CTA.png";
import g1 from "@/assets/images/g1.png";
import g2 from "@/assets/images/g2.png";
import fire_team from "@/assets/images/team_bg.png";
import Image from "next/image";
import { Button } from "../ui/button";
import TeamCard from "./TeamCard";
const Team = () => {
  return (
    <section className=" -mt-[-176px] relative overflow-hidden  flex flex-col items-center justify-center  bg-no-repeat bg-cover h-full   left-0 right-0 ">
      <div className="container relative  pt-20 z-50">
        <div className="section-title space-y-3">
          <h2 className=" text-2xl font-bold lg:text-4xl xl:text-5xl text-center text-skin-yellow">
            Knox Locker Team
          </h2>
          <p className="text-base text-center lg:text-xl text-white font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 pt-16 sm:pt-28 gap-5">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        {/* ========== CTA ========== */}
      </div>
      <div className="relative lg:min-h-[768px]  w-full py-16 lg:py-40">
        <div className="max-w-[768px]  lg:pt-[100px]  relative left-0 right-0 container  z-50 space-y-5  px-4 mx-auto">
          <h2 className=" text-2xl font-bold lg:text-4xl xl:text-5xl text-center text-skin-yellow">
            Call to action that excites the visitor to try your product
          </h2>
          <p className="text-lg text-center font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.{" "}
          </p>

          <div className="flex justify-center">
            <Button variant={"yellow"} className="!text-t-16 !font-medium">
              Learn more
            </Button>
          </div>
        </div>
        <div className="absolute top-0  left-0 right-0 lg:top-[-7%] xl:top-[-54%] z-10 ">
          <Image src={cta} alt="" className="rounded-full  " />
        </div>
      </div>
      <div className=" absolute lg:block  z-10 -top-[5%] left-0">
        <Image src={g1} alt="" className=" h-[1220px]" />
      </div>
      <div className="lg:block absolute z-10 top-0 right-0">
        <Image src={g2} alt=" " className=" h-[1220px]" />
      </div>
      <div className="absolute inset-0">
        <Image src={fire_team} alt="fire" />
      </div>
    </section>
  );
};

export default Team;
