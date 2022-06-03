import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import Fondo from '../components/Fondo';
import MyDocument from '../components/MyDocument';

function Ofertas() {
  return (
    <div>
      <Fondo />
      <PDFViewer style={{ width: '100%', height: '180vh' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default Ofertas;
