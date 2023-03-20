export default props => (
  <div>
    <label htmlFor="passoInput"> Passos: </label>
    <input
      id="passoInput"
      type="number"
      value={props.passo}
      onChange={e => props.onPassoChange(+e.target.value)}
    />
  </div>
);
