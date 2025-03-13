import { useState } from "react";

function LoginSignupForm() {
  const [isLoginForm, setIsLoginForm] = useState(false);
  function performSignupOrLogin(event) {
    event.preventDefault();
    setIsLoginForm(true);
  }
  return (
    <div className="login-signup">
      <h1 className="form-title">{isLoginForm ? "Log in" : "Sign up"}</h1>
      <div className="form-body">
        <form action={isLoginForm ? "/login" : "/signup"} method="post">
          {isLoginForm === false ? (
            <>
              <div className="form-group">
                <label htmlFor="ssn" className="form-label">
                  Social Security Number(SSN)
                </label>
                <br />
                <input
                  type="text"
                  name="ssn"
                  id="ssn"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <br />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Enter Email ID
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Enter Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
            </>
          )}
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success"
              onSubmit={performSignupOrLogin}
            >
              {isLoginForm ? "Log in" : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignupForm;
