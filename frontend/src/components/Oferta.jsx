function Oferta(props) {
  return (
    <>
      <div className='oferta'>
        <div className='width-company'>
          <h3>{props.company}</h3>
        </div>
        <div className='width-tipo'>
          <h3>{props.tipo}</h3>
        </div>
        <div className='width-deno'>
          <h3>{props.tarifa}</h3>
        </div>
        <div className='width-tp'>{props.tp1}</div>
        <div className='width-tp'>{props.tp2}</div>
        <div className='width-tp'>{props.tp3}</div>
        <div className='width-tp'>{props.tp4}</div>
        <div className='width-tp'>{props.tp5}</div>
        <div className='width-tp'>{props.tp6}</div>
        <div className='width-tp'>{props.te1}</div>
        <div className='width-tp'>{props.te2}</div>
        <div className='width-tp'>{props.te3}</div>
        <div className='width-tp'>{props.te4}</div>
        <div className='width-tp'>{props.te5}</div>
        <div className='width-tp'>{props.te6}</div>
      </div>
    </>
  );
}

export default Oferta;
