import relume from "@/assets/icons/Relume.svg";
import Image from "next/image";

const Tokenomics = () => {
  const ContenCard = () => (
    <div className="">
      <div className="flex justify-center">
        <Image src={relume} alt="sds" />
      </div>
      <h3 className="text-center lg:max-w-[240px] w-full  text-2xl font-bold text-white">
        Short heading goes here
      </h3>
      <p className="text-center lg:max-w-[240px] w-full  text-base font-normal text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p>
    </div>
  );

  return (
    <section
      style={{ backgroundImage: "100% 100%" }}
      className=" bg-tokenomics-bg flex items-center  bg-cover  absolute  left-0 right-0  top-[222vh] 2xl:top-[226vh]   bg-center   z-30  bg-no-repeat min-h-[220vh]    w-full  h-full"
    >
      <div className="container">
        <div className="max-w-[768px] mb-[380px]  mx-auto">
          <h2 className="text-center heading1 text-skin-yellow">
            This where the stats section for Knox Locker
          </h2>
          <p className="pera pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-between">
          <div className=" space-y-8">
            <ContenCard />
            <ContenCard />
          </div>
          <div className=" space-y-8">
            <ContenCard />
            <ContenCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
