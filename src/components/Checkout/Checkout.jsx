import { collection, getDocs, where, query, documentId, writeBatch, addDoc} from "firebase/firestore"
import { useCart } from "../../context/cartContext"
import { db } from "../../services/fireBase/firebaseConfig"
import { useState } from "react"
import classes from "./Checkout.module.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { useToast } from "../../context/ToastContext"

const Checkout = () => {
    const { notify } = useToast()

    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useCart()

    const createOrder = async ({ fullName, email, phone}) => {
        const order = {
            buyer: {
                fullName, phone, email
            },
            items: cart,
            total: total,
            time: Date.now()
        }

        const outOfStock = []
        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)
        if(ids.length != 0){
            const productsCollection = query(collection(db, 'products'), where(documentId(), "in", ids))
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                let info = doc.data()
                let stock = info.stock
    
                let productAddedToCart = cart.find(prod => prod.id === doc.id)
    
                let quantity = productAddedToCart.quantity
    
                if(info.stock >= quantity){
                    batch.update(doc.ref, {stock: stock - quantity})
                }else{
                    notify("error", `El producto ${info.variedad} ${info.marca} no tiene stock`)
                    outOfStock.push({id: doc.id, ...info})
                }
                
            })
            if(outOfStock.length == 0){
                await batch.commit()
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, order)
                setOrderId(id)
                clearCart()
                notify("success", "La compra se realizo correctamente")
            } else{
                notify("error", "No se pudo confirmar su compra")
            }   
        }else{
            notify("error", "Agregue productos para finalizar la compra")
        }
        

        
    }
    
    if(orderId){
        return(
            <h2 className={classes.orderId}>El id de su compra es: {orderId}</h2>
        )
    }
    
    return(
        <div className={classes.checkOut}>
            <div className={classes.divCheckout}>
                <h1>Ingrese sus datos:</h1>
                <CheckoutForm onConfirm={createOrder}/>
            </div>
        </div>
    )
}

export default Checkout