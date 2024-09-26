import { useState } from "react"

import ReactiveForm from "../components/ReactiveForm"
import StudentTable from "../components/StudentTable"

export default function Practices() {

    
  const [nombre, setNombre] = useState('')
  const [personData, setPersonData]= useState({
    name: "",
    age: 0,
    phone: ""
  })
  const [alumnos, setAlumnos] = useState([
    {id: 1, nombre: 'Juan', edad: 20},
    {id: 2, nombre: 'Pedro', edad: 21},
    {id: 3, nombre: 'Ana', edad: 22},
    {id: 4, nombre: 'Maria', edad: 23},
    {id: 5, nombre: 'Jose', edad: 17},
  ])

  const setName = (e) => {
    setNombre(e.target.value)
  }

  const formSubmitNonReactive = (e) => {
    //Evitamos que se envie al servidor
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      age: formData.get('age'),
      phone: formData.get('phone')
    }
    alert('Formulario enviado') 
    //Cambiamos el estado solo 1 vez
    setPersonData(data)

    console.log(data)
  }

    return (
        <>
            <input type="text" value={nombre} onChange={setName} />
            <button onClick={(() => { setNombre('') })}>Borrar</button>
            <button onClick={(() => { setNombre('Juan') })}>Setear como Juan</button>
            <h1 className="read-the-docs" >Hola</h1> <h2>{nombre}</h2>

            <ReactiveForm />

            <h4>Formulario NO reactivo</h4>

            <form onSubmit={formSubmitNonReactive}>
                <label htmlFor="nombre" >Nombre</label>
                <input type="text" id="nombre" name="name" />
                <label htmlFor="age" >Edad</label>
                <input type="number" id="age" name="age" />
                <label htmlFor="phone" >Telefono</label>
                <input type="text" id="phone" name="phone" />
                <button type="submit">Enviar</button>
            </form>
            {JSON.stringify(personData)}

            <h4>Lista de alumnos</h4>
            <ul>
                {alumnos.map((alumno) => {
                    return <li key={alumno.id}>{alumno.nombre} - {alumno.edad}</li>
                })
                }
            </ul>
            {/* <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Es mayor</th>
          </tr>
        </thead>
        <tbody>
          { alumnos.map((alumno)=>{
            return (
              alumno.edad >= 18 ?
                  <tr key={alumno.id}>
                                  <td>{alumno.nombre}</td>
                                  <td>{alumno.edad}</td>
                                  <td>{alumno.edad >= 18 ? "Si" : "No"}</td>
                                </tr>
                :
                <tr key={alumno.id} style={{backgroundColor: "red"}}>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.edad}</td>
                  <td>{alumno.edad >= 18 ? "Si" : "No"}</td>
                  <td><button>Eliminar</button></td>
                </tr>
              
            )
          })
          }
        </tbody>
      </table> */}

            <StudentTable students={alumnos.map((alumno, index) => ({
                id: index,
                name: alumno.nombre,
                age: alumno.edad,
                lastName: "Desconocido"
            }))}
                onSaludarClick={(student) => {
                    alert(`Hola ${student.name}`)
                }}
            />
        </>
    )
}