import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { FormComponent } from "./components/FormComponent";
import { ListComponent } from "./components/ListComponent";

export const CocktailsRecipesPage = () => {
  return (
    <>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
        )}
      />
      <FormComponent />
      <ListComponent />
    </>
  );
};
