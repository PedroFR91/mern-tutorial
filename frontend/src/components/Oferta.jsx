function Oferta(props) {
  const dias = 30;
  const tp1 = 1;
  const tp2 = 2;
  const tp3 = 3;
  const tp4 = 4;
  const tp5 = 5;
  const tp6 = 6;
  const preciotp1 = 1;
  const preciotp2 = 2;
  const preciotp3 = 3;
  const preciotp4 = 4;
  const preciotp5 = 5;
  const preciotp6 = 6;
  const ce1 = 1;
  const ce2 = 2;
  const ce3 = 3;
  const ce4 = 4;
  const ce5 = 5;
  const ce6 = 6;
  const previoce1 = 1;
  const previoce2 = 2;
  const previoce3 = 3;
  const previoce4 = 4;
  const previoce5 = 5;
  const previoce6 = 6;
  const tptotal = 6;
  const cetotal = 8;
  const totalfinal = 5;
  const impuesto = 2;
  const alquiler = 3;
  const iva = totalfinal * 1.21;
  return (
    <>
<<<<<<< HEAD
      <div className='oferta'>
        <div>
          <h1>{props.company}</h1>
=======
<<<<<<< HEAD
      <div className='filaoferta'>
        <tr>
          <td style={{ width: '140px', backgroundColor: '#fff' }}>
            {props.company}
          </td>
          <td style={{ width: '80px', backgroundColor: '#fff' }}>
            {props.tipo}
          </td>
          <td style={{ width: '300px', backgroundColor: '#fff' }}>
            {props.tarifa}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.tp1}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.tp2}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.tp3}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.tp4}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.tp5}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.tp6}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.te1}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.te2}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.te3}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.te4}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.te5}
          </td>
          <td style={{ width: '60px', backgroundColor: '#fff' }}>
            {props.te6}
          </td>
        </tr>
=======
      <div className='oferta'>
        <div>
          <img src={props.img} width={'100%'} alt='oferta' />
>>>>>>> eebe4b393c7a59342f262630f9bdc7a78db32395
        </div>
        <div>
          <h3>{props.tipo}</h3>
        </div>
        <div>
          <h3>{props.tarifa}</h3>
        </div>
<<<<<<< HEAD
        <div>
          <h5>{props.orden}</h5>
        </div>
=======
        <div>Precio Ofertado:</div>
>>>>>>> fa153ce8561dd3f073da0b7512d80cfe91b7306f
>>>>>>> eebe4b393c7a59342f262630f9bdc7a78db32395
      </div>
    </>
  );
}

export default Oferta;
