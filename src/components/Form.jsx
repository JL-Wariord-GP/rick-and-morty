import React from 'react'
import searchsvg from '../assets/search.svg'
import LocationInfo from './LocationInfo';

const Form = ({setSearchLocation, location}) => {
    const btnSubmit = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value); 
      }   

  return (
    <div className='box-form'>
      {
          //!HEADER
      }

      <header >
          <main>
          </main>

          <h1><span className='styleh1-a'>Rick and</span><span className='styleh1-b'> Morty Wiki</span></h1>
          <div>
            <form onSubmit={btnSubmit}>
              <input id='search' type="text" placeholder='Write an id number ...' />
              <label htmlFor='search'>
                  <img  className='search-svg' src={searchsvg}/>
              </label>

              <div className='contenedor_btn'>
                <button className='btn' ><a>Search</a></button>
              </div>
            </form>
          </div>
      <LocationInfo location={location} />
      </header>
        <div className='box-app-style-img'>
          <img className='style-img' src="https://i.pinimg.com/originals/65/a1/a8/65a1a822d0247b5134f864740605cde7.gif" />
        </div>
    </div>
  )
}

export default Form