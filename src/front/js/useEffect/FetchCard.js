import React, { useEffect, useState } from 'react';
import getUser from './helpers/getUser';


const initialUser = {
    name: 'Lys',
    email: 'someemail@email.com'
}

const FetchCard = () => {
    const [user, setUser] = useState(initialUser)

    const updateUser= ()=>{
        getUser()
            .then(newUser => setUser(newUser))
    }

    useEffect(() => {
    // para que se ejecute al cargar el componente y cargue un nuevo user
      updateUser()
    }, [])
    

  return (
    <div>
        <h1>Name:{user.name}</h1>
        <h1>Email:{user.email}</h1>
    </div>
  )
}

export default FetchCard