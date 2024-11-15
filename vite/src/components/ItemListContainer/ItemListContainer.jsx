import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const ItemListContainer = (props) => {

    return (
        <h1 className='estilos'>
            {props.title}
        </h1>
    )
}

export default ItemListContainer;