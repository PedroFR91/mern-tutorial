import { useState } from 'react';
import Fondo from '../components/Fondo';
import Oferta from '../components/Oferta';
import comers from '../data/data';
function Datos() {
  return (
    <>
      <Fondo />
      <h1>Añadir Ofertas</h1>
      <h3>---Próximamente---</h3>
      <h5>Los admin podrán crear las ofertas desde aquí</h5>
      <h1>Añadir Usuarios</h1>
      <h3>---Próximamente---</h3>
      <h5>Los Admin podrán crear usuarios desde aquí</h5>
      <h1>Buscador de Ofertas</h1>

      <div className='mapofertas'>
        {comers.map((oferta) => (
          <Oferta
            img={oferta.img}
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
