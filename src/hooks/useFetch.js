import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (searchLocation, setIsLoading) => {
    const [useApi, setUseApi] = useState()
    useEffect(() => {
        let locationNumber
        if (searchLocation) {
            locationNumber = searchLocation
        } else {
            locationNumber = Math.ceil(Math.random() * 126 )
        }
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
        
        axios.get(URL)
        .then(res => setUseApi(res.data))
        .catch(error => console.log(error))
        
    }, [searchLocation])
    
    return useApi;


}

export default useFetch
