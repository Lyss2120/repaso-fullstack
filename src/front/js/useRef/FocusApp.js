import React, { useRef, useState } from 'react'

const FocusApp = () => {
    const [text, setText] = useState('hola');
    const inputRef = useRef()

    const handleFocus= ()=>{
        // const input= document.getElementById('input')
        // console.log(input.value);
        // input.focus() esta era la forma anterior, se reemplaza por ref para evitar la complicación de usar id unicos 
        // console.log(inputRef);
        // console.log(inputRef.current.value);
        const input = inputRef.current
        // console.log(input.value);
        // input.value='new text'
        input.focus()

     }

    return (
        <div>
            <input 
            // id='input' 
            ref={inputRef}
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}/>
            
            <button onClick={handleFocus}>FOCUS</button>
        </div>
    )
}

export default FocusApp
