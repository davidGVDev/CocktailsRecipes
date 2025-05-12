import { useEffect } from "react"
import { useCallApi } from "../hooks/useCallApi"

export const ListComponent = () => {
  const { cocktails, callApi } = useCallApi();
  useEffect(() => {
    callApi("cocktails");
  }, []);
  return (
    <>
    
    <div className="m-2 p-2 h-auto w-100%">
      <div className="cocktailsRecipes-content">
        {
          cocktails.map((cocktail) => (
            
              <h2>{cocktail.name} - {cocktail.id}</h2>
            
          ))
        }
      </div>
    </div>
    </>
  )
}
