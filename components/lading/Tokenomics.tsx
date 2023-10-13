import { relume } from "@/assets/images";
import Image from "next/image";

const Tokenomics = () => {
  const ContenCard = () => (
    <div>
      <div className="flex justify-center">
        <Image src={relume} alt="sds" />
      </div>
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
        <div className="flex items-center justify-between">
          <div>
            <ContenCard />
            <ContenCard />
          </div>
          <div>
            <ContenCard />
            <ContenCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
