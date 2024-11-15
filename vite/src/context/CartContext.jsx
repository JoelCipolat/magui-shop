import { createContext, useState } from "react";

export const CartCtx = createContext();

const CartContext = ({children}) => {
    const [listProducts, setListProducts] = useState([])
    const [cart, setCart] = useState([])

    const emptyCart = () => {
        setCart([])
    }

    const deleteProduct = (idProduct) => {    
    const updatedCart = cart.filter((product) => product.id !== idProduct )
        setCart(updatedCart)
    }

    const addToCart = (idProduct, quantity) => {
        const findProduct = listProducts.find(product => product.id === idProduct)
        //verificar si ya hay este producto en el carrito
        if(cart.find(products => products.id === idProduct)){
            const updatedCart = cart.map(product => {
                if(product.id === idProduct && product.quantity <= product.stock){
                    let quantityP = product.quantity + quantity
                    let stockP = product.stock - quantity
                    return {...product, quantity: quantityP, stock: stockP}
                }else{
                    return product
                }
            })
            //actualizar el carrito con el producto actualizado
            setCart(updatedCart)
            console.log(quantity)
            console.dir(cart)
        } else {
            //verificar si hay stock
            if(findProduct.stock >= quantity){
            setCart([...cart, {...findProduct, quantity: quantity, stock: findProduct.stock - quantity}])
            console.log(quantity)
            console.dir(cart)
            }
        }
    }

    return(
        <CartCtx.Provider value={{listProducts, setListProducts, cart, setCart, addToCart, deleteProduct, emptyCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext;