import React from 'react';
import { Page, Text, View, Image, Document } from '@react-pdf/renderer';
import solymar from '../assets/solymarenergia.png';

const actual = 70;
const nueva = 60;
const ahorro = actual - nueva;
const anual = ahorro * 12;
// Create Document Component
const MyDocument = () => (
  <Document>
    <Page
      size='A4'
      orientation='portrait'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15pt',
      }}
    >
      <View style={{ height: '20%', border: '1px solid black' }}>
        <Text>CABECERA</Text>
        <Image
          src={solymar}
          style={{ width: '300pt', position: 'absolute', right: '10pt' }}
        ></Image>
      </View>
      <View
        style={{
          height: '45%',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            height: '33%',
            border: '1px solid black',
          }}
        >
          <Text style={{ margin: '0 auto' }}>TERMINO DE POTENCIA</Text>
        </View>
        <View style={{ height: '33%', border: '1px solid black' }}>
          <Text style={{ margin: '0 auto' }}>CONSUMO DE ENERGÍA</Text>
        </View>
        <View style={{ height: '33%', border: '1px solid black' }}>
          <Text style={{ margin: '0 auto' }}>TOTAL ENERGÍA</Text>
        </View>
      </View>
      <View
        style={{
          height: '30%',
          border: '1px solid black',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: '50%',
            height: '100%',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: '100%',
              height: '30%',
              border: '1px solid black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Nueva Oferta: </Text>
            <Text>{nueva.toFixed(2) + '€'}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '30%',
              border: '1px solid black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Factura actual: </Text>
            <Text>{actual.toFixed(2) + '€'}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '30%',
              border: '1px solid black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Ahorro por factura:</Text>
            <Text>{ahorro.toFixed(2) + '€'}</Text>
          </View>
        </View>
        <View
          style={{ width: '50%', height: '100%', border: '1px solid black' }}
        >
          <Text
            style={{ textAlign: 'center', fontSize: '36pt', margin: 'auto 0' }}
          >
            Ahorro anual:
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: '36pt',
              margin: 'auto 0',
              translateX: '-50%',
            }}
          >
            {anual.toFixed(2) + '€'}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
