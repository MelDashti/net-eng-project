import "./App.css";
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    lastName: "",
    password: "",
    joinNewsletter: false,
  });

  function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData=>({
            ...prevData,
            [name] : type==="checkbox" ? checked : value,
            
        }))
    }

  

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form>
        <input
          placeholder="First Name"
          className="form--input"
          required
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          placeholder="Last Name"
          className="form--input"
          required
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          className="form--input"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form--input"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <div className="form--newsletter">
          <input
            id="okayToEmail"
            type="checkbox"
            checked={formData.joinNewsletter}
            onChange={handleChange}
            name="joinNewsletter"
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>

          <button className="form--submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
