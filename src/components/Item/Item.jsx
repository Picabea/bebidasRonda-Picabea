import classes from "./item.module.css"
import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return(
            <Link to={`/item/${producto.id}`} className={classes.link}>
                <img src={import.meta.env.BASE_URL + producto.src} className={classes.img}/>
                <h3 className={classes.p}>{producto.tipoBebida} {producto.variedad} {producto.marca} {producto.contenido}</h3>
                <b className={classes.b}>${producto.precio}</b>
            </Link>
    )
}

export default Item