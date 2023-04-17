import { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import clienteAxios from '../config/Axios';
import Alerta from '../components/Alerta';

const ConfirmarCuenta = () => {

  const [ cuentaConfirmada, setCuentaConfirmada ] = useState(false);
  const [ cargando, setCargando ] = useState(true);
  const [ alerta, setAlerta ] = useState({})
  const cuentaNecesitaConfirmarse = useRef(true); 

  const params = useParams()
  const { id } = params;

  useEffect(()=>{

    if( cuentaNecesitaConfirmarse.current ){
        cuentaNecesitaConfirmarse.current = false;

        const url = `/veterinarios/confirmar/${id}`
        clienteAxios(url).then(({data})=>{
          setCuentaConfirmada(true)
          setAlerta({
            msg: data.msg
          })

        })
        .catch((error)=>{
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
        })
        setCargando(false)
      }  
  },[])
  return (
    <>
      <div className=''>
        <h1 className='text-indigo-600 font-black text-6xl'>
            Confirma tu Cuenta y Administra tus
            <span className='text-gray-600'> Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-2xl px-10 py-10 rounded-xl bg-white ">

        {!cargando && <Alerta
          alerta={alerta}
        />}

        {cuentaConfirmada && <Link to="/" className='block text-center my-5 text-sm text-indigo-600 '>
          Iniciar Sesion
          </Link>
        }

      </div>
    </>
  )
}

export default ConfirmarCuenta