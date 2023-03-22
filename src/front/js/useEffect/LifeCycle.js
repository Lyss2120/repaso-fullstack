import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0)

  // cada useEffect se ejecuta en el orden en el que se escriba acá
  // y tambbién se ejecutará el cleanup en el orden en el que este escrito y/o segun se utilice, cuando un useEffect se ejecuta por segunda vez primero se hace el cleanup y después el useEffect
  useEffect(() => {
    console.log('useEffect no dependency');
    // carga cada vez que algo cambie en el componente
    return () => {
      console.log(' cleanup no dependency');
    }
  },)

  useEffect(() => {
    console.log('useEffect []');
    //   carga solo en la primera carga del componente
    return () => {
      console.log(' cleanup useEffect []');
    }
  }, [])

  useEffect(() => {
    console.log('useEffect [counter1]');
    //   carga solo en la primera carga del componente y cuando counter1 cambie
    return () => {
      console.log(' cleanup useEffect [counter1]');
    }
  }, [counter1])

  useEffect(() => {
    console.log('useEffect [counter2]');
    //   carga solo en la primera carga del componente y cuando counter1 cambie
    return () => {
      console.log(' cleanup useEffect [counter2]');
    }
  }, [counter2])

  useEffect(() => {
    console.log('useEffect [counter1, counter2]');
    //   carga solo en la primera carga del componente y cuando al menos uno de los counters cambie
    return () => {
      console.log(' cleanup useEffect [counter1, counter2]');
    }
  }, [counter1, counter2])

  return (
    <div>
      <h1 className='py-5 text-secondary'>UseEffect LifeCycle</h1>

      <h1>Clicks Counter1: {counter1}</h1>
      <button className='btn btn-dark' onClick={() => setCounter1(counter1 + 1)}>
        increment counter1
      </button>

      <h1>Clicks Counter2: {counter2}</h1>
      <button className='btn btn-dark' onClick={() => setCounter2(counter2 + 1)}>
        increment counter2
      </button>
    </div>
  )
}

export default LifeCycle