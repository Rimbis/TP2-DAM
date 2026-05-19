import { useState } from 'react'
import Titulo from './componentes/Titulo.jsx'
import Lista from './componentes/Lista.jsx'
import './App.css'

function App() {
  const [input, setInput] = useState("") // INGRESO LOS DATOS
  const [tareas, setTareas] = useState([]) //array


  const handleClick = () => {
    if (input.trim() === "") return
    const nuevaTarea = {
      id: Date.now(),
      texto: input,
      completado: false //esto luego lo doy vuelta con !
    }
    setTareas([...tareas, nuevaTarea]) 
    setInput("") 
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id)) // filter es para que conserve el que no tenga el id clickeado (borrado)
  }

  const toggleTarea = (id) => {
  setTareas(tareas.map(t => // busca el clickeado para cambiarlo true/false
    t.id === id ? { ...t, completado: !t.completado } : t
  ));
};


  return (
    <>
    <div className="main-container">

      <Titulo texto={"Hola"}>Tareas</Titulo>


      <ul>
   {tareas.map(tarea => (
  <Lista 
    key={tarea.id} 
    texto={tarea.texto} 
    isCompleted={tarea.completado} 
    onDelete={() => eliminarTarea(tarea.id)} 
    onToggle={() => toggleTarea(tarea.id)} // Lawea
  />
))}
      </ul>
      <div className='inputGroup'>


      <input  className='busqueda'
        type="text" 
        value={input} // para que el input se limpie solo solito solon
        onChange={e => setInput(e.target.value)} 
        />
      <button className='btn-agregar' onClick={handleClick}>Agregar</button>
        </div>
    </div>
    </>
    
    
  )
}

export default App