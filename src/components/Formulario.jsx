import { useState } from "react"

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState(Date.now())
    const [sintomas, setSintomas] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = (e)=>{
        e.preventDefault()

        // Validar el formulario
    }


  return (
    <>
        <p className="text-lg text-center mb-10">
            Añade tus pacientes y {''}
            <span className="font-bold text-indigo-600">Administralos</span>
        </p>

        <form
            className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-xl rounded-md"
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
                value="Agregar Paciente"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 hover:cursor-pointer transition-colors"
            />
        </form>
    </>
  )
}

export default Formulario