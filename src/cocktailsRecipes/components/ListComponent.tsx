import { useEffect, useState } from "react";
import { useCallApi } from "../hooks/useCallApi";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import "animate.css";
import { cn } from "@/lib/utils";
import { Dialog } from "@/components/ui/dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { DetailsCocktelComponent } from "./DetailsCocktelComponent";
import { Cocktail } from "../interfaces/interfaces";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { EditCocktelComponent } from "./EditCocktelComponent";

export const ListComponent = () => {
  const { cocktails, callApi } = useCallApi();
  const [newCocktailId, setNewCocktailId] = useState<string | null>(null);
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editCocktail, setEditCocktail] = useState<Cocktail | null>(null);
  const [sortedCocktails, setSortedCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    callApi("cocktails");
  }, []);

  useEffect(() => {
    const sorted = [...cocktails].sort((a, b) => {
      if (a.id === newCocktailId) return -1;
      if (b.id === newCocktailId) return 1;
      return 0;
    });
    setSortedCocktails(sorted);
  }, [cocktails, newCocktailId]);

  useEffect(() => {
    const handleNewCocktail = (event: CustomEvent) => {
      const cocktailId = event.detail;
      setNewCocktailId(cocktailId);
      callApi("cocktails");
    };

    window.addEventListener("newCocktail" as any, handleNewCocktail);
    return () => {
      window.removeEventListener("newCocktail" as any, handleNewCocktail);
    };
  }, []);

  const handleEdit = (cocktail: Cocktail) => {
    setEditCocktail(cocktail);
    setIsSheetOpen(true);
  };

  const handleOpenDialog = (cocktail: Cocktail) => {
    setSelectedCocktail(cocktail);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    const card = document.getElementById(`cocktail-${id}`);
    if (card) {
      card.classList.add("animate__animated", "animate__fadeOutLeft");
      setTimeout(() => {
        axios
          .delete(`${import.meta.env.VITE_API_BASE_URL}cocktails/${id}`)
          .then((response) => {
            toast.success("Cocktail deleted successfully", {
              duration: 3000,
              position: "top-right",
              icon: "👏",
              style: {
                background: "#333",
                color: "#fff",
              },
            });
            console.log(response);
            callApi("cocktails");
          })
          .catch((error) => {
            card.classList.remove("animate__animated", "animate__fadeOutLeft");
            toast.error("Cocktail deleted failed", {
              duration: 3000,
              position: "top-right",
              description: error.response.data.message,
              icon: "🚫",
              style: {
                background: "#333",
                color: "#fff",
              },
            });
          });
      }, 500);
    }
  };

  return (
    <>
      <div className="m-2 p-2 h-auto w-100% flex flex-col items-center justify-center">
        <div className="cocktailsRecipes-content flex flex-wrap gap-4 justify-center">
          {sortedCocktails.map((cocktail) => (
            <Card
              key={cocktail.id}
              id={`cocktail-${cocktail.id}`}
              className={cn(
                "w-[240px] h-auto hover:shadow-lg transition-all duration-300",
                cocktail.id === newCocktailId
                  ? "animate__animated animate__bounceIn"
                  : "animate__animated animate__fadeIn"
              )}
            >
              <CardHeader>
                <CardTitle className="text-center font-bold text-lg">
                  {cocktail.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <img
                        className="w-[150px] h-[150px] rounded-full mx-auto"
                        src={cocktail.image}
                        alt="Cocktail Image"
                        onClick={() => handleOpenDialog(cocktail)}
                      />
                    </div>
                  </DialogTrigger>
                  {selectedCocktail && (
                    <DetailsCocktelComponent cocktail={selectedCocktail} />
                  )}
                </Dialog>
              </CardContent>
              <CardFooter className="flex flex-row items-center justify-center gap-4">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <Pencil
                      size={32}
                      strokeWidth={1.5}
                      className="text-blue-500 hover:text-blue-600 cursor-pointer bg-blue-500/10 p-2 rounded-full w-20 h-10 hover:bg-blue-500/20 transition-all duration-300"
                      onClick={() => handleEdit(cocktail)}
                    />
                  </SheetTrigger>
                  {editCocktail && (
                    <EditCocktelComponent cocktail={editCocktail} />
                  )}
                </Sheet>
                <Trash
                  size={32}
                  strokeWidth={1.5}
                  className="text-red-500 hover:text-red-600 cursor-pointer bg-red-500/10 p-2 rounded-full w-20 h-10 hover:bg-red-500/20 transition-all duration-300"
                  onClick={() => handleDelete(cocktail.id)}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Toaster />
    </>
  );
};
