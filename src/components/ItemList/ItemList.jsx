import Item from "../Item/Item.jsx"
import classes from "./ItemList.module.css"

const ItemList = ({productos}) => {
    return(
        <div className={classes.itemList}>
            {productos.map(producto => 
            <Item key={producto.id} producto = {producto}/>
            )}
        </div>
    )
}

export default ItemList