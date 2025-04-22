import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { FormCocktailsComponent } from "./components/FormCocktailsComponent";
import { FormRecipesComponent } from "./components/FormRecipesComponent";
import { ListComponent } from "./components/ListComponent";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { selectOptions } from "../data";

export const CocktailsRecipesPage = () => {
  const [value, setValue] = useState("");
  const handleValueChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className="relative min-h-screen w-full">
      <DotPattern
        className={cn(
          "absolute inset-0 -z-10",
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative z-10">
        <div className="select-container flex flex-col items-center justify-center gap-3">
          <div className="select-title text-2xl font-bold">
            ¿Deseas agregar un cóctel o una receta?
          </div>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[380px] bg-white text-black font-bold cursor-pointer">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="----">----</SelectItem>
              {selectOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* <FormCocktailsComponent /> */}
        {value === "cocktail" && <FormCocktailsComponent />}
        {value === "recipe" && <FormRecipesComponent />} 
        <ListComponent />
      </div>
    </div>
  );
};
