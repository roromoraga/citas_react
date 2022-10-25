import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        console.log(Object.keys(paciente))

        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            console.log('Hay campos importantes que no se han completados.')
            setError(true)
            return
        }

        setError(false)

        // Objeto de Paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas//,
            //id: generarId()
        }

        // Si no viene vacío
        if (paciente.id) {
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente: pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        // Reiniciar el Form
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')

        console.log('Enviando formulario')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Paciente
            </h2>
            <p className="text-lg mt-5 text-center mb-5">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-10" onSubmit={handleSubmit}>
                {/** error ? 'Si hay un error': 'No hay error' */ }
                {/** error && (
                    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                        <p>Todos los campos son obligatorios</p>
                    </div>
                )  */}

                { error && <Error>Todos los campos son obligatorios</Error>}

                <div className="mt-2">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota:
                    </label>
                    <input
                        id="mascota" 
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full mt-2 p-2 placeholder-red-700 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) } />
                </div>
                <div className="mt-2">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Propietario:
                    </label>
                    <input
                        id="propietario" 
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full mt-2 p-2 placeholder-red-700 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) } />
                </div>
                <div className="mt-2">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        E-Mail:
                    </label>
                    <input
                        id="email" 
                        type="text"
                        placeholder="Email del Propietario"
                        className="border-2 w-full mt-2 p-2 placeholder-red-700 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="mt-2">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta:
                    </label>
                    <input
                        id="alta" 
                        type="date"
                        className="border-2 w-full mt-2 p-2 rounded-md"
                        value={alta}
                        onChange={ (e) => setAlta(e.target.value) } />
                </div>
                <div className="mt-2">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas:
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full mt-2 p-2 placeholder-red-700 rounded-md"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-800 cursor-pointer transition-all"
                    value="Agregar Pacientes"
                />
            </form>
        </div>
    )
}

export default Formulario;
