export const Input = (props) => {

  const handleChange = (e) => {
    var valsr=e.target.value
    props.setValue(valsr);
    console.log(valsr)
  };
  const handleChanget = (e) => {
    var vals=e.target.value
    props.setValue(vals);
    console.log(vals)
  };
  return (
    <div className="input-group input-group-lg m-2">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          {props.label}
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        value={props.value}
        onChange={handleChange}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChanget}
      />
    </div>
  );
};
