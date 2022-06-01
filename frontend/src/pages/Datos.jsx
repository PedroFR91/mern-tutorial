import { useState } from 'react';
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
      <h1>¿Qué tarifa me conviene?</h1>
      <h2>Introduzca los datos de su factura</h2>
      <div>
        <h3>Tipo de tarifa</h3>
        <select name='tarifa' id='' style={{ width: '60px' }}>
          <option value='2.0'>2.0</option>
          <option value='3.0'>3.0</option>
          <option value='6.1'>6.1</option>
        </select>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          margin: '0 auto',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '120px' }}>
          <h3>Potencia Contratada</h3>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P1</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotcon1(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P2</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotcon2(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P3</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotcon3(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P4</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotcon4(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P5</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotcon5(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P6</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotcon6(e.target.value)}
            />
          </div>
        </div>
        <div style={{ width: '120px' }}>
          <h3>Potencia Consumida</h3>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P1</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotencia1(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P2</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotencia2(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P3</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotencia3(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P4</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotencia4(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P5</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotencia5(e.target.value)}
            />
          </div>
          <div
            style={{
              width: '80px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label htmlFor=''>P6</label>
            <input
              type='text'
              style={{ width: '50px' }}
              onChange={(e) => setPotencia6(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='mapofertas'>
        {orderedComers.map((oferta) => (
          <Oferta
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
