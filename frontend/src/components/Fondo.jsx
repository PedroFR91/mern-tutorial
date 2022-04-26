import fondo from '../assets/fondo.jpg';

function Fondo() {
  return (
    <div>
      <img
        src={fondo}
        alt=''
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -10,
        }}
      />
    </div>
  );
}

export default Fondo;
