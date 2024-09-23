import React, { useState } from "react";
import FormInput from "./FormInput";
import "../styles/UserForm.css";

function UserForm(props) {
  const [inputDetails, setInputDetails] = useState({
    name: "",
    email: "",
    age: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputDetails),
      });
      if (response.ok) {
        const newUser = await response.json();
        props.onUserAdded(newUser);
        setInputDetails({ name: "", email: "", age: "" });
      } else {
        console.error("Error adding user:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <FormInput
            onChange={handleChange}
            type="text"
            label="Name"
            name="name"
            value={inputDetails.name}
          />
        </div>
        <div className="form-group">
          <FormInput
            onChange={handleChange}
            type="email"
            label="Email"
            name="email"
            value={inputDetails.email}
          />
        </div>
        <div className="form-group">
          <FormInput
            onChange={handleChange}
            type="number"
            label="Age"
            name="age"
            value={inputDetails.age}
          />
        </div>
        <div className="form-group">
          <button type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
