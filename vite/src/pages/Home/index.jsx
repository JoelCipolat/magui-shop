import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/Item/Item";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { Productos } from "../../products";
import { useState, useEffect, useContext } from "react";
import { CartCtx } from "../../context/CartContext";
import { DotWave } from '@uiball/loaders';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/db";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [filterByCategory, setFilterByCategory] = useState(null)
    const {listProducts, setListProducts} = useContext(CartCtx)

    useEffect(() => {
        //configuramos la referencia de nuestros productos
        const productsRef = collection(db, "productos")
        //utilizamos la funcion getDocs para obtener todos los productos
        getDocs(productsRef).then((response) => {
            //formateamos la data a un array de objetos
            const productsFirebase = response.docs.map((product) => (
                { id: product.id, ...product.data() }
            ))
            setTimeout(() => {
                setListProducts(productsFirebase)
                setIsLoading(false)
            }, 1000)
        })
    }, [])

    if(isLoading){
        return <DotWave />
    }    

    return (
        <Layout>
        <ItemListContainer title="Bienvenidos a Magui-Market 😊!" />
            <button onClick={() => setFilterByCategory(null)}>Todo</button>
            <button onClick={() => setFilterByCategory("Golosinas")}>Golosinas</button>
            <button onClick={() => setFilterByCategory("Almacen")}>Almacen</button>
            <button onClick={() => setFilterByCategory("Bebidas")}>Bebidas</button>
            <button onClick={() => setFilterByCategory("Cigarrillos")}>Cigarrillos</button>
        { listProducts && !filterByCategory ? (
            listProducts.map((prod) => (
            <div key={prod.id}>
                <Item 
                    id={prod.id}
                    img={prod.img} 
                    nombre={prod.nombre}
                    precio={prod.precio}
                ></Item>
            </div>
            ))
        ) : (
            listProducts
            ?.filter((prod) => prod.categoria === filterByCategory)
            .map((prod) => (
                <div key={prod.id}>
                    <Item 
                        id={prod.id}
                        img={prod.img} 
                        nombre={prod.nombre}
                        precio={prod.precio}
                    ></Item>
                </div>
            ))
        )}
    </Layout>
)}

export default Home;