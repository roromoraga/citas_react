const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    console.log(paciente)

    const {nombre, propietario, email, alta, sintomas, id} = paciente

    const handleEliminar = () => {
        console.log('Eliminando... ', id)

        const respuesta = confirm('¿Desea eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
            <p className="font-bold mb-3 text-gray-700 uppercased">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercased">
                Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercased">
                E-Mail: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercased">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercased">
                Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                    onClick={ () => setPaciente(paciente) }
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente