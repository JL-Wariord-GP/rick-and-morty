import { useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents';
import Form from './components/Form';
import useFetch from './hooks/useFetch'

function App() {
  const [searchLocation, setSearchLocation] = useState()
  const location = useFetch(searchLocation)

  return (
    <div>
          <div class='loader' id="loader">
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif'/>
          </div>
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
