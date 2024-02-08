import classes from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/fireBase/firestore/products.js"
import { useAsync } from "../../hooks/useAsync.js"

const ItemListContainer = (props) => {
    //Se declaran las variables necesarias y se recoje el parametro enviado mediante la url
    const { categoria } = useParams()
    
    const asyncFunction = () => getProducts(categoria)

    const { data: productos, error, loading } = useAsync(asyncFunction, categoria)  

    if(loading){
        return(<h2>Cargando productos...</h2>)
    }
    return(
        <div className={classes.itemListContainer}>
            
            <ItemList productos = {productos}/>
        </div>
        
    )
}

export default ItemListContainer