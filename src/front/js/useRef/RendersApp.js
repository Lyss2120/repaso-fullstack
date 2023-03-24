import React, { useEffect, useRef, useState } from 'react'

const RendersApp = () => {
    const [text, setText] = useState('hola')
    //un useEffect sin dependencias se ejecuta en cada renderizacion pero daria error porque se ejecutaria eternamente con cada cambio, para esto se pueden usar las referencias mutables que guarde el valor del nro de renders y lo mantenga durante todas las renderizaciones 
    const rendersRef = useRef(1); // 1° render = ref=1

    useEffect(() => {
        console.log(rendersRef.current);
        const renders = rendersRef.current;
        // renders +1 no funciona cambiar los valores si estan dentro de una const, tiene que ser directo en este caso rendersRef.current ++
        rendersRef.current++; // 1° render ref++=2 se aumenta el valor en useEffect pero como aun no se genera una nueva renderizacion en pantalla mostraria 1 todavía hasta la sigte renderización
    })

    return (
        <div>
            <h1>RendersApp</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <div>Renders: {rendersRef.current}
            </div>        </div>
    )
}

export default RendersApp