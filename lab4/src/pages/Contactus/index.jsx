import { useHistory } from "react-router-dom";
import styles from './Styles.Module.css'

export const Contactus = () => {
  const history=useHistory()
  let homedire=()=>{
    

   
    history.push("/posts");
  

  }
  const onchangehandlerem=(e)=>{
    const 
    values=e.target.value
    console.log(values)

  }
  const onchangerhandlerpas=(e)=>{
    console.log(e.target.value)

  
  }
  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Contactus</h1>
      <form  className={styles.form} >
       <div className={styles.control}>
         <label htmlFor="email">email</label>
         <input type="email" id="email" required onChange={onchangehandlerem}/>
       </div>
       <div className={styles.control}>
         <label htmlFor="password">password</label>
         <input type="password" id="password" required onChange={onchangerhandlerpas}/>
       </div>
       <div className={styles.actions}>

      <button onClick={homedire}>
        click
       
      </button>
      </div>
      </form>
    </div>
  );
};
