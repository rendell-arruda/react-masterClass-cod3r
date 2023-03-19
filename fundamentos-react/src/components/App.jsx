import Card from './layout/Card';
import Primeiro from './Primeiro';
import './App.css';
import ComParametros from './ComParametros';
import ComFilhos from './ComFilhos';

export default props => (
  <div className="App">
    <Card titulo=" #01 - Exemplo do Primeiro Componente">
      <Primeiro />
    </Card>

    <Card titulo="#02 - Exemplo com parâmetros">
      <ComParametros titulo="opa" subtitulo="epa" />
      <ComParametros titulo="Esse é o titulo" subtitulo="este é o subtitulo" />
    </Card>

    <Card titulo="#03 - Exercício com filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
  </div>
);
