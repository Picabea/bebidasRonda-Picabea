import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync.js"
import { getProductById } from "../../services/fireBase/firestore/products.js"

const ItemDetailContainer = () => {

    const { id } = useParams()
    const asyncFunction = () => getProductById(id)
    const {data: producto, error, loading} = useAsync(asyncFunction, id)

    if(loading){
        return(<h2>Cargando producto</h2>)
    }

    return(
        <div className={classes.itemDetailContainer}>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer