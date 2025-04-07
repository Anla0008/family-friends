import Header from "@/components/Header";
import SliderContainer from "@/components/(slider)/SliderContainer";
import Navigation from "@/components/Navigation";
import AnimalCard from "@/components/AnimalCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <SliderContainer />
      <AnimalCard />
      <Navigation />
    </div>
  );
}
