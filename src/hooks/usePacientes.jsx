import { useContext } from "react"
import PacientesContext  from "../context/PacienteProvider"

const usePacientes = () => {
  return useContext(PacientesContext)
}

export default usePacientes