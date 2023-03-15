import React, { useState } from 'react'

const ErrorApp = () => {
    const [error, setError] = useState("");

    return (
        <div className='error'>
            <h1 className='py-5 text-secondary'>ErrorApp</h1>
            
            <button className='btn btn-outline-secondary mb-5'
                onClick={() => setError("some error fetching the api")}>
                Error
            </button>
            <button className='btn btn-outline-secondary mb-5'
                onClick={() => setError("wrong credentials")}>
                Another error
            </button>
            <button className='btn btn-outline-secondary mb-5'
                onClick={() => setError("")}>
                Success
            </button>
            {
                error &&
                <h1 className='pb-5'>{error}</h1>
            }
        </div>
    )
}

export default ErrorApp