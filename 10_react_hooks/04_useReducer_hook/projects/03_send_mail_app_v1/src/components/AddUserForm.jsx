import { useContext, useState } from "react";
import { UserContext } from "../store/user_storage";
import FlashMessageContext from "../store/flash_message_storage";
import css from "./css/AddUserForm.module.css";

function AddUserForm(){
  const {addUser} = useContext(UserContext);
  const {flashMessage, setFlashMessage} = useContext(FlashMessageContext);
  const [formData, setFormData] = useState({name: "", email: ""});

  function handleInputs(ev){
    const {name, value} = ev.target;
    setFormData({...formData, [name]: value});
  }

  function handleAddUserFormSubmit(ev){
    ev.preventDefault();

    addUser(formData.name, formData.email);
    setFlashMessage("*** user has been added successfully!");
    setFormData({name: "", email: ""});
  }

  return <section className={css["add-user-form-container"]}>
    {
      flashMessage &&
      <div className={css["flash-message"]}>{flashMessage}</div>
    }
    <form action="" method="post" onSubmit={handleAddUserFormSubmit}>
      <div className={css["form-group"]}>
        <input type="text" name="name" id="name" className={css["form-control"]} placeholder="enter user name here..." onChange={handleInputs} value={formData.name} />
      </div>
      <div className={css["form-group"]}>
        <input type="email" name="email" id="email" className={css["form-control"]} placeholder="enter user email here..." onChange={handleInputs} value={formData.email} />
      </div>
      <div className={css["form-group"]}>
        <button type="submit" className={css["add-user-btn"]}>Save</button>
      </div>
    </form>
  </section>
}

export default AddUserForm;