import "./styles.css";
import React from "react";
import "./form.scss";
function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    joinNewsletter: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dxtsmk.sse.codesandbox.io/postdb", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      })
    });
    console.log(formData);
  }

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <h2 className="form--header">Subscribe To The Company's NewsLetter</h2>
      <p className="form--para">only for company employees!</p>
      <form>
        <input
          placeholder="First Name"
          className="form--input"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          required
        />
        <input
          placeholder="Last Name"
          className="form--input"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form--input"
          onChange={handleChange}
          name="email"
          value={formData.email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          name="password"
          value={formData.password}
          required
        />
        <div className="form--newsletter">
          <input
            id="okayToEmail"
            type="checkbox"
            checked={formData.joinNewsletter}
            onChange={handleChange}
            name="joinNewsletter"
            required
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>

          <button className="form--submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
