import React, { useState } from 'react';
import Fondo from '../components/Fondo';
import FormInput from '../components/FormInput';

function Comparador() {
  const [values, setValues] = useState({
    tt: '',
    pc1: '',
    pc2: '',
    pc3: '',
    pc4: '',
    pc5: '',
    pc6: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    df: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'tipotarifa',
      type: '',
      placeholder: 'Seleccione Tipo de Tarifa',
      label: 'Tipo de Tarifa',
      required: true,
    },
    {
      id: 2,
      name: 'PotenciaContratada1',
      type: 'number',
      placeholder: 'Potencia Conntratada 1',
      label: 'Potencia Contratada 1',
      required: true,
    },
    {
      id: 3,
      name: 'PotenciaContratada2',
      type: 'number',
      placeholder: 'Potencia Conntratada 2',
      label: 'Potencia Contratada 2',
      required: true,
    },
    {
      id: 4,
      name: 'PotenciaContratada3',
      type: 'number',
      placeholder: 'Potencia Conntratada 3',
      label: 'Potencia Contratada 3',
      required: true,
    },
    {
      id: 5,
      name: 'PotenciaContratada4',
      type: 'number',
      placeholder: 'Potencia Conntratada 4',
      label: 'Potencia Contratada 4',
      required: true,
    },
    {
      id: 6,
      name: 'PotenciaContratada5',
      type: 'number',
      placeholder: 'Potencia Conntratada 5',
      label: 'Potencia Contratada 5',
      required: true,
    },
    {
      id: 7,
      name: 'PotenciaContratada6',
      type: 'number',
      placeholder: 'Potencia Conntratada 6',
      label: 'Potencia Contratada 6',
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Fondo />
      <div className='comparativa'>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button>Comparar</button>
        </form>
      </div>
    </>
  );
}

export default Comparador;
