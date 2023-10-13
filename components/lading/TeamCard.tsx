import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { LiaBasketballBallSolid } from "react-icons/lia";
const TeamCard = () => {
  return (
    <div className="flex flex-col items-center">
      <Avatar className=" w-20 h-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="pt-4 space-y-2">
        <h3 className="text-center text-2xl font-bold text-skin-yellow">
          Tarif Al Hasan
        </h3>
        <h3 className="text-lg text-center text-white font-medium">CEO</h3>
        <p className="text-sm text-center font-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <ul className="flex py-4 items-center justify-center gap-3">
        <li>
          <Link target="_blank" href={"/"}>
            <AiFillLinkedin className="text-3xl transition-all duration-300 hover:text-skin-yellow" />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"/"}>
            <AiFillTwitterSquare className="text-3xl transition-all duration-300 hover:text-skin-yellow" />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"/"}>
            <LiaBasketballBallSolid className="text-3xl transition-all duration-300 hover:text-skin-yellow" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
