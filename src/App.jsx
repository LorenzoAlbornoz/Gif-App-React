import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [categories, setCategories] = useState(["batman"])
  // const [count, setCount] = useState(0);

  // el useEfect es un houk, en el cual nos permite ejecutar efectos secundarios en los componentes funcionales. Los secundarios son los que pasan despues que el componente se renderiza en la pantalla. El primer pararametro que tiene es una callback y el segundo un array. Tienen una serie de reglas solamente puede ser utilizado en componentes funcionales (si tenes un componente hecho con clase no se utiliza hooks), siempre se utilizan a nivel superior, por ende no se la llamar dentro de una funcion. No podemos llamarlos de forma condicional. Los nombres siempre van a comenzar con la palabra use. los mas comunes son useState y UseEffect. deben ser llamados de forma consistente, se van a ejecutar en cierto orden de acuerdo como sean ejecutado.

  // `useEffect( )`: Este hook se utiliza para manejar efectos secundarios en componentes funcionales. Es similar a los métodos del ciclo de vida `componentDidMount`, `componentDidUpdate` y `componentWillUnmount` en componentes basados en clases. Pueden usar `useEffect` para realizar tareas como la suscripción a eventos, solicitudes HTTP, actualizaciones del DOM, etc.
  // useEffect(() => {// callback se ejecuta cuando se monta el componente
  //   console.log("El contador a cambiado", count);

  //  return () => {//Cleaner o limpiador
  //   // este codigo se ejecuta cuando se desmonta el componente
  //   }
  //     }, [count])// el array de dependencias se ejecuta cuando hay algun cambio en un estado (update)

  // en sass se usa un archivo 7 en 1


  return (
    <>
<div className="container my-4">
  <h1 className="mb-3">Gifs App</h1>
  <AddCategory setCategories={setCategories} />
  <button className="btn btn-danger mb-2" onClick={() => setCategories([""])}>
    Limpiar
  </button>
  <ol className="text-center">
    {categories.map((category) => (
      <GifGrid category={category} key={category} />
    ))}
  </ol>
</div>
    </>
  )
}

export default App