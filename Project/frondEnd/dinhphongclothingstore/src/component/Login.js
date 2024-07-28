import React, { useState } from "react";
import { memo } from "react";
import "./styles.scss"; // Import your styles here
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    address: "",
    phoneNumber: "",
    fullName: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.userName) errors.userName = "Username is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.fullName) errors.fullName = "Full name is required";
    return errors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Handle login logic here
      try {
        const response = await axios.post("http://localhost:8080/crud/users", formData);
        if (response.data.code === 1001) {
        //   dispatch({ type: 'SET_USER', payload: response.data.result });
        //   history.push("/");
            alert("Success");
        } else {
          setErrors({ apiError: "Registration failed" });
        }
      } catch (error) {
        setErrors({ apiError: "An error occurred during registration" });
      }
    }
  };

  return (
    <div className="container login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && <p className="error">{errors.userName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default memo(LoginPage);
