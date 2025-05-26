import axios from "axios";

const testApi= axios.create({
    baseURL: 'https://backend-enegeo.onrender.com'
});

//Cada vez que hago una peticion a un endponit intercepto la request y extraigo el token del localstoge
//  y lo guardo en 'x-token' se envia atravez de los headers que es como lo recibiamos desde el backend
//  esta linea hace que se haga de forma automatica

testApi.interceptors.request.use((config) =>{
    config.headers={
        'x-token':localStorage.getItem('token'),
    };
    return config;
});

export default testApi;