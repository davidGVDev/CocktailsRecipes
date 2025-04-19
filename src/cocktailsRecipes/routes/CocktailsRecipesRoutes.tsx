
import { Routes, Route } from 'react-router-dom'
import { CocktailsRecipesPage } from '../cocktailsRecipesPage'

export const CocktailsRecipesRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<CocktailsRecipesPage />} />
        </Routes>
    </>
  )
}
