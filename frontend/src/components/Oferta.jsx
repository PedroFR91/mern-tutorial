function Oferta(props) {
  return (
    <>
      <div className='oferta'>
        <div>
          <div>
            <img src={props.img} alt='' width={'90%'} />
          </div>
          <div>
            <h3>{props.tarifa}</h3>
          </div>
          <div>
            <h3>{props.company}</h3>
          </div>
          <div>
            <h3>{props.tipo}</h3>
          </div>
        </div>
        <div>
          <button className='precios'>Ver Precios</button>
        </div>
      </div>
    </>
  );
}

export default Oferta;
