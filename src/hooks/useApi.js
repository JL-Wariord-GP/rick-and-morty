import axios from "axios"
import { useEffect, useState } from "react"
const useApi = url => {
    const [character, setCharacter] = useState()

    useEffect(() => {
        
        axios.get(url)
        .then(res => setCharacter(res.data))
        .catch(error => console.log(error))
    
    }, [])
    
  return character
}

export default useApi