import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoaded(true)
            })
    }, [url])

    return [data, isLoaded]
}

export default useFetch