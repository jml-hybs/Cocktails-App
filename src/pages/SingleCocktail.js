import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchDrink = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${id}`)
      const { drinks } = await response.json()
      if (drinks) {
        const { idDrink, strDrinkThumb, strDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strGlass, strAlcoholic, strCategory, strInstructions }
          =
          drinks[0]


        setDrink({ idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic, strCategory, strInstructions, ingredients: [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6] });
      }


      else {
        setDrink(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchDrink()
  }, [])


  if (loading) {
    return <Loading />
  }

  if (!drink) {
    return <section className='section'>
      <h4 className='section-title'>No Cocktail with that id </h4>
    </section>
  }
  const { strDrink, strDrinkThumb, ingredients, strGlass, strAlcoholic, strCategory, strInstructions } = drink
  console.log(ingredients);
  return (
    <section className='section cocktail-section'>
      <h2 className='section-title'> {strDrink}</h2>
      <div className='drink'>
        <img src={strDrinkThumb} alt="picture" />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>
              name :
            </span>
            {strDrink}
          </p>
          <p>
            <span className='drink-data'>
              category :
            </span>
            {strCategory}
          </p>
          <p>
            <span className='drink-data'>
              info :
            </span>
            {strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>
              glass :
            </span>
            {strGlass}
          </p>
          <p>
            <span className='drink-data'>
              instruction :
            </span>
            {strInstructions}
          </p>
          <p>
            <span className='drink-data'>
              ingredients :
            </span>
            {ingredients.filter(Boolean).join(',')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
