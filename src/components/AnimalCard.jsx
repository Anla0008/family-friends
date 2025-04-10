import Image from "next/image";

const AnimalCard = ({ animal }) => {
    if (!animal) return null;

    const photo = animal.photos?.[0]?.small;

    return (
        <li key={animal.id} className="flex flex-col gap-1 mb-2 rounded-2xl shadow">
            {photo ? (
                <Image
                    alt={`Billede af ${animal.name}`}
                    width={100}
                    height={100}
                    src={photo}
                    className="rounded-2xl w-40 h-28 object-cover"
                />
            ) : (
                <div className="w-40 h-28 bg-pink-400 rounded-2xl" />
            )}
            <div className="flex justify-between items-center mx-2">
                <h2 className="max-w-[100px]">{animal.name}</h2>
                <p className="text-[#33333366] text-[13px]">{animal.age}</p>
            </div>
            <p className="text-[#33333366] text-xs mx-2 mb-4 max-w-[140px]">
                {animal.breeds?.primary || "Ukendt race"}
            </p>
        </li>
    );
};

export default AnimalCard;
