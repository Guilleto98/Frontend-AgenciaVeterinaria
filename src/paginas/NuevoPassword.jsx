import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import clienteAxios from '../config/Axios';

function NuevoPassword() {

    const [ password, setPassword ] = useState('');
    const params = useParams();
    const [alerta, setAlerta] = useState({});
    const [tokenValido, setTokenValido] = useState(false);
    const {token} = params;
    const [ passwordModificado, setPasswordModificado] = useState(false);

    useEffect(()=>{
        const comprobarToken = async ()=>{
            try {
                await clienteAxios(`/veterinarios/olvide-password/${token}`)
                setAlerta({
                    msg: 'Coloca tu nuevo password'
                })
                setTokenValido(true)
            } catch (error) {
                setAlerta({
                    msg: 'Hubo un erro con el enlace',
                    error: true
                })
            }
        }
        comprobarToken()
    },[])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!password || password.length <= 6){
            setAlerta({
                msg: 'El password debe ser de minimo 6 caracteres',
                error: true
            })
            return
        }
        
        try {
            const url = `/veterinarios/olvide-password/${token}`;
            const { data } = await clienteAxios.post( url, {password})
            console.log(data);

            setAlerta({
                msg: data.msg,
                error: false
            })
            setPasswordModificado(true)
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
        <div className=''>
            <h1 className='text-indigo-600 font-black text-6xl'>
                Reestablece tu password y administra tus
                <span className='text-gray-600'> Pacientes</span>
            </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-2xl px-10 py-10 rounded-xl bg-white ">
            {msg && <Alerta alerta={alerta}/>}
            {tokenValido &&
            <>
                <form onSubmit={handleSubmit}>
                    <div className='my-5'>
                        <label htmlFor="" className='uppercase text-gray-600 block text-xl font-bold'>
                        Nuevo Password
                        </label>
                        <input type="password" 
                            placeholder='Tu Nuevo Password'
                            className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <input 
                    type="submit"
                    value="Guardar Nuevo Password"
                    className="bg-indigo-700 w-full py-3 px-10 rounded-xl 
                            text-white uppercase font-bold mt-5 
                            hover:cursor-pointer hover:bg-indigo-500
                            md:w-auto"
                    />
                </form>

            </>
            }
            {passwordModificado && <Link to="/" className='block my-5 text-sm text-indigo-600'>
                Inicia Sesión
            </Link>
}
        </div>
    </>
  )
}

export default NuevoPassword