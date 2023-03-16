import React, { useState } from 'react'

const initialCart = [
    { id: 1, title: 'prod', description: 'description' },
    { id: 2, title: 'prod2', description: 'description2' }
]

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);
    const [show, setShow] = useState(false);

    const deleteProduct = (productId) => {
        const newCart = cart.filter(product => product.id !== productId);
        setCart(newCart)
    }

    const addProduct = (newProduct) => {
        // agregando el id sirve para delete y key
        newProduct.id = Date.now();
        setCart([
            newProduct,
            ...cart
            // newProduct al estar primero se muestra arriba de los demas productos
        ])
    }

    const updateProduct = (editProduct) => {
        const updatedproduct = cart.map(product => (
            // revisa todos los productos y cambia el prod que coincide con el id del editProduct que le pasamos, si es asi deja el que le pasamos, sino lo deja como estaba
            product.id === editProduct.id
                ? editProduct
                : product
        ))
        setCart(updatedproduct)

    }

    return (
        <div className='shoppingCart pb-5'>
            <h1 className='py-5'>
                ShoppingCart
            </h1>
            <button onClick={() => addProduct({ title: 'newProduct', description: 'infodesdeformulario' })}
                className='btn btn-outline-info mb-2'>
                add
            </button>

            <div className='bg'>
                {
                    cart.map(product => (
                        <div key={product.id}

                        >
                            <h1 className='mb-2'>
                                {product.title}
                            </h1>
                            <p className='mb-2'>
                                {product.description}
                            </p>
                            <button onClick={() => deleteProduct(product.id)}
                                className='btn btn-outline-info mb-2'>
                                delete
                            </button>
                            <button onClick={() => updateProduct({ id: product.id, title: 'newProduct updated', description: 'updated infodesdeformulario' })}
                                className='btn btn-outline-info mb-2'>
                                update
                            </button>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => setShow(!show)}
                className='btn btn-outline-info my-2'>
                ver el objeto cart
            </button>
            {show &&
                <pre>
                    {JSON.stringify(cart, null, 2)}
                </pre>
            }

        </div>
    )
}

export default ShoppingCart