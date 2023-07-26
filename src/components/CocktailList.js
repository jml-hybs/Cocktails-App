import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { drinks, loading } = useGlobalContext()


  if (loading) {
    return <Loading />
  }
  if (drinks.length < 1) {
    return <h2 className='section-title'>
      no cocktails found
    </h2>
  }


  return (
    <section className='section'>
      <h2 className='section-title'>CocktailsDB</h2>
      <div className='cocktails-center'>
        {drinks.map((drinkItem) => {
          return (
            <Cocktail key={drinkItem.idDrink} {...drinkItem} />
          )
        })

        }
      </div>
    </section>
  )
}

export default CocktailList
