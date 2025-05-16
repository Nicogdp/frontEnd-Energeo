import { useState } from "react"
import { Form } from "react-bootstrap"
import pruebaApi from "./Api/pruebaApi"

function App() {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const enviarDataosAlBackend = async (nombre,edad,email,password) =>{
        try {
          const resp = await pruebaApi.post ('auth/registro',{
            nombre,
            edad,
            email,
            password,
          });
          if(resp.status === 201){
            console.log('usuario creado');
          }

        } catch (error) {
          if(error.response.status === 400){
            console.log(error.response.data.msg)
          }
        }
      }


    const handleSubmit = (e) =>{
      e.preventDefault();

       //validadaciones basicas
         if (!nombre || !edad || !email || !password){
          console.log('todos los campos son obligatorios')
        }

        enviarDataosAlBackend(nombre,edad,email,password);
      }

  return (

    <>
    <h1>Registro</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Nombre</label>
      <input type="text" onChange={(e) => setNombre(e.target.value) } />
      <br />
      <br />
      <label htmlFor="">Edad</label>
      <input type="number" onChange={(e) => setEdad(e.target.value) } />
      <br /><br />
      <label htmlFor="">email</label>
      <input type="text" onChange={(e) => setEmail(e.target.value) }/>
      <br />
      <br />
      <label htmlFor="">password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value) }/>
      <input type="submit" />
    </form>
    </>
   
  )
}

export default App
