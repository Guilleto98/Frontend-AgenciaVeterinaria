import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/Axios'

const PacientesContext = createContext()

export const PacientesProvider = ({children})=>{

    const [ pacientes, setPacientes] = useState([])

    return(
        <PacientesContext.Provider
            value={{
                pacientes
            }}
        >
             {children}
        </PacientesContext.Provider>
    )
}



export default PacientesContext