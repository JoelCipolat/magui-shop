import {BsFillCartCheckFill} from 'react-icons/bs';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';

const CartWidget = () => {
    const {cart} = useContext(CartCtx)
    return (
        <Badge badgeContent={cart.length}>
            <BsFillCartCheckFill size={40} />
            <span>Shop</span>
        </Badge>
    )
}

export default CartWidget;