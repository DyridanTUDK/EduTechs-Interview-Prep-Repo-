import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { fields } from './fieldsConfig'

function App() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>{
    const {name, value} = e.target;
    const updated  = {
      ...formData,
      [name]: value,
    };
    setFormData(updated)
    validation(updated)
  }

    const validation = (updated) =>{
      const error = {};
      // name rules
      if(!updated.name){
        error.name = "Name is Required"
      }
      else if(updated.name.length<4){
        error.name = "Name must be greater than 4 characters"
      }
      else if(updated.name.length>20){
        error.name = "Name must be less than 20 characters"
      }
      // validator for email
      if(!updated.email){
        error.email = "Email is Required";
      }
      // password
      if(!updated.password){
        error.password = "Password is required"
      }
      else if(updated.password.length<8){
        error.password = "Password has to be greater than 8 characters"
      }
      // age validator
      if(!updated.age){
        error.age = "please enter an age"
      }
      else if((updated.age<14)){
        error.age = "You need to be older than 14 to be a member"
      }
      else{
        error.age = ""
      }
      setErrors(error)
      return Object.keys(error).length === 0;
    }

     const handleSubmit = e => {
      e.preventDefault();
      if (validation()) {
      console.log("Submitted:", form);
      }
  }


  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            onChange={handleChange}
          />
          {errors[field.name] && (
            <p style={{ color: "red" }}>
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}


export default App;
