import React from 'react';
import '../stylesheet/botton.css'

function Botton({texto, esBotonDeClic, manejarClic}) {
    return  (
        <button 
            className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Botton;