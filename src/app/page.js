import SliderContainer from "@/components/(slider)/SliderContainer";
import Navigation from "@/components/Navigation";
import AnimalCard from "@/components/AnimalCard";
import Image from "next/image";
import ServerList from "@/components/ServerList";

export default async function Home() {
  return (
    <div className="p-4">
      <SliderContainer />
      <AnimalCard />
      <Navigation />
      <ServerList />
    </div>
  );
}
