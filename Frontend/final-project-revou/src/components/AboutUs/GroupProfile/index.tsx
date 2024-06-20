import Image from "next/image";
import masIman from "@/assets/images/profilePicture/Iman.jpg";
import masSatya from "@/assets/images/profilePicture/Satya.jpg";
import masRezi from "@/assets/images/profilePicture/Rezi.jpg";
import masHaikal from "@/assets/images/profilePicture/Haikal.jpeg";
import Header1 from "@/components/Header/Header1";
import TeamMember from "../TeamMember";

export default function GroupProfile() {
  return (
    <div className="px-3">
      <div className="mt-8">
        <Header1 h1="Meet Our Team" />
      </div>
      <div className="flex justify-around p-5">
        <TeamMember name="Iman Finuaz" role="Project Manager & BE">
          <Image
            className="rounded-2xl"
            src={masIman.src}
            alt={""}
            width={200}
            height={100}
          />
        </TeamMember>
        <TeamMember name="Rezi Rama" role="Content & Research">
          <Image
            className="rounded-2xl"
            src={masRezi.src}
            alt={""}
            width={200}
            height={100}
          />
        </TeamMember>
        <TeamMember name="Amanda Satya" role="Team Lead & FE">
          <Image
            className="rounded-2xl"
            src={masSatya.src}
            alt={""}
            width={200}
            height={100}
          />
        </TeamMember>
        <TeamMember name="Haikal Bintang" role="FE & Design">
          <Image
            className="rounded-2xl"
            src={masHaikal.src}
            alt={""}
            width={200}
            height={100}
          />
        </TeamMember>
      </div>
    </div>
  );
}
