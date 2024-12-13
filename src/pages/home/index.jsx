import { useContext } from "react";
import { GlobalContext } from "../../content";
import RecipeList from "../../recipe-list";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading... Please Wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeList key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-4xl text-center text-black font-extrabold">
            Nothing to show, Please search something else
          </p>
        </div>
      )}
    </div>
  );
}
