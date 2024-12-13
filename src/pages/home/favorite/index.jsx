import { useContext } from "react";
import RecipeList from "../../../recipe-list";
import { GlobalContext } from "../../../content";

export default function Favorite() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList.length > 0 ? (
        favoriteList.map((item) => <RecipeList key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-4xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
