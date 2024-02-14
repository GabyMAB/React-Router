import { Outlet,useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic= ()=>{
    const navigation = useNavigation () //crea una nueva variable para obtener el estado de navigation
    return (
        <>
        <Navbar/>
        <main className="container">
        {navigation.state === "loading" && ( //se crea el estaado de la navegacion y si esta cargando nuestra una alerta
                    <div className="alert alert-info my-5">Loading...</div>
                )}     
            <Outlet/>
        </main>
        <footer className="container text-center">Footer</footer>
        </>
    );
};
export default LayoutPublic;