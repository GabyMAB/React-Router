import {useLoaderData} from 'react-router-dom'
const Post = () =>{
    const {post} = useLoaderData() //se crea la funcion y se estraen los datos en post
    return (
        <div>
            <h1>
                {post.id} - {post.title} {/*regresara un elemento donde se mostrara el id, titulo y el body */}
            </h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;

export const loaderPost = async ({params}) => { //se creara la funcion donde se hara una llamada a los datos guardados en params
    const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`); //se crea data donde gardaran los datos obtenidos de fetch, mientras que await hace la promesa 
    if(!data.ok) throw{ //si la promesa se cumple mostrara el estatus y devolvera esos valores en formato json
        status: data.status,
        statusText: "No encontrado",
    };
    const post = await data.json();
    return { post };
};