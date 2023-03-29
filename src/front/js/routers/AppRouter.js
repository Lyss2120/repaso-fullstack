import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import ContactPage from './routerPages/ContactPage';
import HomePage from './routerPages/HomePage.jsx';
import Profile from './routerPages/Profile.jsx';
import NotFound from './routerPages/NotFound.jsx';
import CategoryPage from './routerPages/CategoryPage.jsx';
import CategoryPage2 from './routerPages/CategoryPage2.jsx';
import CategoryPage3 from './routerPages/CategoryPage3.jsx';
import NavbarComponent from './routercomponents/NavBarComponent.jsx';
import Mision from './routerPages/AboutMenuPages/Mision.jsx';
import Vision from './routerPages/AboutMenuPages/Vision.jsx';
import AboutPage from './routerPages/AboutPage';
import About from './routerPages/AboutMenuPages/About.jsx';



const AppRouter = () => {

    return (
        <Router>
            <NavbarComponent />
            <Routes>
                <Route path="/profile/:username/gallery" element={<Profile />} />
                {/* otro ejemplo<Route path="/productos/:categoria/:talla" element={<Profile />} /> */}
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/category2" element={<CategoryPage2 />} />
                <Route path="/category3" element={<CategoryPage3 />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/about' element={<AboutPage />}>
                    <Route index path="about" element={<About />} />
                    <Route path="mision" element={<Mision />} />
                    <Route path="vision" element={<Vision />} />
                </Route>
                {/* <Route path='/about' element={<AboutPage />} >
                    <Route index path="mision" element={<Mision />} />
                    <Route path="vision" element={<Vision />} />
                </Route> */}
                <Route path="/" element={<HomePage />} />
                <Route path='*' element={<NotFound />} />
                {/* Routes(reemplazo de switch router v.6) Routes busca la primera q coincida*/}
                {/* las rutas hijas se ubican dentro de la ruta padre a la que se le agrega un cierre y se escriben asi: 'rutahija' en vez de  '/rutahija'  y la primera tendra un index path*/}
            </Routes>
        </Router>
    )
}


export default AppRouter

{/*     

// rutas aceptadas router v.6
// /groups
// /groups/admin
// /users/:id
// /users/:id/messages
// /files/*
// /files/:id/*

1°
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/service/:service/detail" element={<ServiceDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path='/about' element={<About />}>
                    <Route index path="mision" element={<Mision />} />
                    <Route path="vision" element={<Vision />} />
                    <Route path="objetives" element={<Objetives />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter> 
2°

import React from 'react'
import { Outlet } from 'react-router-dom'
import SubMenu from '../components/SubMenu'

const About = () => {
  return (
    <>
    <div>About</div>
    <SubMenu />
    <Outlet />

    </>
  )
}

export default About

3°


*/}