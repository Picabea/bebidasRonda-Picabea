import { db } from "../firebaseConfig" 
import { getDocs, getDoc, collection, doc, query, where } from "firebase/firestore"

export const getProducts = (categoria) => {
        // Dependiendo si hay categoria o no se guarda una coleccion distina
        const productsCollection = categoria 
        ?query(collection(db, 'products'), where('tipoBebida', '==', categoria)) 
        :collection(db, 'products')
        
        //Se trae la info de firebase
        return getDocs(productsCollection)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
                return(adaptProduct(doc, doc.id))
            })
            return(productsAdapted)
        })
        .catch(err => {
            return(err)
        })
}

export const getProductById = (id) => {
    const productDocument = doc(db, "products",id)
    return getDoc(productDocument)
    .then(queryDocumentSnapshot => {
        return(adaptProduct(queryDocumentSnapshot, queryDocumentSnapshot.id))
    })
    .catch(error => {
        console.error("Error fetching document:", error);
        return(err)
    })
}

const adaptProduct = (unadaptedProduct, id) => {
    const info = unadaptedProduct.data()
    let adaptedProduct = {
        id: id,
        contenido: info.contenido,
        descripcion: info.descripcion,
        graduacion: info.graduacion,
        marca: info.marca,
        precio: info.precio,
        src: info.src,
        stock: info.stock,
        tipoBebida: info.tipoBebida,
        variedad: info.variedad,
    }
    return(adaptedProduct)
}
