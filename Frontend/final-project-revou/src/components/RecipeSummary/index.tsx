import { recipeDetailCards } from "@/data";

export default function RecipeSummary() {
  return (
    <div className="md:p-1 md:w-1/2 mt-4">
      {recipeDetailCards.map((card: any) => (
        <div
          key={card.id}
          className="flex flex-col justify-center items-center px-1"
        >
          <h1 className="text-sm justify-center items-center text-slate-800 px-1">
            <span className="text-lg font-bold text-slate-800">
              Recipe Summary:{" "}
            </span>
            {card.summary}
          </h1>
        </div>
      ))}
    </div>
  );
}
