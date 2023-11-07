import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { CartCtx } from '../../context/CartContext'
import Layout from '../../components/Layout/Layout'
import { addDoc } from 'firebase/firestore'
import { orderCollections } from '../../db/db'

const Cart = () => {

    const { cart, deleteProduct } = useContext(CartCtx)

    const deleteProd = (id) => {
        deleteProduct(id)
    }

    useEffect(()=>{
        console.log("re render if cart changes")
    },[cart])

    const order = {
        items: cart.map(products => ({ nombre: products.nombre, precio: products.precio, quantity: products.quantity }))
    }
    
    const createOrderInFirebase = ()=> {
        addDoc(orderCollections, order).then(res => console.log(res)).catch(err=> console.log(err))
    }

    return (
    <Layout>
    {
        !cart.length
        ? <h1>No tienes productos en tu carrito</h1>
        : <div>
            {
                cart.map(products => (
                    <div key={products.id}>
                        <h3>{products.nombre}</h3>
                        <h1>cantidad: {products.quantity}</h1>
                        <button onClick={() => deleteProd(products.id) }> Eliminar Producto</button>
                    </div>
                ))
            }
        </div>
    }
    <button onClick={createOrderInFirebase}>Finalizar compra</button>
    <h3>ir a <Link to={"/"}>Home</Link></h3>
    </Layout>
    )
}

export default Cart;