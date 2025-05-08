function IfElse({ isRegistered }) {
  if (!isRegistered) {
    return (
      <div className="">
        <h2 className="">Log In</h2>
        <div className="">
          <form action="#" method="post">
            <p>
              <label htmlFor="username">Username</label> <br />
              <input type="text" name="username" id="username" />
            </p>
            <p>
              <label htmlFor="password">Password</label> <br />
              <input type="password" name="password" id="password" />
            </p>
            <p>
              <button type="submit" className="btn">
                Log in
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <h2 className="">Registration</h2>
        <div className="">
          <form action="#" method="post">
            <p>
              <label htmlFor="username">Username</label> <br />
              <input type="text" name="username" id="username" />
            </p>
            <p>
              <label htmlFor="name">Name</label> <br />
              <input type="text" name="name" id="name" />
            </p>
            <p>
              <label htmlFor="gender">Gender</label> <br />
              <input
                type="radio"
                name="gender"
                id="gender"
                value={"male"}
              />{" "}
              Male{" "}
              <input type="radio" name="gender" id="gender" value={"female"} />{" "}
              Female{" "}
              <input type="radio" name="gender" id="gender" value={"other"} />{" "}
              Other
            </p>
            <p>
              <label htmlFor="address">Address</label> <br />
              <textarea
                name="address"
                id="address"
                rows={7}
                cols={30}
              ></textarea>
            </p>
            <p>
              <label htmlFor="phone">Phone</label> <br />
              <input type="text" name="phone" id="phone" />
            </p>
            <p>
              <label htmlFor="email">Email</label> <br />
              <input type="email" name="email" id="email" />
            </p>
            <p>
              <label htmlFor="password">Password</label> <br />
              <input type="password" name="password" id="password" />
            </p>
            <p>
              <button type="submit" className="btn">
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default IfElse;
