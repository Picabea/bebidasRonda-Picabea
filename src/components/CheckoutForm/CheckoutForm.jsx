import { useState } from "react"
import { useToast } from "../../context/ToastContext.jsx"
import classes from "./CheckoutForm.module.css"

const CheckoutForm = ({ onConfirm }) => {
    const [ fullName, setFullName] = useState("")
    const [ phone, setPhone] = useState("")
    const [ email, setEmail] = useState("")
    const [ fullNameConfirmation, setFullNameConfirmation] = useState("")
    const [ phoneConfirmation, setPhoneConfirmation] = useState("")
    const [ emailConfirmation, setEmailConfirmation] = useState("")

    const [submitDisable, setSubmitDisable] = useState(false)

    const { notify } = useToast()

    // Se crea userData para crear la orden y se crea la misma
    const handleConfirm = (evt) => {
        evt.preventDefault()
        setSubmitDisable(true)
        notify("info", "Generando orden")
        if(fullName && fullNameConfirmation && phone && phoneConfirmation && email && emailConfirmation){
            if(fullName !== fullNameConfirmation || phone !== phoneConfirmation || email !== emailConfirmation){
                notify("error", "Los datos ingresados no coinciden")
                setSubmitDisable(false)
            }else{
                const userData = {
                    fullName, phone, email
                }
                onConfirm(userData)
            }
        }else{
            notify("error", "Todos los campos deben estar llenos")
            setSubmitDisable(false)
        }
        
    }

    return(
        <div className={classes.formsContainer}>
            <form  className={classes.form}>
                <input type="text" placeholder="Nombre y apellido" value={fullName} onChange={({ target }) => setFullName(target.value)}/>
                <input type="text" placeholder="Telefono" value={phone} onChange={({ target }) => setPhone(target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)}/>
            </form>
            <form onSubmit={handleConfirm} className={classes.form}>
                <input type="text" placeholder="Confirmar nombre y apellido" value={fullNameConfirmation} onChange={({ target }) => setFullNameConfirmation(target.value)}/>
                <input type="text" placeholder="Confirmar telefono" value={phoneConfirmation} onChange={({ target }) => setPhoneConfirmation(target.value)}/>
                <input type="text" placeholder="Confirmar email" value={emailConfirmation} onChange={({ target }) => setEmailConfirmation(target.value)}/>
                <input type="submit" value="Generar Orden" className={classes.submitButton} disabled={submitDisable}/>
            </form>
        </div>
    )
}

export default CheckoutForm