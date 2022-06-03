import { Link } from 'react-router-dom';
function Oferta(props) {
  return (
    <>
      <div className='oferta'>
        <div>
          <h1>{props.company}</h1>
        </div>
        <div>
          <h3>{props.tarifa}</h3>
        </div>
        <div>
          <h5>{props.orden}</h5>
        </div>
        <div>
          <Link to='/ofertas'>
            <div
              style={{
                width: '70%',
                margin: '0 auto',
                padding: '5px',
                backgroundColor: '#FFC720',
                border: 'none',
              }}
            >
              Generar Oferta
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Oferta;
