import React, { useState } from 'react'


const initialProduct = {
    title: 'producto1',
    desc: 'desc producto1',
    image: {
        small: 'url small producto1',
        medium: 'url medium producto1',
        big: 'url big producto1'
    }
}
const ProductApp = () => {
    const [product, setProduct] = useState(initialProduct)

    const updateProduct = (property, value) => {
        setProduct({
            ...product,
            // desc: 'otra desc'
            [property]: value
            //cambiar dinamicamente las keys, value se manda normal pero value se pone entre [] para poder cambiarlo (util para guardar valores en formularios)
        })
    }


    return (
        <div className='productApp pb-5'>
            <h1 className='py-5'>ProductApp</h1>

            <button className="btn btn-outline-secondary"
                // onClick={updateProduct()}>
                onClick={() => updateProduct('nombre', 'maria')}>
                Update
            </button>

            <h1>{product.title}</h1>
            <h1>{product.desc}</h1>
            <img src={product.image?.medium} alt="img-medium" />
            {/* cuando el state es un objeto vacio el signo ? despues de image soluciona el error de no encontrar medium por ser un objeto anidado : Uncaught TypeError: Cannot read properties of undefined (reading 'medium')*/}

            <pre>{JSON.stringify(product, null, 2)}</pre>
            {/* mostrar un objeto, propiedades de json.stringify la ultima son los espacios con los que muestra el objeto */}
        </div>
    )
}

export default ProductApp