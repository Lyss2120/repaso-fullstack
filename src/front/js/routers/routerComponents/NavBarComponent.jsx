import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {

  return (
    <div className='container-fluid d-flex '>
        <h1 className='p-2 w-100'>Navbar</h1>
        <ul className=' p-2 d-flex flex-shrink-1 text-decoration-none'>
            <li className='list-group-item'><NavLink to={'/'}>Home</NavLink></li>
            <li className='list-group-item'><NavLink to={'/about'}>About</NavLink></li>
            <li className='list-group-item'><NavLink to={'/contact'}>Contact</NavLink></li>
            <li className='list-group-item'><NavLink to={'/profile'}>Profile</NavLink></li>
            <li className='list-group-item'><NavLink to={'/category'}>Category</NavLink></li>
            <li className='list-group-item'><NavLink to={'/category2'}>CategoryPage2</NavLink></li>
            <li className='list-group-item'><NavLink to={'/category3'}>CategoryPage3</NavLink></li>
       </ul>
{/* NavLink proporciona la clase active automaticamente al clickear una ruta, tambien se puede pasar la clase active con una funcion */}
    </div>
  )
}

export default NavbarComponent