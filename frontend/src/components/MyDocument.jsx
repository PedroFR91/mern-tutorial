import React from 'react';
import { Page, Text, View, Image, Document } from '@react-pdf/renderer';
import solymar from '../assets/solymarenergia.png';
import comercializadora from '../assets/iberdrola.png';

const actual = 70;
const nueva = 80;
const ahorro = actual - nueva;
const anual = ahorro * 12;
// Create Document Component
const MyDocument = (props) => (
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
      <View style={{ height: '20%' }}>
        <View
          style={{
            width: '100%',
            height: '70%',
            top: '40pt',
          }}
        >
          <View
            style={{
              width: '100%',
              fontSize: '16px',
            }}
          >
            <Text>Fecha:</Text>
            <Text>Cliente:</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ marginRight: '80px' }}>Tipo de Tarifa:</Text>
              <Text>Días facturados:</Text>
            </View>
            <Text>Tarifa ofrecida:</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ width: '35%' }}>
                <Text>Potencia Contratada:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P1:{props.potencia1}</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P2:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P3:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P4:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P5:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P6:</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ width: '35%' }}>
                <Text>Consumo:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P1:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P2:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P3:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P4:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P5:</Text>
              </View>
              <View style={{ width: '10%' }}>
                <Text>P6:</Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            position: 'absolute',
            right: '120pt',
            top: '50pt',
            fontSize: '14pt',
          }}
        >
          Ofertado por:
        </Text>
        <Image
          src={comercializadora}
          style={{
            width: '100pt',
            position: 'absolute',
            right: '10pt',
            top: '40pt',
          }}
        ></Image>
        <Image
          src={solymar}
          style={{ width: '300pt', position: 'absolute', right: '10pt' }}
        ></Image>
      </View>
      <View
        style={{
          height: '50%',

          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            height: '33%',
          }}
        >
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '16pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
              color: '#ffffff',
              backgroundColor: '#F0971C',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>T. Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P1</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P2</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P3</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P4</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P5</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P6</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
        </View>
        <View style={{ height: '33%' }}>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '16pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
              color: '#ffffff',
              backgroundColor: '#F0971C',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>T. Consumo</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P1</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P2</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P3</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P4</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P5</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text>P6</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Días </Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Precio</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text>Total</Text>
            </View>
          </View>
        </View>
        <View style={{ height: '33%' }}>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '16pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
              color: '#ffffff',
              backgroundColor: '#F0971C',
            }}
          >
            <View style={{ width: '33%' }}>
              <Text>T. Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Días </Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '33%' }}>
              <Text>T. Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Días </Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '33%' }}>
              <Text>T. Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Días </Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '33%' }}>
              <Text>T. Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Días </Text>
            </View>
          </View>
          <View
            style={{
              margin: '0 auto',
              width: '100%',
              fontSize: '14pt',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <View style={{ width: '33%' }}>
              <Text>T. Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Potencia</Text>
            </View>
            <View style={{ width: '33%' }}>
              <Text>Días </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: '30%',

          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: '100%',
              height: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#53BDFF44',
            }}
          >
            <Text>Nueva Oferta: </Text>
            <Text>{nueva.toFixed(2) + '€'}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#53BDFF44',
            }}
          >
            <Text>Factura actual: </Text>
            <Text>{actual.toFixed(2) + '€'}</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#53BDFF44',
            }}
          >
            <Text>Ahorro por factura:</Text>
            <Text>{ahorro.toFixed(2) + '€'}</Text>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: '100%',
          }}
        >
          <Text
            style={{
              height: '30%',
              textAlign: 'center',
              paddingTop: '5%',
              fontSize: '24pt',
              margin: 'auto 0',
              backgroundColor: '#F0971CBB',
            }}
          >
            Ahorro anual:
          </Text>
          <Text
            style={{
              height: '70%',
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
