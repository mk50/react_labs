import { useHistory } from "react-router-dom";

export const Contactus = () => {
  const history=useHistory()
  let homedire=()=>{
    

   
    history.push("/posts");
  

  }
  

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Contactus</h1>

     email <input  label="email"  type="email"/>
      password<input  label="password"  type="password"/>

      <button onClick={homedire}>
        click
       
      </button>
    </div>
  );
};
