import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../components/GoalForm';
import Spinner from '../components/Spinner';
import { getGoals, reset } from '../features/goals/goalSlice';
import GoalItem from '../components/GoalItem';
import Fondo from '../components/Fondo';
import Card from '../components/Card';
import bd from '../assets/bbdd.png';
import comp from '../assets/comparacion.png';
import porcentaje from '../assets/porcentaje.png';
import contrato from '../assets/contrato.png';
import usuarios from '../assets/usuarios.png';
import { Link } from 'react-router-dom';
function Dashboard() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login');
    }
    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Fondo />
      <section className='heading'>
        <h1>Bienvenid@ {user && user.name}</h1>
      </section>

      <GoalForm />
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Añade tus recordatorios</h3>
        )}
      </section>
      <div className='line'></div>
      <h3>Mi Panel de Control</h3>
      <section className='panel' style={{ display: 'flex' }}>
        <Link to='/datos'>
          <Card img={bd} text={'Datos'} />
        </Link>
        <Link to='/comparador'>
          <Card img={comp} text={'Comparador'} />
        </Link>
        <Link to='/comisiones'>
          <Card img={porcentaje} text={'Comisiones'} />
        </Link>
        <Link to='/contratos'>
          <Card img={contrato} text={'Contratos'} />
        </Link>
        <Link to='/usuarios'>
          <Card img={usuarios} text={'Usuarios'} />
        </Link>
      </section>
    </>
  );
}

export default Dashboard;
