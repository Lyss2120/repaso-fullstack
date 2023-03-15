import React, { useState } from 'react'

const ConditionalCard = () => {
    const [condition, setCondition] = useState(true)

    return (
        <div className='conditional'>
            <h1 className='py-5 text-secondary'>ConditionalCard</h1>

            <button className='btn btn-outline-secondary'
                onClick={() => setCondition(!condition)}>
                Toggle
            </button>

            {/* {
                condition
                    ? <h1 className='text-danger py-2'>Show message in true</h1>
                    : <h1 className='text-primary p-2'>Another message in false</h1>
            } */}
            {/* ternario para mostrar una sola condicion */}
            {

                condition &&
                <h1 className='text-danger py-2'>Show message </h1>

            }
            {/* para mostrar un valor booleano */}
            <p className='text-danger pb-2'>state value {condition.toString()}</p>
        </div>
    )
}

export default ConditionalCard