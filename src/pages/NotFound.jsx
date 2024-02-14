import { useRouteError,Link } from "react-router-dom";

const NotFound = () =>{
    const error = useRouteError(); //se crea la funcion y se extrae el estado del error 
    console.log(error); //imprime el error 
    return ( //regresara el error
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
            <Link to="/">Volver al Home</Link>
        </div>
    );
};

export default NotFound;