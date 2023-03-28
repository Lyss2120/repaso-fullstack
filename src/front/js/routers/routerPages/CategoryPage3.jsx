import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigateHistorial from '../routerComponents/navigateHistorial.jsx'

const CategoryPage3 = () => {
  // navigate(-2) retrocede dos veces en el historial de páginas visitadas, no a la página siguiente o anterior en el navbar 
  //navigate(1/2) según esa lógica debería adivinar que páginas veré en el futuro ¡?? sacado de la pag de react router v.6
  return (
    <div className='container py-5  text-center' >
      <h3 className='py-5' >CategoryPage3</h3>
      <div className='py-5' >
        <NavigateHistorial />
      </div>
    </div>
  )
}

export default CategoryPage3