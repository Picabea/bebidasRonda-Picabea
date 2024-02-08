import classes from './NavBar.module.css'
import logo from './assets/ron-daLogo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
    <nav className={classes.nav}>
        <section>
            {/* Logo configurado para llevar al home */}
            <Link className={classes.linkNoDecoration} to="/">
                <h1 className={classes.nombrePagina}>Bebidas Ron-da</h1>
                <img src={logo} alt="" className={classes.logo}/>
            </Link>
            {/* Botones para navegar por la pagina */}
            <div>
                <Link className={classes.button} to="">Todo</Link>
                <Link className={classes.button} to="/category/Vodka">Vodka</Link>
                <Link className={classes.button} to="/category/Cerveza">Cervezas</Link>
                <Link className={classes.button} to="/category/Ron">Ron</Link>
                <Link className={classes.button} to="/category/Aperitivo">Aperitivos</Link>
            </div>
        </section>
        <CartWidget/>
        
    </nav>
    )
}

export default NavBar