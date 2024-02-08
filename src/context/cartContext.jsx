import { useState, createContext, useContext } from "react"
import { useToast } from "./ToastContext.jsx"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])
    const { notify } = useToast()

    const addItemToCart = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        notify("success", "Producto agregado correctamente")
      }else{
        const updatedCart = cart.filter(prod => prod.id !== productToAdd.id)
        updatedCart.push(productToAdd) 
        setCart(updatedCart)
        notify("success", "Producto actualizado correctamente")
      }
    }

    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
    
    const removeItemFromCart = (productToRemove) => {
      let id = productToRemove.id
      const cartUpdated = cart.filter(prod => {
        return(prod.id !== id)
      })
      notify("info", "El producto se elimino correctamente")
      setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => accu += prod.quantity)

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
      let accu = 0

      cart.forEach((prod) => {return(
        accu += prod.quantity * prod.precio
        )
      })
      return accu
    }

    const total = getTotal()

    const clearCart = () => {
      setCart([])
    } 
    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, totalQuantity, total, clearCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}