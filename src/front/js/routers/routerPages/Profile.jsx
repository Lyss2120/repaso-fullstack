import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import NavigateHistorial from '../routerComponents/navigateHistorial.jsx'

const Profile = () => {
    const params = useParams()
    console.log({ params })
    //params captura el username o parametro que le demos a la url

    return (
        <div className='container py-5  text-center' >
            <h3 className='py-5' >{params.username} Profile</h3>
            <div className='py-5' >
                <NavigateHistorial />
            </div>

        </div>
    )
}

export default Profile