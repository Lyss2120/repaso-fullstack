import React from 'react'
import { Outlet } from 'react-router-dom'
import SubMenu from '../routercomponents/SubMenu.jsx'
import NavigateHistorial from '../routerComponents/navigateHistorial.jsx'

const AboutPage = () => {
  return (
    <div className='container py-5 text-center' >
      <h3 className='py-5' >AboutPage</h3>
      <SubMenu />
      <Outlet />
      {/* <NavigateHistorial /> */}
    </div>
// An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up
// when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.


  )
}

export default AboutPage