import { createContext, useContext } from "react"
import { toast } from 'react-toastify'

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {

    const notify = (type, text) => {
        let toastConfig = {
            position: "bottom-right",
            autoClose: 5000,
            pauseOnHover: false,
        }
        if(type == "success"){
            toast.success(text, toastConfig)
        }else if(type == "error"){
            toast.error(text, toastConfig)
        }else if(type == "info"){
            toast.info(text, toastConfig)
        }
    };

    return(
        <ToastContext.Provider value={{notify}}>
            { children }
        </ToastContext.Provider>
    )
}


export const useToast = () => {
    return useContext(ToastContext)
}