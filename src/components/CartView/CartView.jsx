import { useCart } from "../../context/cartContext.jsx"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem.jsx"
import classes from "./CartView.module.css"
import LeyendaCartView from '../LeyendaCartView/LeyendaCartView.jsx'


const CartView = () => {

    const { cart } = useCart()
    const { total } = useCart()
    const { removeItemFromCart } = useCart()

    return(
        <>
        <div className={classes.cartView}>
            <section className={classes.products}>
                <LeyendaCartView/>
                <div>
                    {cart.map((prod) => {
                        return(
                        <CartItem key={prod.id} producto={prod} onRemove={removeItemFromCart}/>
                        )
                    })}
                </div>
            </section>
            <section className={classes.resumen}>
                <h2 className={classes.h2_resumen}>Resumen</h2>
                <div className={classes.subtotal_total}>
                    <p>Productos: </p>
                    <p>${total}</p>
                </div>
                
                <div className={classes.subtotal_total}>
                    <p>Envio:</p>
                    <p>$1500</p>
                </div>
                <div className={classes.subtotal_total}>
                    <b>Total:</b>
                    <b>${total + 1500}</b>
                </div>
                <Link to="/checkout" className={classes.button}>
                    Checkout
                </Link>
            </section>
            
        </div>
        
        </>
    )
}

export default CartView