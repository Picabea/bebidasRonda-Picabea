import { useState } from "react"
import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCart } from "../../context/cartContext.jsx"

const ItemDetail = ({producto}) => {
    if(!producto){
        return(
            <h1>El producto no existe</h1>
        )
    }
    
    const { addItemToCart } = useCart()
    
    return(
        <div className={classes.itemDetail}>
            
            <img src={import.meta.env.BASE_URL + producto.src} alt="" />
            <div className={classes.divRightColumn}>
                <div className={classes.descripcionDiv}>
                    <h2>{producto.tipoBebida} {producto.variedad} {producto.marca} {producto.contenido}</h2>
                    <b className={classes.precio}>${producto.precio}</b>
                    <div>
                        <p>{producto.descripcion}</p>
                        <p>Contiene una graduacion alcoholica de {producto.graduacion}</p>
                    </div>
                </div>
                    <ItemCount initial={1} stock={producto.stock} onAdd={addItemToCart} producto={producto}/>
            </div>
        </div>
    )
}

export default ItemDetail