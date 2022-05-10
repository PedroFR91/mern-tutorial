import { useState } from 'react';
import Fondo from '../components/Fondo';
import Oferta from '../components/Oferta';
import comers from '../data/data';
function Datos() {
  return (
    <>
      <Fondo />
      <div className='toggle-view'>Cuadrícula/Tabla</div>
      <div className='mapofertas'>
        {comers.map((oferta) => (
          <Oferta
            img={oferta.img}
            company={oferta.company}
            tipo={oferta.tipo}
            tarifa={oferta.tarifa}
            tp1={(oferta.tp1 / 365).toFixed(2)}
            tp2={(oferta.tp2 / 365).toFixed(2)}
            tp3={(oferta.tp3 / 365).toFixed(2)}
            tp4={(oferta.tp4 / 365).toFixed(2)}
            tp5={(oferta.tp5 / 365).toFixed(2)}
            tp6={(oferta.tp6 / 365).toFixed(2)}
            te1={oferta.te1.toFixed(2)}
            te2={oferta.te2.toFixed(2)}
            te3={oferta.te3.toFixed(2)}
            te4={oferta.te4.toFixed(2)}
            te5={oferta.te5.toFixed(2)}
            te6={oferta.te6.toFixed(2)}
          />
        ))}
      </div>
    </>
  );
}

export default Datos;
