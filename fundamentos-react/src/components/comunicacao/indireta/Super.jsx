import { useState } from 'react';
import Sub from './Sub';

export default props => {
  const [num, setNum] = useState(0);
  const [texto, setTexto] = useState('valor');

  function quandoClicar(valorGerado, texto) {
    setNum(valorGerado);
    setTexto(texto);
  }
  return (
    <div>
      <h4>
        {texto}: {num}
      </h4>
      <Sub onClicar={quandoClicar}></Sub>
    </div>
  );
};
