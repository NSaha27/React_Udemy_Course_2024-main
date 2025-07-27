import { useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { UserContext } from "../store/user-context";

function SignupForm() {
  const { addUser } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  function handleChange(ev) {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSignup(ev) {
    ev.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.log("*** password and confirm password must be same!");
      return false;
    }
    try {
      addUser(
        formData.username,
        formData.name,
        formData.gender,
        formData.address,
        formData.phone,
        formData.email,
        formData.password
      );
      console.log("*** registration successful!");
    } catch (err) {
      console.log(`unable to register, error: ${err.message}`);
    }
  }

  return (
    <div className="">
      <h2 className="mb-3">Sign Up</h2>
      <div className="">
        <form
          action={"#"}
          method={"POST"}
          className="needs-validation"
          noValidate=""
          onSubmit={handleSignup}
        >
          <div className="row g-3">
            {" "}
            <div className="col-12">
              {" "}
              <label htmlFor="username" className="form-label">
                Username
              </label>{" "}
              <div className="input-group has-validation">
                {" "}
                <span className="input-group-text">@</span>{" "}
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  required=""
                />{" "}
                <div className="invalid-feedback">
                  Your username is required.
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col-12">
              {" "}
              <label htmlFor="name" className="form-label">
                Name
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="ex. John Doe"
                onChange={handleChange}
                required=""
              />{" "}
              <div className="invalid-feedback">Valid name is required.</div>{" "}
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender1"
                  value={"female"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="gender1">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender2"
                  value={"male"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="gender2">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender3"
                  value={"other"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="gender3">
                  Other
                </label>
              </div>
            </div>
            <div className="col-12">
              {" "}
              <label htmlFor="address" className="form-label">
                Address
              </label>{" "}
              <textarea
                className="form-control"
                id="address"
                name="address"
                rows="3"
                onChange={handleChange}
              ></textarea>{" "}
              <div className="invalid-feedback">Please enter your address.</div>{" "}
            </div>{" "}
            <div className="col-12">
              {" "}
              <label htmlFor="phone" className="form-label">
                Phone no.
              </label>{" "}
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="+91 XXXXXXXXXX"
                onChange={handleChange}
                required=""
              />{" "}
              <div className="invalid-feedback">
                Please enter your phone number.
              </div>{" "}
            </div>{" "}
            <div className="col-12">
              {" "}
              <label htmlFor="email" className="form-label">
                Email <span className="text-body-secondary">(Optional)</span>
              </label>{" "}
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
              />{" "}
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>{" "}
            </div>{" "}
            <div className="col-12">
              {" "}
              <label htmlFor="password" className="form-label">
                Password
              </label>{" "}
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="xxxxxxxxxxxxx"
                onChange={handleChange}
              />{" "}
              <div className="invalid-feedback">
                <div className="">Please enter a valid password.</div>
                <div className="">
                  <ul className="">
                    <li className="">must be atleast 8 characters long</li>
                    <li className="">must have atleast one uppercase letter</li>
                    <li className="">must have atleast one lowercase letter</li>
                    <li className="">must have atleast one digit</li>
                    <li className="">
                      must have atleast one special symbol (@#$&_-.)
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="col-12">
              {" "}
              <label htmlFor="confirmPassword" className="form-label">
                Confirm password
              </label>{" "}
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="ex. John.Doe@1998"
                onChange={handleChange}
              />{" "}
              <div className="invalid-feedback">
                <div className="">Please enter a valid password.</div>
                <div className="">
                  <ul className="">
                    <li className="">must be atleast 8 characters long</li>
                    <li className="">must have atleast one uppercase letter</li>
                    <li className="">must have atleast one lowercase letter</li>
                    <li className="">must have atleast one digit</li>
                    <li className="">
                      must have atleast one special symbol (@#$&_-.)
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <hr className="my-4" />{" "}
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
