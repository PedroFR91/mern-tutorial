import React, { useState } from 'react';
import Spreadsheet from 'react-spreadsheet';

function Comisiones() {
  const [data, setData] = useState([
    [{ value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }],
  ]);
  return (
    <>
      <Spreadsheet data={data} onChange={setData} />
    </>
  );
}

export default Comisiones;
