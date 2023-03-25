import React, { useEffect, useRef, useState } from 'react'
import getPost from './helpers/getPost';

const CardLoading = () => {
  const [post, setPost] = useState({ title: 'post1' });
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true)
  // si por alguna razon los datos de la api no llegan antes de ocultar el componente con el boton showhide se muestra un error sobre el unmounted component, para eso se usara useRef

  const updatePost = () => {
    getPost()
      .then((newPost) => {
        // console.log({newPost});
        setTimeout(() => {
          if (isMountedRef.current) {
            setPost(newPost)
            setLoading(false)
          }
        }, 1000);
      });
  }

  useEffect(() => {
    updatePost()
    // console.log(isMountedRef.current); da true en la consola porque muestra el valor del ref que al mostrar el componente es true
    return () => {
      isMountedRef.current = false
    } //cada vez que el componete se desmonte realiza este cambio en el ref, tambien se realiza una comprobacion de si el componente esta en true hacer el setstate con los datos de la api
  }, [])

  
  // se escribe fuera del componente por ??? funciona
  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <h1 className='text-black-50 '>{post.title}</h1>

    </div>
  )
}

export default CardLoading