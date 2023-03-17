
const getUser = async () => {
    const url = fetch('https://jsonplaceholder.typicode.com/users/1');
    const res = await fetch(url);
    const data = await res.json
// aqui se puede hacer manejo de errores después
    return user
}

export default getUser;