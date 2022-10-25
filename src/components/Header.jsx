function Header(props) {
    console.log(props)
    
    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/2">
                Seguimiento Paciente {""} con Githib {""}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </>
    )
}

export default Header;