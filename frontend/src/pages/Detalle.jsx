import React from 'react';
import { Link } from 'react-router-dom';
import DetalleComer from '../components/DetalleComer';
import Fondo from '../components/Fondo';
import comers from '../data/data';

function Detalle(props) {
  return (
    <>
      <Fondo />

      <div className='mapofertaslist'>
        {comers.map((oferta) => (
          <DetalleComer
            img={oferta.img}
            company={oferta.company}
            tipo={oferta.tipo}
            tarifa={oferta.tarifa}
            tp1={oferta.tp1}
            tp2={oferta.tp2}
            tp3={oferta.tp3}
            tp4={oferta.tp4}
            tp5={oferta.tp5}
            tp6={oferta.tp6}
            te1={oferta.te1}
            te2={oferta.te2}
            te3={oferta.te3}
            te4={oferta.te4}
            te5={oferta.te5}
            te6={oferta.te6}
          />
        ))}
      </div>
    </>
  );
}

export default Detalle;
