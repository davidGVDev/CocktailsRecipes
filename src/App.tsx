import { BrowserRouter } from "react-router-dom"
import { CocktailsRecipesRoutes } from "./cocktailsRecipes/routes/CocktailsRecipesRoutes"

export const App = () => {
  return (
    <BrowserRouter>
      <CocktailsRecipesRoutes />
    </BrowserRouter>    
  )
}
