/* import { useEffect } from "react" */
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    /* useEffect(() => {
        console.log('Nuevo paciente')
    }, [pacientes]) */

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            {
                // Si es 0
                pacientes && pacientes.length ? (
                    // <></> Fragment
                    <>
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        <p className="text-xl mt-5 mb-5 text-center">
                            Administra tus {''}
                            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                        </p>
            
                        {
                            pacientes.map( paciente => (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente}
                                />
                            ))
                        }
                    </>
                ): (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                        <p className="text-xl mt-5 mb-5 text-center">
                            Comienza agregando pacientes {''}
                            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                        </p>
                    </>
                )
            }

        </div>
    )
}

export default ListadoPacientes;
