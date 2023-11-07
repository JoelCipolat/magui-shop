import { Link } from "react-router-dom"

const Item = ({ id, img, nombre, precio }) => {

  return (
  <div 
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexWrap:"wrap",
      gap: 200
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