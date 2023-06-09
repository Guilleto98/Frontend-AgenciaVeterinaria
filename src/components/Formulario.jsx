import { useState, useEffect } from "react"
import Alerta from './Alerta'
import usePacientes from "../hooks/usePacientes"

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(()=>{
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }
        
    }, [paciente])
    

    const handleSubmit = (e)=>{
        e.preventDefault()

        // Validar el formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        
        guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
        setAlerta({
            msg: 'Guardado Correctamente'
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
    }

    const {msg} = alerta;
  return (
    <>
        <p className="text-xl mt-5 mb-10 text-center">
              Añade tus {''}
              <span className="text-indigo-600 font-bold">
                Pacientes y Administralos
              </span>
        </p>

        
        <form
            className="bg-white py-10 px-5 mb-5 shadow-xl rounded-md"
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label 
                    htmlFor="nombre"
                    className="text-gray-700 uppercase font-bold"

                    >Nombre de tu Mascota
                </label>
                <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                    placeholder="Nombre de tu Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="propietario"
                    className="text-gray-700 uppercase font-bold"

                    >Nombre del Propietario
                </label>
                <input
                    id="propietario"
                    type="text"
                    value={propietario}
                    onChange={ e => setPropietario(e.target.value)}
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className="text-gray-700 uppercase font-bold"

                    >Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="fecha"
                    className="text-gray-700 uppercase font-bold"

                    >Fecha Alta
                </label>
                <input
                    id="fecha"
                    type="date"
                    value={fecha}
                    onChange={ e => setFecha(e.target.value)}
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="sintomas"
                    className="text-gray-700 uppercase font-bold"

                    >Síntomas
                </label>
                <textarea
                    id="sintomas"
                    value={sintomas}
                    onChange={ e => setSintomas(e.target.value)}
                    placeholder="Describe los Síntomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>

            <input
                type="submit"
                value={id ? "Guardar Cambio" : "Agregar Paciente"}
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 hover:cursor-pointer transition-colors rounded-xl"
            />
        </form>
        { msg && <Alerta alerta={alerta} />}
    </>
  )
}

export default Formulario