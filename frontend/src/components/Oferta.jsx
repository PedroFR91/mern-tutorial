function Oferta(props) {
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
