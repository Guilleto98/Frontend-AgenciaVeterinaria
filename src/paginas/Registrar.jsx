import { useState } from 'react'
import { Link } from 'react-router-dom';

 const Registrar = () => {

    const [ nombre, setNombre] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ repetirPassword, setRepetirPassword] = useState('');
    
  return (
    <>
      <div className=''>
        <h1 className='text-indigo-600 font-black text-6xl'>
            Crea tu Cuenta y Administra tus
            <span className='text-gray-600'> Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-2xl px-10 py-10 rounded-xl bg-white ">
        <form action="">

        <div className='my-5'>
            <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>
              Nombre
            </label>
            <input type="text" 
                   placeholder='Tu nombre'
                   className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
            />
          </div>

          <div className='my-5'>
            <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>
              Email
            </label>
            <input type="email" 
                   placeholder='Email de registro'
                   className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
            />
          </div>

          <div className='my-5'>
            <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>
              Password
            </label>
            <input type="password" 
                   placeholder='Tu Password'
                   className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
            />
          </div>

          <div className='my-5'>
            <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>
              Repetir Password
            </label>
            <input type="password" 
                   placeholder='Repite Tu Password'
                   className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
            />
          </div>

          <input 
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl 
                       text-white uppercase font-bold mt-5 
                       hover:cursor-pointer hover:bg-indigo-500
                       md:w-auto"
          />
        </form>

        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link to="/" className='block text-center my-5 text-sm text-gray-600'>¿Ya tienes una cuenta? <span className='text-indigo-600'>Inicia Sesión</span></Link>
          <Link to="/olvide-password" className='block text-center my-5 text-sm text-gray-600'>Olvide mi password</Link>
       </nav>

      </div>
    </>
  )
}

export default Registrar;