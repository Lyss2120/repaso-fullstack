import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1);
        // setCounter(counter + 1) este valor no se actualizaria porque el scope solo toma una actualiacion de estado, para actualizar una segunda vez tiene setearse dentro de una funcion
        setCounter(prevCounter => prevCounter + 1); //de esta forma busca la ultima actualizacion que seria la anterior y suma 1.. 2
    }

    // const incrementCounter= (n) => {
    //     setCounter(counter + n);
    //     // setCounter(counter + n) este valor no se actualizaria porque el scope solo toma una actualiacion de estado, para actualizar una segunda vez tiene setearse dentro de una funcion
    //     setCounter(prevCounter => prevCounter + n); //de esta forma busca la ultima actualizacion que seria la anterior y suma 1.. 2
    // }

    return (
        <div>
            <h1 className='py-5 text-secondary'>
                CounterApp
            </h1>
            <button className='btn btn-outline-secondary' onClick={incrementCounter}>
            {/* <button className='btn btn-outline-secondary' onClick={() => incrementCounter(6)}> */}
                Increment
            </button>
            <h1 className='py-3'>
                Clicks: {counter}
            </h1>
        </div>
    )
}

export default CounterApp