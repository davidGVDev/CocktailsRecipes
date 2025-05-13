import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Cocktail } from "../interfaces/interfaces";
import { FormCocktailsComponent } from "./FormCocktailsComponent";

export const EditCocktelComponent = ({cocktail}: {cocktail: Cocktail}) => {
  return (
    <SheetContent>
        <SheetHeader>
            <SheetTitle>Editar cóctel</SheetTitle>
        </SheetHeader>
        <FormCocktailsComponent cocktail={cocktail} isSheet />
    </SheetContent>
  )
}
