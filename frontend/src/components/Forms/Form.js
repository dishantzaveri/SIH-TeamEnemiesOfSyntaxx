import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit} style={{textAlign:"center", display:"grid", margin:"10px", padding:"40px"}}>
      <label style={{margin:"10px", padding:"10px", fontSize:"20px"}}>Legal Name of Business : 
      <input 
        type="text" 
        name="legalName" 
        value={ inputs.legalName || ""} 
        onChange={handleChange}
        style={{padding:"5px", fontSize:"20px"}}
      />
      </label>
      {/* <label style={{margin:"10px", padding:"10px"}}>Trade Name:
      <input 
        type="text" 
        name="tradeName" 
        value={inputs.tradeName || ""} 
        onChange={handleChange}
      />
      </label> */}
      
      
      
        {/* <input type="submit" /> */}
    </form>
  )
}

export default MyForm;