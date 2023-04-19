import { Link } from "react-router-dom"
import { useState } from 'react'
import Alerta from "../components/Alerta"
import clienteAxios from "../config/Axios"

const OlvidePassword = () => {
  const [ email, setEmail ] = useState('');
  const [ alerta, setAlerta] = useState({});

  const handleSubmit = async ( e )=>{
    e.preventDefault();

    if(email === '' || email.length < 6){
      setAlerta({msg: 'El Email es obligatorio', error: true})
      return
    }
    try {
      const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })
      setAlerta({ msg: data.msg })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className='text-indigo-600 font-black text-6xl'>
            Recupera tu Acceso y no Pierdas tus
            <span className='text-gray-600'> Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-2xl px-10 py-10 rounded-xl bg-white ">

        { msg && <Alerta alerta={alerta}/>}

        <form 
          onSubmit={handleSubmit}
        >

          <div className='my-5'>
            <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>
              Email
            </label>
            <input type="email" 
                   placeholder='Email de registro'
                   className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                   value={email}
                   onChange= { e => setEmail(e.target.value)}
            />
          </div>
          <input 
            type="submit"
            value="Enviar Instrucciones"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl 
                       text-white uppercase font-bold mt-5 
                       hover:cursor-pointer hover:bg-indigo-500
                       md:w-auto"
          />
        </form>

        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link to="/" className='block text-center my-5 text-sm text-gray-600'>¿Ya tienes una cuenta? <span className='text-indigo-600'>Inicia Sesión</span></Link>
          <Link to="/registrar" className='block text-center my-5 text-sm text-gray-600'>¿No tienes una cuenta? <span className='text-indigo-600'>Registrate</span></Link>       </nav>
      </div>

    </>
  )
}

export default OlvidePassword