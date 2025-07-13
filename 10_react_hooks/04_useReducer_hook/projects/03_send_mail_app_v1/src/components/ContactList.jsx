import { useContext } from "react";
import { ActiveUserContext, UserContext } from "../store/user_storage";
import Button from "./Button";
import css from "./css/ContactList.module.css"

function ContactList({activateAddUserForm}){
  const {currentUserList} = useContext(UserContext);
  const {activeUser, changeActiveUser} = useContext(ActiveUserContext);

  return <section className={css["contact-list-container"]}>
    <ul className="">
      {
        currentUserList.length > 0 ?
          currentUserList.map(user => {
            return <li className="" key={user.id}>
              <Button onBtnClick={() => {
                changeActiveUser(user.id)
              }}>{activeUser === user.id ? <b>{user.name}</b> : user.name}</Button>
            </li>
          })
          :
          <li className="">No user exists</li>
      }
      <li className="">
        <Button onBtnClick={() => activateAddUserForm()}>Add user</Button>
      </li>
    </ul>
  </section>
}

export default ContactList;