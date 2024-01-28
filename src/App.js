import { useState } from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/boton';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  const[numClics,  setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics +1);
  }

  const reiniciarContar = () =>{
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freecodecampLogo}
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />

        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>

        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContar}/>

      </div>
    </div>
  );
}

export default App;
