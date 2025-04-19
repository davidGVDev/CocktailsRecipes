
import { Routes, Route } from 'react-router-dom'
import { CocktailsRecipesRoutes } from '../cocktailsRecipes/routes/CocktailsRecipesRoutes'
export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<CocktailsRecipesRoutes />} />
        </Routes>
    </>
  )
}
