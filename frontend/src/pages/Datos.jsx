import { useState } from 'react';
import Fondo from '../components/Fondo';
import Oferta from '../components/Oferta';
import comers from '../data/data';
function Datos() {
  return (
    <>
      <Fondo />
      <div className='mapofertas'>
        {comers.map((oferta) => (
          <Oferta
            company={oferta.company}
            tipo={oferta.tipo}
            tarifa={oferta.tarifa}
          />
        ))}
      </div>
    </>
  );
}

export default Datos;
