import { useState } from 'react';
import { Link } from 'react-router-dom';
import Fondo from '../components/Fondo';
import Oferta from '../components/Oferta';
import comers from '../data/data';
function Datos() {
  const [potencia1, setPotencia1] = useState(0);
  const [potencia2, setPotencia2] = useState(0);
  const [potencia3, setPotencia3] = useState(0);
  const [potencia4, setPotencia4] = useState(0);
  const [potencia5, setPotencia5] = useState(0);
  const [potencia6, setPotencia6] = useState(0);
  const [potcon1, setPotcon1] = useState(0);
  const [potcon2, setPotcon2] = useState(0);
  const [potcon3, setPotcon3] = useState(0);
  const [potcon4, setPotcon4] = useState(0);
  const [potcon5, setPotcon5] = useState(0);
  const [potcon6, setPotcon6] = useState(0);
  const orderedComers = comers.sort((a, b) => a.orden - b.orden);
  const alq = 0;
  return (
    <>
      <Fondo />
      <div>
        <Link to='/ofertas'>
          <div
            style={{
              width: '70%',
              margin: '0 auto',
              padding: '5px',
              backgroundColor: '#FFC720',
              border: 'none',
            }}
          >
            Generar Oferta
          </div>
        </Link>
      </div>
      <div className='mapofertas'>
        {orderedComers.map((oferta) => (
          <Oferta
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
            orden={
              ((Number(oferta.tp1) * potcon1 +
                Number(oferta.tp2) * potcon2 +
                Number(oferta.tp3) * potcon3 +
                Number(oferta.tp4) * potcon4 +
                Number(oferta.tp5) * potcon5 +
                Number(oferta.tp6) * potcon6 +
                Number(oferta.te1) * potencia1 +
                Number(oferta.te2) * potencia2 +
                Number(oferta.te3) * potencia3 +
                Number(oferta.te4) * potencia4 +
                Number(oferta.te5) * potencia5 +
                Number(oferta.te6) * potencia6) *
                1.005 +
                alq) *
              1.21
            }
          />
        ))}
      </div>
    </>
  );
}

export default Datos;
