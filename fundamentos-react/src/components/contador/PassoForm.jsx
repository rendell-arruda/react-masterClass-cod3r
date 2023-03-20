export default props => (
  <div>
    <label for="passoInput"> Passos: </label>
    <input
      id="passoInput"
      type="number"
      value={props.passo}
      onChange={e => props.onPassoChange(+e.target.value)}
    />
  </div>
);
