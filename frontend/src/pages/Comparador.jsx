import React, { useState } from 'react';
import Fondo from '../components/Fondo';
import FormInput from '../components/FormInput';

function Comparador() {
  return (
    <>
      <Fondo />
      <div className='comparativa'>
        <h1>Hacer Comparativa</h1>
        <h3>Introduzca los datos requeridos</h3>
      </div>
    </>
  );
}

export default Comparador;
