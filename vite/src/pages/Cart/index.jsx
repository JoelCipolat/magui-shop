import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { CartCtx } from '../../context/CartContext';
import Layout from '../../components/Layout/Layout';
import { addDoc } from 'firebase/firestore';
import { orderCollections } from '../../db/db';

const Cart = () => {

    const[orderId, setOrderId] = useState("")

    const { cart, deleteProduct, emptyCart } = useContext(CartCtx)

    const deleteProd = (id) => {
        deleteProduct(id)
    }

    useEffect(() => {
        console.log("re render if cart changes")
    }, [cart])

    const order = {
        items: cart.map(products => ({ nombre: products.nombre, precio: products.precio, quantity: products.quantity }))
    }

    const createOrderInFirebase = () => {
        addDoc(orderCollections, order)
            .then(res => {
                setOrderId(res.id)
                emptyCart()
            })
            .catch(err => console.log(err))
    }

    if (orderId) {
        return (
            <div className='navbar'>
                <h1>Muchas gracias por tu compra</h1>
                <h2 style={{ border: "3px solid #000000", borderRadius: 12, margin: 30, padding: 5, backgroundColor: "aqua", fontSize: 20 }}>Tu número de pedido es: {orderId}</h2>
                <h3>ir a <Link to={"/"}>Home</Link></h3>
            </div>
        )
    }

    return (
    <Layout>
    {
        !cart.length
        ? <h1>No tienes productos en tu carrito</h1>
        : <div>
            {
                cart.map(products => (
                    <div key={products.id} style={{ border: "3px solid #000000", borderRadius: 12, margin: 30, backgroundColor: "aquamarine", width: 250, justifyItems: "center", textAlign: "center", fontSize: 20 }}>
                        <h3>{products.nombre}</h3>
                        <h1>cantidad: {products.quantity}</h1>
                        <button onClick={() => deleteProd(products.id)}>Eliminar Producto</button>
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