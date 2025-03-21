import { useState } from "react";

function SignUp(){
  const [userName, setUserName] = useState("John Doe");
  const [userPhone, setUserPhone] = useState("+91 7947823149");
  const [userEmail, setUserEmail] = useState("john.doe29@example.com");
  const [userPassword, setUserPassword] = useState("12345678");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  function handleSignUp(e){
    e.preventDefault();
    setUserName(e.target.name.value);
    setUserPhone(e.target.phone.value);
    setUserEmail(e.target.email.value);
    setUserPassword(e.target.password.value);
    setAgreedToTerms(e.target.confirm.checked);
  }

  return <div className="signup">
    <div className="signupForm">
      <h2 className="title">Sign Up</h2>
      <div>
        <form method="get" onSubmit={handleSignUp}>
          <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" name="name" id="name" placeholder="Enter your name" />
          </p>
          <p>
            <label htmlFor="phone">Phone</label> <br />
            <input type="text" name="phone" id="phone" placeholder="Enter your phone number" />
          </p>
          <p>
            <label htmlFor="email">Email Address</label> <br />
            <input type="email" name="email" id="email" placeholder="Enter your email address" />
          </p>
          <p>
            <label htmlFor="password">Password</label> <br />
            <input type="password" name="password" id="password" placeholder="Enter your password" />
          </p>
          <p>
            <label htmlFor="confirm">
              <input type="checkbox" name="confirm" id="confirm" /> agreed to <a href="#">terms & conditions</a>?
            </label>
          </p>
          <p>
            <button type="submit">Sign Up</button>
            <button type="reset">Cancel</button>
          </p>
        </form>
      </div>
    </div>
    <div className="signupData">
      <h2 className="title">You've entered the following details</h2>
      <div className="signupDetails">
        <table>
          <tr>
            <th>Name : </th>
            <td>{userName}</td>
          </tr>
          <tr>
            <th>Phone No. : </th>
            <td>{userPhone}</td>
          </tr>
          <tr>
            <th>Email Address : </th>
            <td>{userEmail}</td>
          </tr>
          <tr>
            <th>Password : </th>
            <td>{userPassword}</td>
          </tr>
          <tr>
            <th>Is Agreed to terms and conditions : </th>
            <td>{agreedToTerms ? "agreed" : "non-agreed"}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
}

export default SignUp;