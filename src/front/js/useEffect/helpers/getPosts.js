
const getPosts = async (userId) => {
    console.log({ userId });
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId;
    const res = await fetch(url);
    const data = await res.json()
    // aqui se puede hacer manejo de errores después
    return data
}
// en la primera carga el userId sale como undefined porque se basa en el estado que inicialmente es un objeto vacío
// eso significa que el primer fetch se hace con un id invalido y estaria demas por lo que se incluye un if antes de setear posts para asegurar que existe antes de hacer la petición http
export default getPosts;