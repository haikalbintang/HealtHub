import { chefMainCard } from "@/data";

import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
import tiktoksvg from "../../components/images/svg/tiktok-logo-logo-svgrepo-com.svg";
import { Button } from "../ui/button";

export default function Author() {
  return (
    <div className="border-4 border-slate-700 p-4  mt-5 px-1 rounded-xl">
      <div className="flex justify-start items-center">
        <div className="justify-center items-center ">
          {chefMainCard.map((card: any) => (
            <div
              key={card.id}
              className="flex justify-start items-center gap-2"
            >
              <picture>
                <img
                  src={card.chefImage}
                  alt=""
                  className=" h-20 w-20 rounded-full object-cover"
                />
              </picture>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold text-amber-900">
                  {card.name}
                </h1>
                {chefMainCard[0].socialMedia.map((social: any) => (
                  <div className="flex justify-start items-center gap-2">
                    <Button>+ Follow</Button>
                    <a href={social.facebook}>
                      <picture>
                        <img
                          src={facebooksvg.src}
                          alt=""
                          className="w-6 h-6 rounded-lg"
                        />
                      </picture>
                    </a>
                    <a href={social.tiktok}>
                      <picture>
                        <img
                          src={tiktoksvg.src}
                          alt=""
                          className="w-6 h-6 rounded-lg"
                        />
                      </picture>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
