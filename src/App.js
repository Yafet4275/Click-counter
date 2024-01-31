import './App.css';
import Botton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './images/bakery-logo.png';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Botton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Botton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
