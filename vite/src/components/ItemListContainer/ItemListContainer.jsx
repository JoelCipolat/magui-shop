import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const ItemListContainer = (props) => {

    return (
        <h1 
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"blue"}}
        >
            {props.title}
        </h1>
    );
};

export default ItemListContainer;