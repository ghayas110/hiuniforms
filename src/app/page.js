import BannerSlider from "@/components/Banner";
import MaleFemaleSection from "@/components/MaleFemaleSection";
import NewArrivals from "@/components/NewArivals";
import OurMission from "@/components/VisionMission";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <BannerSlider/>
    <MaleFemaleSection/>
    <NewArrivals/>
    <OurMission/>
  </div>
  );
}
