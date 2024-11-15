import { useContext } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './styles.css'
import { Link } from 'react-router-dom';
import { CartCtx } from '../../context/CartContext';

const Navbar = () => {

    const {cart} = useContext(CartCtx)

    return (
        <div className='navbar'>
            <h1>Magui</h1>
            <h2>Kiosco</h2>
            <h2>Almacen</h2>
            <h2>Librería</h2>
            <h2>Ripsa&(E')</h2>
            <Link to={'/cart'}>
                <CartWidget/>
            </Link>
        </div>
    )
}

export default Navbar;