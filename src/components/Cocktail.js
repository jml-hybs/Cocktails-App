import React from 'react'
import { Link, } from 'react-router-dom'

const Cocktail = ({ idDrink, strCategory, strDrink, strDrinkThumb, strGlass }) => {
  return (
    <article className='cocktail'>
      <div className="img-container">
        <img src={strDrinkThumb} alt="image" />
      </div>
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strCategory}</p>
        <Link to={`/cocktail/${idDrink}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
