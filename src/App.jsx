import './App.css'
//Funciones importadas de react
import { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Componentes importados
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import CartView from './components/CartView/CartView.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

//Importaciones de toastify
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Context
import { CartProvider } from './context/cartContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <header>
            <NavBar/>
          </header>
          
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoria" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h1>Error 404</h1>}/>
            <Route path="/cart" element={<CartView/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order/:name/:surname/:phone" element={<Checkout/>}/>
          </Routes>
        </CartProvider>
      </ToastProvider>
      <ToastContainer/>
    </BrowserRouter>
    </>
    
  )
}

export default App

// "/" --> ItemListContainer       ------ Si tiene una categoria(filtro) --> "/category/:id"
// "/item/:id" --> ItemDetailsContainer
// "/cart" --> Cart
// "/chechout" --> Checkout