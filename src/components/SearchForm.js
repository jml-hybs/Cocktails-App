import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])
  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="drink">Search Cocktails</label>
          <input type="text" name="drink" id="drink" onChange={handleSearch} ref={searchValue} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
