import Arrow from "@/components/Arrow";
import InfoDetails from "@/components/InfoDetails";

export default function singleView() {
  return (
    <div className="p-4">
      <h1>SingleView</h1>
      <Arrow />
      {/* Placeholder for image  */}
      <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">IMG</div>
      <h1 className="text-2xl font-bold mt-5">Samojed Willie</h1>
      <InfoDetails />
      <p className="text-zinc-800">Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde og er venlig over for andre dyr. På trods af sin hvide pels elsker den regn og vandpytter. </p>
      <p className="text-zinc-800 text-sm mt-1.5">Opdateret den 13. juli.</p>
      {/* Centrer knappen */}
      <div className="flex justify-center mt-4">
        <button className="bg-red-300 text-white rounded-full px-20 py-3">Adopter Samojed Willie</button>
      </div>{" "}
    </div>
  );
}
