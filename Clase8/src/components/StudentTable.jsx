

function StudentTable ({students, onSaludarClick}) {

    

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td><button onClick={(e) => onSaludarClick(student) }>Saludar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;