import React from 'react'

const LocationInfo = ({ location }) => {
    return (
        <div >
            {
                //!INFO
            }
            <div className='box-location'>
                <h2>Citadel of Ricks</h2>
                <div>
                    <ul className='box-ul-li'>

                        <li><span>Name: </span>{location?.name}</li>
                        <li><span>Type: </span>{location?.type}</li>
                        <li><span>Dimension: </span>{location?.dimension}</li>
                        <li><span>Population: </span>{location?.residents.length}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LocationInfo