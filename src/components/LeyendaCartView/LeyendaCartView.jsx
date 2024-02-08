import classes from "./LeyendaCartView.module.css"

const LeyendaCartView = () => {
    return(
        <div className={classes.leyenda}>
            <p>Producto</p>
            <div>
                <p>Cantidad</p>
                <p>Precio</p>
            </div>
                
        </div>
    )
}

export default LeyendaCartView