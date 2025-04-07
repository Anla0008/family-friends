import FiltreButton from "./FiltreButton";

import allImage from "@/images/all.png";
import catsImage from "@/images/cats.png";
import dogsImage from "@/images/dogs.png";

const SliderContainer = () => {
    return (
        <section className="overflow-x-auto whitespace-nowrap">
            <div className="inline-flex gap-3">
                <FiltreButton img={allImage} category="Alle"></FiltreButton>
                <FiltreButton img={catsImage} category="Katte"></FiltreButton>
                <FiltreButton img={dogsImage} category="Hunde"></FiltreButton>
            </div>
        </section>
    );
};

export default SliderContainer;