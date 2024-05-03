import { recipeDetailCards } from "@/data";
import { Button } from "../ui/button";
import heartsvg from "../../components/images/svg/heart.svg";
import sharesvg from "../../components/images/svg/share.svg";

export default function CatOrNutLoSh() {
  return (
    <>
      <div className="justify-around items-center mx-auto mt-4 px-1 sm:mt-6 md:mt-8">
        {/* First line */}
        <div className="flex justify-between lg:flex-row items-center lg:justify-around lg:gap-12 lg:px-20 gap-5 lg:pt-0">
          <div>
            <Button className="bg-transparent text-orange-800 font-bold text-lg p-0 m-0">
              Nutri Score:{" "}
              <span className="text-gradients ml-1 font-bold text-orange-300 bg-orange-800 p-2 rounded-xl">
                8.0
              </span>
            </Button>
          </div>
          <div className="hidden sm:flex justify-center align-middle items-center gap-10">
            {recipeDetailCards.map((card: any) => (
              <div key={card.id} className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Button className="bg-slate-300 text-slate-900 font-semibold text-base px-2 m-0">
                    #{card.foodCategory}
                  </Button>
                  <Button className="bg-slate-300 text-slate-900 font-semibold text-base px-2 m-0">
                    #{card.foodOrigin}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button className="bg-transparent text-orange-800 font-bold text-lg p-0 m-0">
              <picture>
                <img className="w-8 h-8" src={heartsvg.src} alt="" />
              </picture>
            </Button>
            <Button className="bg-transparent text-orange-800 font-bold text-lg justify-center items-center p-0 m-0">
              <picture>
                <img className="w-11 h-11" src={sharesvg.src} alt="" />
              </picture>
            </Button>
          </div>
        </div>
        {/* End of first line */}
        {/* Second line */}
        <div className="sm:hidden lg:flex justify-center items-center mt-4 gap-10">
          {recipeDetailCards.map((card: any) => (
            <div key={card.id} className="sm:hidden flex items-center gap-4">
              <div className="flex gap-2">
                <Button className="bg-slate-300 text-slate-900 font-semibold text-base px-2 m-0">
                  #{card.foodCategory}
                </Button>
                <Button className="bg-slate-300 text-slate-900 font-semibold text-base px-2 m-0">
                  #{card.foodOrigin}
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* End of second line */}
      </div>
    </>
  );
}
