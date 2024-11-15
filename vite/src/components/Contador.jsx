import { useState } from "react";
import { Button } from "react-bootstrap";

const Contador = ({stock, uquantity}) => {

    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock){
        setCount(count + 1)
        uquantity(count)
    }
}

    const restar = () => {
        if (count > 1){
        setCount(count - 1)
        uquantity(count)
    }
}

    return (
        <div> 
            <Button onClick={restar}>-</Button>
            <span className="btn">{count}</span>
            <Button onClick={sumar}>+</Button>
        </div>
    )
}

export default Contador;