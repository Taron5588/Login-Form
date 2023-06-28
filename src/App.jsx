import React, { useState } from "react";
import './App.css';

function App() {

  const [field1, setField1] = useState("");
  const [field1Error, setField1Error] = useState("");

  const validateForm = () => {
    const field1Valid = field1.trim() !== "";
    setField1Error(field1Valid ? "" : "This field is required.")

    return field1Valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setField1("");
      setField1Error("");
    }
  }



  return (
    <div className="App">
      <main className='main-body'><h1>Create an account</h1>
        <form onSubmit={handleSubmit}  action="data.php" className='form'>

          <h5 className='h5'>First name</h5>
          <span className="span">{field1Error}</span>
           <input type="text" className='form-input' value={field1} onChange={(e) => setField1(e.target.value)} placeholder="Enter FirstName" required />
          
          <h5>Last name</h5>
           <input type="text" className='form-input' placeholder="Enter LastName"/>
          
          <h5>Email</h5>
           <input type="email" className='form-input' placeholder="Enter Email" />
         
          <h5>Phone number</h5>
           <input type="text" className='number-form' placeholder="+374(00)000000"/>

          <p><button type="submit" className='btn' >Submit</button></p>

        </form>       
      </main>
    </div>
  );
}

export default App;
