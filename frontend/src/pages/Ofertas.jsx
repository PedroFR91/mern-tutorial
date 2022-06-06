import { PDFViewer } from '@react-pdf/renderer';
import React, { useState } from 'react';
import Fondo from '../components/Fondo';
import MyDocument from '../components/MyDocument';
import comers from '../data/data';

function Ofertas() {
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
    <div>
      <Fondo />
      <h1>¿Qué tarifa me conviene?</h1>
      <h2>Introduzca los datos de su factura</h2>
      <div>
        <h3>Fecha:</h3>
        <input type='date' name='fecha' id='' />

        <h3>Cliente:</h3>
        <input type='text' name='cliente' id='' />
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
      <PDFViewer style={{ width: '100%', height: '180vh' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default Ofertas;
