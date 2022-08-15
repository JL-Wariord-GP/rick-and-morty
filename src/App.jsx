import { useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents';
import Form from './components/Form';
import useFetch from './hooks/useFetch'

function App() {
  const [searchLocation, setSearchLocation] = useState()
  const location = useFetch(searchLocation)

  return (
    <div >
        {
            //!FORM COMPONENT & LOCATIONINFO
        }
            <Form 
            setSearchLocation={setSearchLocation}
            location={location}
            /> 
      <div className='box-card'>      
        {
          location?.residents.map(url => (
            <CardResidents
            key={url}
            url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
