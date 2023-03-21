import React, { useEffect, useState } from 'react';
import getPosts from './helpers/getPosts';
import getUser from './helpers/getUser';


// const initialUser = {
//     name: 'Lys',
//     email: 'someemail@email.com'
// }
// const initialPost = [
//     {
//         id: 1,
//         title: 'example post 1'
//     },
//     {
//         id: 2,
//         title: 'example post 2'
//     }
// ]


const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then(newUser => {
                setUser(newUser)
            })
    }
    useEffect(() => {
        updateUser()
    }, [])
    // updateUser llama al fetch con id random, lo añade al useEffect para que refresque el user en la primera carga

    //se envía el user.id a getposts dentro de la función, sin embargo la funcion updatePost no necesita recibirlo como un parametro
    //porque accede directamente al estado de su componente, si estuviera en otra ubicación si se necesitaría enviar el prop y recibir ese parametro 

    const updatePost = () => {
        getPosts(user?.id)
            .then(newPost => {
                console.log({ newPost });
                setPosts(newPost)
            })
    }
    useEffect(() => {
        if (user?.id){
            updatePost()}
    }, [user])
    //updatePost carga todos los post de un user, recibe el userId del current user en el estado, al cual accede directamente desde este componente, 
    // en la primera carga de getPosts el userId sale como undefined porque se basa en el estado que inicialmente es un objeto vacío // eso significa que el primer fetch se hace con un id invalido y estaria demas por lo que se incluye un if mas ? antes del id para asegurar que existe antes de hacer la petición http https://youtu.be/6lvI-gTF_X8?t=1722
    //en un componente reutilizable podria cambiar la funcion si le le envian diferentes parametros o valores, en ese caso se incluiría la funcion en las dependencias para que se actualice cada vez que cambie la función ? genera rederizacion eterna... usar useCallback con la dependencia que necesita escuchar para que memorice el valor y no renderice nuevamente de forma innecesaria


    return (
        <div>
            <h1 className='py-3 text-secondary'>FetchCard</h1>
            {/* updateUser se añade al useEffect para que refresque el user en la primera carga y lo utiliza en  un boton para refrescar el user en cualquier momento */}
            <button className='my-3 btn btn-outline-secondary' onClick={updateUser}>Another user</button>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <br />
            {/* <button onClick={updatePost}>Post</button> */}
            <h2>Posts from {user.name} userId: {user.id}</h2>
            <ul className='list-group py-4'>
                {posts?.map(post => (
                    <li key={post.id}
                        className='list-group-item'>{post.title} post from userId: {post.userId}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchCard