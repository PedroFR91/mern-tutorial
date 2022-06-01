function Oferta(props) {
  return (
    <>
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
      </div>
    </>
  );
}

export default Oferta;
