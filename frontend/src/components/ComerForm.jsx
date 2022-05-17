import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComer } from '../features/comers/comersSlice';

function ComerForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComer({ text }));
    setText('');
  };
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Comercializadora</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            {' '}
            Añadir Comercializadora
          </button>
        </div>
      </form>
    </section>
  );
}

export default ComerForm;
