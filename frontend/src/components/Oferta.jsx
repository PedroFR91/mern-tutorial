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
      <div className='oferta'>
        <div>
          <h1>{props.company}</h1>
        </div>
        <div>
          <h3>{props.tipo}</h3>
        </div>
        <div>
          <h3>{props.tarifa}</h3>
        </div>
        <div>
          <h5>{props.orden}</h5>
        </div>
      </div>
    </>
  );
}

export default Oferta;
