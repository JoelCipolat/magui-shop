import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Productos } from "../../products";
import Layout from "../../components/Layout/Layout";
import Contador from "../../components/Contador";
import { CartCtx } from"../../context/CartContext";
import { DotWave } from "@uiball/loaders";
import { db } from "../../db/db";
import { doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
    const {idProduct} = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { addToCart } = useContext(CartCtx)
    const [quantity, setQuantity] = useState(0)

    const updateQuantity = (quantity) => {
        setQuantity(() => quantity)        
    }

    useEffect(() => {
        //creamos la referencia de nuestro producto
        const productRef = doc(db, "productos", idProduct)
        //usamos la funcion getDoc para obtener un unico producto
        getDoc(productRef).then((response) => {
            //verificamos si el producto con ese id existe
            if(response.exists()){
                //si existe le damos el formato correcto
                const product = { id: response.id, ...response.data() }
                setTimeout(() => {
                    setProduct(product)
                    setIsLoading(false)
                }, 1000)
            }else{
                console.log("el producto no existe")
            }
        })    
    }, [])

    if (isLoading) {
        return <DotWave />
    }    

    return (
        <Layout>
            {
                <div style={{ border: "3px solid", borderRadius: 12, backgroundColor: "aqua", textAlign: "center", fontSize: 20, margin: 30, width: 250 }}>
                    <h1>{product.nombre}</h1><br/>
                    <img src={product.img} alt={product.img} />
                    <p>Precio: ${product.precio}</p>
                    <Contador stock={5} uquantity={updateQuantity} />
                    <button onClick={() => addToCart(product.id, quantity + 1)}>Agregar al Carrito</button>
                    <h3>
                        ir a <Link to={"/"}>Home</Link>
                    </h3>
                </div>
            }
        </Layout>
    )
}

export default ItemDetail;