import React, { useEffect, useState } from 'react'
import CardLoading from '../component/CardLoading'

const LoadingApp = () => {
    const [show, setShow] = useState(false)

    

    return (
        <div>LoadingApp

            <button onClick={() => setShow(!show)}>
                show/hide
            </button>
            {show &&
                <CardLoading />
            }        </div>
    )
}

export default LoadingApp