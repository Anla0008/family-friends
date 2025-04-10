import Header from "@/components/Header";
import FavoritsView from "@/components/FavoritsView";
import Navigation from "@/components/Navigation";

const favoritsView = () => {
  return (
    <section className="p-4">
      <h2>FavoritsList</h2>
      <FavoritsView />
      <Navigation />
    </section>
  );
};

export default favoritsView;
