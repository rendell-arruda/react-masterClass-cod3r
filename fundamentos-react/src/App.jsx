import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import './App.css';
import ComParametros from './components/basicos/ComParametros';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondiconalComIf from './components/basicos/CondiconalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default props => (
  <div className="App">
    <h1>Fundamento React</h1>
    <div className="Cards">
      <Card titulo=" #01 - Exemplo do Primeiro Componente" color="#FA6900">
        <Primeiro />
      </Card>

      <Card titulo="#02 - Exemplo com parâmetros" color="#E94C6F">
        <ComParametros titulo="opa" subtitulo="epa" />
        <ComParametros
          titulo="Esse é o titulo"
          subtitulo="este é o subtitulo"
        />
      </Card>

      <Card titulo="#03 - Exercício com filhos" color="#008BBA">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#4 - Exercicio de repetiçao" color="#D96459">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#5 - Exercicio de Condicional  v01" color="#FF85CB">
        <Condicional numero={11}></Condicional>
      </Card>

      <Card titulo="#6 - Exercicio de Condicional  v02" color="#92B064">
        <CondiconalComIf numero={22}></CondiconalComIf>
      </Card>

      <Card titulo="#7 - Comunicação direta" color="#920">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#8 - Comunicação Indireta" color="#4d0099">
        <Super></Super>
      </Card>
      <Card titulo="#9 - Input" color="#6497b0">
        <Input></Input>
      </Card>
      <Card titulo="#10 - Contador" color="#1133b0">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#11 - MegaSena" color="#096">
        <Mega qtdeNumeros={8}></Mega>
      </Card>
    </div>
  </div>
);
