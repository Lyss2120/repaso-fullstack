import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateHistorial = () => {
const navigate = useNavigate()

  return (
    <div className='py-5'>
      <button className='btn btn-outline-primary' onClick={() => navigate(-2)}>Go 2 pages back</button>
      <button className='btn btn-outline-primary' onClick={() => navigate(-1)}>Go back</button>
      <button className='btn btn-outline-primary' onClick={() => navigate('/')}>Home</button>
      {/* <button className='btn btn-outline-primary' onClick={() => navigate(1)}>Go forward</button>
      <button className='btn btn-outline-primary' onClick={() => navigate(2)}>Go 2 pages forward</button> */}
    </div>
  )
}

export default NavigateHistorial