
import { Routes, Route } from 'react-router-dom'
import { CocktailsRecipesPage } from '../CocktailsRecipesPage'

export const CocktailsRecipesRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<CocktailsRecipesPage />} />
        </Routes>
    </>
  )
}
