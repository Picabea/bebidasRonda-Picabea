import classes from "./CartItem.module.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCart } from "../../context/cartContext.jsx"

const CartItem = ({producto, onRemove}) => {
    const { addItemToCart } = useCart()

    return(
        <div className={classes.cartItem}>
            <div className={classes.productDiv}>
                <div className={classes.divInfo}>
                    <img src={import.meta.env.BASE_URL + producto.src} alt=""/>
                    <h3>{producto.tipoBebida} {producto.variedad} {producto.marca} {producto.contenido}</h3>
                </div>
                <div className={classes.divPrecio}>
                    <ItemCount initial={producto.quantity} stock={producto.stock} onAdd={addItemToCart} producto={producto}/>
                    <b>Total: ${producto.precio * producto.quantity}</b>
                </div>
            </div>
            <button className={classes.button}onClick={() => onRemove(producto)}>X</button>
        </div>
    )
}

export default CartItem