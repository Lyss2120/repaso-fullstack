import React, { useEffect, useRef, useState } from 'react'

const ScrollAnimation = () => {
    const [backgroundColor, setBackgroundColor] = useState('cornFlowerBlue')
    const divRef = useRef();
// metodo del dom para ver la posicion y mas detalles de un objeto .getBoundingClientRect()

    useEffect(() => {

        const handleScroll = () => {
            const div = divRef.current
            // console.log(div.getBoundingClientRect());
            // se destructuar y saca 'y' desde las demas propiedades
            const { y } = div.getBoundingClientRect()
            console.log(y);
            // cuando y de -30 el color se cambiará a orange
            const backgroundColor = y <= -30 ? 'orange' : 'cornFlowerBlue'
            setBackgroundColor(backgroundColor)
            // y:-50 pasandolo
        }


        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        // backgroundColor : backgroundColor que es el estado, pero como tienen el mismo nombre se simplifica nombrándolo sólo una vez
        <div ref={divRef} style={{ height: '180vh', backgroundColor }}>
            <h1>ScrollAnimation</h1>
        </div>
    )
}

export default ScrollAnimation