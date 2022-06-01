import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import Fondo from '../components/Fondo';
import Logo from '../assets/solymarenergia.png';
import logo from '../assets/iberdrola.png';
import pdfImg from '../assets/pdf.svg.png';
import comers from '../data/data';
function Comparador() {
  const [cliente, setCliente] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [tipotarifa, setTipotarifa] = useState('');
  const [dias, setDias] = useState('');
  const [fecha, setFecha] = useState('');
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
  const [actual, setActual] = useState(0);
  const alq = 1;
  const pdfRef = useRef(null);

  const handleDownload = () => {
    const content = pdfRef.current;

    const doc = new jsPDF();
    doc.html(content, {
      callback: function (doc) {
        doc.save(`oferta_${cliente}.pdf`);
      },
      html2canvas: { scale: 0.25 },
    });
  };
  return (
    <>
      <Fondo />
      <div className='comparativa'>
        <form className='inputForm'>
          <div>
            <div>
              <label>Fecha de oferta:</label>
              <input type='date' onChange={(e) => setFecha(e.target.value)} />
              {console.log(fecha)}
            </div>
            <div>
              <label>Tipo de Tarifa:</label>
              <select
                name='tarifa'
                className='tarifa'
                id=''
                onChange={(e) => setTipotarifa(e.target.value)}
              >
                <option value='2.0'>2.0</option>
                <option value='3.0'>3.0</option>
                <option value='6.0'>6.0</option>
              </select>
              {console.log(tipotarifa)}
            </div>
            <div>
              <label>Nombre Tarifa:</label>
              <input
                type='text'
                name='nt'
                onChange={(e) => setTarifa(e.target.value)}
              />
              {console.log(tarifa)}
            </div>
            <div className='cliente'>
              <label>Nombre Cliente:</label>
              <input
                type='text'
                name='cliente'
                onChange={(e) => setCliente(e.target.value)}
              />
              {console.log(cliente)}
            </div>
            <div>
              <label>Días de Factura:</label>
              <input type='number' onChange={(e) => setDias(e.target.value)} />
              {console.log(dias)}
            </div>

            <div>
              <label>Comercializadora:</label>

              <select name='comercializadora' id=''>
                <option value='endesa'>ENDESA</option>
                <option value='iberdrola'>IBERDROLA</option>
                <option value='naturgy'>NATURGY</option>
                <option value='plenitude'>PLENITUDE</option>
              </select>
            </div>

            <div>
              <label>Paga actualmente:</label>
              <input type='text' onChange={(e) => setActual(e.target.value)} />
              {console.log(actual)}
            </div>
          </div>
          <div>
            <label>Potencia contratada: </label>
            <div className='potenciacon'>
              <div>
                <label>P1:</label>
                <input
                  type='text'
                  name='pt'
                  id=''
                  onChange={(e) => setPotcon1(e.target.value)}
                />
                {console.log(potcon1)}
              </div>
              <div>
                <label>P2:</label>
                <input
                  type='text'
                  name='pt'
                  id=''
                  onChange={(e) => setPotcon2(e.target.value)}
                />
                {console.log(potcon2)}
              </div>
              <div>
                <label>P3:</label>
                <input
                  type='text'
                  name='pt'
                  id=''
                  onChange={(e) => setPotcon3(e.target.value)}
                />
                {console.log(potcon3)}
              </div>
              <div>
                <label>P4:</label>
                <input
                  type='text'
                  name='pt'
                  id=''
                  onChange={(e) => setPotcon4(e.target.value)}
                />
                {console.log(potcon4)}
              </div>
              <div>
                <label>P5:</label>
                <input
                  type='text'
                  name='pt'
                  id=''
                  onChange={(e) => setPotcon5(e.target.value)}
                />
                {console.log(potcon5)}
              </div>
              <div>
                <label>P6:</label>
                <input
                  type='text'
                  name='pt'
                  id=''
                  onChange={(e) => setPotcon6(e.target.value)}
                />
                {console.log(potcon6)}
              </div>
            </div>
          </div>

          <div>
            <label>Consumo:</label>
            <div className='consumos'>
              <div>
                <label>P1:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia1(e.target.value)}
                />
                {console.log(potencia1)}
              </div>
              <div>
                <label>P2:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia2(e.target.value)}
                />
                {console.log(potencia2)}
              </div>
              <div>
                <label>P3:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia3(e.target.value)}
                />
                {console.log(potencia3)}
              </div>
              <div>
                <label>P4:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia4(e.target.value)}
                />
                {console.log(potencia4)}
              </div>
              <div>
                <label>P5:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia5(e.target.value)}
                />
                {console.log(potencia5)}
              </div>
              <div>
                <label>P6:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia6(e.target.value)}
                />
                {console.log(potencia6)}
              </div>
            </div>
          </div>
          <div className='pdfimg' onClick={handleDownload}>
            <img src={pdfImg} alt='' width={'60px'} />
          </div>
        </form>
      </div>
      <div className='dina4' ref={pdfRef}>
        <div className='header-factura'></div>
        <div className='datos-factura'>
          <div>
            <div>
              <th className='orange mitad'>Fecha:</th>
              <span>{fecha}</span>
            </div>
            <div>
              <th className='orange mitad'>Tipo de Tarifa:</th>
              <span>{tipotarifa}</span>
            </div>
            <div>
              <th className='orange mitad'>Denominación:</th>
              <span>{tarifa}</span>
            </div>
            <div>
              <th className='orange mitad'>Cliente:</th>
              <span>{cliente}</span>
            </div>
            <div>
              <th className='orange mitad'>Días Facturados:</th>
              <span>{dias}</span>
            </div>
          </div>

          <div className='potencias'>
            <div>
              <th className='orange'>Potencia Contratada:</th>
              <div className='pot-con'>
                <table>
                  <th>P1</th>
                  <td>{potcon1}</td>
                  <th>P2</th>
                  <td>{potcon2}</td>
                  <th>P3</th>
                  <td>{potcon3}</td>
                  <th>P4</th>
                  <td>{potcon4}</td>
                  <th>P5</th>
                  <td>{potcon5}</td>
                  <th>P6</th>
                  <td>{potcon6}</td>
                </table>
              </div>
            </div>
            <div>
              <th className='orange'>Potencia Consumida:</th>
              <div className='pot-con'>
                <table>
                  <th>P1</th>
                  <td>{potencia1}</td>
                  <th>P2</th>
                  <td>{potencia2}</td>
                  <th>P3</th>
                  <td>{potencia3}</td>
                  <th>P4</th>
                  <td>{potencia4}</td>
                  <th>P5</th>
                  <td>{potencia5}</td>
                  <th>P6</th>
                  <td>{potencia6}</td>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='termino-potencia'>
          <table>
            <thead>
              <th>Término de Potencia</th>
              <th>Potencia</th>
              <th>Días facturados</th>
              <th>Precio</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td>P1</td>
                <td>{potcon1}</td>
                <td>{dias}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P2</td>
                <td>{potcon2}</td>
                <td>{dias}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P3</td>
                <td>{potcon3}</td>
                <td>{dias}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P4</td>
                <td>{potcon4}</td>
                <td>{dias}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P5</td>
                <td>{potcon5}</td>
                <td>{dias}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P6</td>
                <td>{potcon6}</td>
                <td>{dias}</td>
                <td>{}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='consumo-factura'>
          <table>
            <thead>
              <th>Término de Consumo</th>
              <th>Consumos</th>
              <th>Precio</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td>P1</td>
                <td>{potcon1}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P2</td>
                <td>{potcon2}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P3</td>
                <td>{potcon3}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P4</td>
                <td>{potcon4}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P5</td>
                <td>{potcon5}</td>
                <td>{}</td>
                <td></td>
              </tr>
              <tr>
                <td>P6</td>
                <td>{potcon6}</td>
                <td>{}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='desglose'></div>
        <div className='ahorro'></div>
      </div>
    </>
  );
}

export default Comparador;
