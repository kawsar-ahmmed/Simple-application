import { useEffect, useState } from "react"

const useVolantears = () => {
    const [voluntear, setVolunter] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunter(data))
    }, [])

    return [voluntear, setVolunter];
}

export default useVolantears;