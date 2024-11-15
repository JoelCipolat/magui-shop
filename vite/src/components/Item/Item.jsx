import { Link } from "react-router-dom";

const Item = ({ id, img, nombre, precio }) => {

  return (
    <div 
      style={{
        border: "3px solid",
        borderRadius: 12,
        backgroundColor: "aqua",
        textAlign: "center",
        fontSize: 20,
        margin: 60,
        width: 250
      }}
    >
      <img src={img}alt={nombre}/>
      <h1>{nombre}</h1> 
      <p>{precio}</p> 
      <Link to={`/item/${id}`}>Ver Detalle</Link>
    </div>
  )
}

export default Item;