import React, { useEffect, useState } from 'react'

const Resize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)//guarda el tamaño inicial de la pantalla /fijo

    const isMobile = windowWidth < 768;

    //useEffect escucha el evento resize cada vez que este cambie window.innerWidth se actualiza el estado windowWidth
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // al usar el boton en hide el componente se desmonta pero el listener sigue ahí, cada vez que se muestra denuevo el componente 
    // para react es un nuevo listener y los va acumulando segun se oculte o se muestra el componente, para esto se usa el cleanup en useEffect


    

    return (
        <div>
            <h1>{windowWidth}</h1>
            {isMobile &&
                <h2 className='bg-info'>show only mobile device</h2>
            }    </div>
    )
}

export default Resize