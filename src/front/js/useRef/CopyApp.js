import React, { useRef, useState } from 'react'
// cada vez que queremos modificar un evento del dom que no podemos controlar con react creamos una referencia
//info sobre window. listeners etc para modificar el dom: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// esta app pega en vez de copiar porque la forma de copiar anterior ya no sirve....
const CopyApp = () => {
const [text, setText] = useState('this is the copy app using useRef')
const inputRef = useRef()

const handlePaste = ()=>{
    const input= inputRef.current
    input.select()
    navigator.clipboard
    .readText()
    .then(
      (clipText) => (input.value += clipText)
    );
    console.log('pegado con éxito')
}

  return (
    <div>
        <input type="text"
        ref={inputRef}
        value={text}
        onChange={(e)=> setText(e.target.value)} />
        <button onClick={handlePaste}>Paste</button>
    </div>
  )
}

export default CopyApp