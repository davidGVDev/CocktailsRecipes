import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Cocktail } from "../interfaces/interfaces";

export const DetailsCocktelComponent = ({cocktail}: {cocktail: Cocktail}) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">{cocktail.name}</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center gap-4 py-4">
        <img
          src={cocktail.image}
          alt={cocktail.name}
          className="w-48 h-48 rounded-full object-cover"
        />
        <div className="w-full space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Ingredientes:</h3>
            <ul className="list-disc pl-5">
              {cocktail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Instrucciones:</h3>
            <ol className="list-decimal pl-5">
              {cocktail.instructions.map((instruction, index) => (
                <li key={index}>{instruction.name}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
