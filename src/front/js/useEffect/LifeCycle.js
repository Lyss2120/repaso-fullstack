import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0)
    // const incrementc1 = () => {setCounter1(counter1 + 1)}
    // const incrementc2 = () => {setCounter2(counter2 + 1)}

    // cada useEffect se ejecuta en el orden en el que se escriba acá
    useEffect(() => {
        console.log('useEffect no dependency');
    // carga cada vez que algo cambie en el componente
    },)
    
    useEffect(() => {
      console.log('useEffect []');
    //   carga solo en la primera carga del componente
    }, [])

    useEffect(() => {
        console.log('useEffect [counter1]');
      //   carga solo en la primera carga del componente y cuando counter1 cambie
      }, [counter1])
    
      useEffect(() => {
        console.log('useEffect [counter2]');
      //   carga solo en la primera carga del componente y cuando counter1 cambie
      }, [counter2])

      useEffect(() => {
        console.log('useEffect [counter1, counter2]');
      //   carga solo en la primera carga del componente y cuando al menos uno de los counters cambie
      }, [counter1, counter2])

    return (
        <div>
            <h1 className='py-5 text-secondary'>UseEffect LifeCycle</h1>

            <h1>Clicks Counter1: {counter1}</h1>
            <button className='btn btn-dark' onClick={()=> setCounter1 +1}>
                increment counter1
            </button>

            <h1>Clicks Counter2: {counter2}</h1>
            <button className='btn btn-dark' onClick={()=> setCounter2 +1}>
                increment counter2
            </button>
        </div>
    )
}

export default LifeCycle