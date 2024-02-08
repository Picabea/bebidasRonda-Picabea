import { useState, useEffect } from "react"

export const useAsync = (asyncFunction, dependencies) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        asyncFunction()
        .then(data => {setData(data)})
        .catch(err => {
            notify("error", "Ha ocurrido un error cargando los productos")
            setError(err)
        })
        .finally(() => setLoading(false))
        }, [dependencies])
        return{
            loading, 
            data,
            error
        }
}