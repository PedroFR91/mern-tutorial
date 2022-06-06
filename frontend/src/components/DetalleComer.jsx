import React from 'react';

function DetalleComer(props) {
  return (
    <div>
      <div className='ofertalist'>
        <div>
          <h3>{props.company}</h3>
        </div>
        <div>
          <h3>{props.tarifa}</h3>
        </div>
        <div>{props.tp1}</div>
        <div>{props.tp2}</div>
        <div>{props.tp3}</div>
        <div>{props.tp4}</div>
        <div>{props.tp5}</div>
        <div>{props.tp6}</div>
      </div>
    </div>
  );
}

export default DetalleComer;
