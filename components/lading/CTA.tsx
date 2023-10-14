import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="relative container overflow-hidden py-16 lg:py-28">
      <div className="max-w-[768px] relative z-50 space-y-5  px-4 mx-auto">
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
    </section>
  );
};

export default CTA;
