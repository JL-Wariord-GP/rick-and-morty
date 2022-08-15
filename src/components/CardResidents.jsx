import React from 'react'
import useApi from "../hooks/useApi";

const CardResidents = ({url}) => {
    const resident = useApi(url)

  return (
    <div >
        <section>
            <div className='box-style-card' >
                <div className='style-img-card'>
                    <img  className='card-img' src={resident?.image} alt={resident?.name}/>
                </div>
                <ul className='box-ul-li'>
                    <h3>{resident?.name}</h3>
                    <li><span>Race: </span>{resident?.species}</li>
                    <li><span>Source: </span>{resident?.origin.name}</li>
                    <li><span>Appearance in episode: </span>{resident?.episode.length}</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default CardResidents