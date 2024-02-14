import {Link, useLoaderData} from 'react-router-dom' //link crea enlaces, para los datos cargados de las rutas
const Blog = () => {
    const { posts } = useLoaderData(); //se crea la funcion para obtener los datos y extraerlos en blog
    console.log(posts);

    return (
        <ul>
            {posts.length > 0 ? ( //verifica que halla contenido 
                posts.map((blog) => ( //crea una nueva lista con el contenido
                    <li key={blog.id}> {/* regresa una lista con el contenido del blog teniendo un id */}
                        <Link to={`/blog/${blog.id}`}>{blog.id}-{blog.title}</Link>
                    </li>
                ))
            ) : (
                <li>No blogs found</li>
            )}
        </ul>
    );
};
export default Blog;

export const loaderBlogs = async () => { //se crea la funcion y se realiza una llamada asincrona
    const data = await fetch("https://jsonplaceholder.typicode.com/posts"); //data guardara los datos que esta solicitando fetch, mientras que await espera la promesa
    if(!data.ok) throw{ //cuando la promesa se cumple
        status: data.status, //mostrara el estado 
        statusText: "No encontrado", //sino mandara el mensaje
    };
    const posts = await data.json(); //si se cumplio se convertira  a formato json 
    return { posts }; //y regresara esos datos
};