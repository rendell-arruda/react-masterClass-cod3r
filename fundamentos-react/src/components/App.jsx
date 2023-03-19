import Card from './layout/Card';
import Primeiro from './basicos/Primeiro';
import './App.css';
import ComParametros from './basicos/ComParametros';
import ComFilhos from './basicos/ComFilhos';
import Repeticao from './basicos/Repeticao';
import Condicional from './basicos/Condicional';
import CondiconalComIf from './basicos/CondiconalComIf';

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
    <Card titulo="#4 - Exercicio de repetiçao">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#5 - Exercicio de Condicional  v01">
      <Condicional numero={11}></Condicional>
    </Card>
    <Card titulo="#6 - Exercicio de Condicional  v02">
      <CondiconalComIf numero={22}></CondiconalComIf>
    </Card>
  </div>
);
