import { useContext, useState } from "react";
import FlashMessageContext from "../store/flash_message_storage";
import { ActiveUserContext, UserContext } from "../store/user_storage";
import css from "./css/Chat.module.css";

function Chat(){
  const {currentUserList, sendMail} = useContext(UserContext);
  const {activeUser} = useContext(ActiveUserContext);
  const {flashMessage, setFlashMessage} = useContext(FlashMessageContext);
  const [message, setMessage] = useState("");

  function handleInputs(ev){
    setMessage(ev.target.value);
  }

  function handleSendMailFormSubmit(ev){
    ev.preventDefault();

    sendMail(activeUser, message);
    setFlashMessage("*** email has been sent successfully!");
    setMessage("");
  }

  const activeUserDetails = currentUserList.find(user => user.id === activeUser) || currentUserList[0];

  return <section className={css["chat-form-container"]}>
    {
      flashMessage &&
      <div className={css["flash-message"]}>{flashMessage}</div>
    }
    <form action="" method="post" onSubmit={handleSendMailFormSubmit}>
      <div className={css["form-group"]}>
        <textarea name="message" id="message" className={css["form-control"]} placeholder={`enter message here...`} onChange={handleInputs} value={message}></textarea>
      </div>
      <div className={css["form-group"]}>
        <button type="submit" className={css["send-mail-btn"]}>Send mail to {activeUserDetails?.email}</button>
      </div>
    </form>
  </section>
}

export default Chat;