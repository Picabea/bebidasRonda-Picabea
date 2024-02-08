import classes from './CartWidget.module.css'
import cart from './assets/cart.svg'
import { useCart } from '../../context/cartContext'
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { totalQuantity } = useCart()
    return(
        
        <div className={classes.div}>
            <Link className={classes.button} to="/cart"><img src={cart} alt="" className={classes.cart}/></Link>
            <b className={classes.items}>{totalQuantity}</b>
            
        </div>
        

    )
}

export default CartWidget