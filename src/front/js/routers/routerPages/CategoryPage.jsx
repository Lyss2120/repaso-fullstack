import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const location = useLocation();//console.log(location.search); proporciona la busqueda en este caso da '?lalalalala' con la url 'http://localhost:3000/category/?lalalalala' / console.log(query);
  const query = new URLSearchParams(location.search)//extrae los valores de cada busqueda en la url
  const skip = query.get('skip') || 0 //const skip = query.get('skip')// la busqueda seria skip-0&limit-10. da 0 en la consola  /  si el usuario no proporciona parametros se pondran estos por defecto como valor inicial
  const limit = query.get('limit') || 15
  const state = location.state;
  console.log({ state });
  const navigate = useNavigate();


  return (
    <div className='container py-5 text-center' >
      <h3 className='py-5' >CategoryPage</h3>
      <div className='pb-5'>
        <h5>pagination Skip: {skip}</h5>
        <h5>pagination Limit: {limit}</h5>
      </div>

      <div className='py-5'>
        <button className='btn btn-outline-primary' onClick={() => navigate(-2)}>Go 2 pages back</button>
        <button className='btn btn-outline-primary' onClick={() => navigate(-1)}>Go back</button>
        <button className='btn btn-outline-primary' onClick={() => navigate('/')}>Home</button>
        {/* <button className='btn btn-outline-primary' onClick={() => navigate(1)}>Go forward</button>
      <button className='btn btn-outline-primary' onClick={() => navigate(2)}>Go 2 pages forward</button> */}
      </div>


    </div>
  )
}

export default CategoryPage