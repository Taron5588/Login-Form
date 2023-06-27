import React, { useState } from "react";
import './App.css';

function App() {




  return (
    <div className="App">
      <main className='main-body'><h1>Create an account</h1>
        <form action="data.php" className='form'>
          <h5 className='h5'>First name</h5>
           <input type="text" className='form-input' placeholder="Enter FirstName" required />
          <h5>Last name</h5>
           <input type="text" className='form-input' placeholder="Enter LastName"/>
          <h5>Email</h5>
           <input type="email" className='form-input' placeholder="Enter Email" />
          <h5>Phone number</h5>
           <input type="text" className='number-form' placeholder="+374(00)000000"/>
          <p><button className='btn'>Submit</button></p>
        </form>       
      </main>
    </div>
  );
}

export default App;
