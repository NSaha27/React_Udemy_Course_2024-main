import { useContext, useState } from "react";
import Button from "./Button";
import Panel from "./Panel";
import LoginUserContext from './store/login-user-storage';

function Form({children}){
  const [formData, setFormData] = useState({username: "", password: ""});
  const [component, setComponent] = useState(null);
  const currentUser = useContext(LoginUserContext);

  function handleInputChange(ev){
    const {name, value} = ev.target;
    setFormData({...formData, [name]: value});
  }

  function handleLoginFormSubmit(ev){
    ev.preventDefault();

    if(formData.username === currentUser.username && formData.password === currentUser.password){
      setComponent(<Panel title="Welcome"><div className=""><p className="">Log in successful, welcome back {currentUser.username}!</p></div></Panel>);
    }
  }

  return component === null ? <Panel title="Login Form">
    <div className="">
      <form action="" method="post" onSubmit={handleLoginFormSubmit}>
        <div className="">
          <label htmlFor="username" className="">Username</label> <br />
          <input type="text" name="username" id="username" className="" value={formData.username} onChange={handleInputChange} />
        </div>
        <div className="">
          <label htmlFor="password" className="">Password</label> <br />
          <input type="password" name="password" id="password" className="" value={formData.password} onChange={handleInputChange} />
        </div>
        <div className="">
          <Button className="">Log in</Button>
        </div>
      </form>
    </div>
  </Panel>
  :
  component;
}

export default Form;