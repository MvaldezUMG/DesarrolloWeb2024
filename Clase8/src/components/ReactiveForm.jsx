import { useState } from "react"


function ReactiveForm() {

    const [personData, setPersonData] = useState({
        name: "",
        age: 0,
        phone: ""
    })

    const changePersonData = (e) => {
        setPersonData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const formSubmit = (e) => {
        //Evitamos que se envie al servidor
        e.preventDefault()
        alert('Formulario enviado') 
        console.log(personData)
      }

    return (
        <>
            <h4>Formulario reactivo</h4>
            <form onSubmit={formSubmit}>
                <label htmlFor="nombre" >Nombre</label>
                <input type="text" id="nombre" name="name" value={personData.name} onChange={changePersonData} />
                <small style={{ color: 'red' }}>{personData.name.length < 5 ? 'El nombre debe tener al menos 5 caracteres' : ''}</small>
                <label htmlFor="age" >Edad</label>
                <input type="number" id="age" name="age" value={personData.age} onChange={changePersonData} />
                <label htmlFor="phone" >Telefono</label>
                <input type="text" id="phone" name="phone" value={personData.phone} onChange={changePersonData} />
                <button type="submit">Enviar</button>
            </form>
            {JSON.stringify(personData)}
        </>
    )
}

export default ReactiveForm