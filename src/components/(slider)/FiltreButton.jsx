import Image from 'next/image';

const FiltreButton = ({ img, category }) => {
    console.log("img i FiltreButton:", img); // Tjekker om billedet virker

    return (
        <button className="flex items-center gap-2.5 border-1 border-[#33333366] py-2.5 ps-2.5 pe-15 rounded-full">
            <Image src={img} alt="filter category image" width={64} height={64} className="rounded-full w-8 h-8" />
            <p>{category}</p>
        </button>
    );
};

export default FiltreButton;
