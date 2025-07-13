import { useReducer, useState } from "react";

import './App.css';
import AddUserForm from "./components/AddUserForm";
import Chat from './components/Chat';
import ContactList from './components/ContactList';
import userReducer from "./components/userReducer";
import FlashMessageContext from "./store/flash_message_storage";
import { ActiveUserContext, UserContext } from "./store/user_storage";

const userList = [
    {
      id: 0,
      name: "Arnab",
      email: "arnab.roy24@example.com",
      messages: []
    },
    {
      id: 1,
      name: "Mitin",
      email: "mitin.saha732@example.com",
      messages: []
    },
    {
      id: 2,
      name: "Tista",
      email: "tista.dutta07@example.com",
      messages: []
    }
  ];

let nextUserId = userList.length;

function App() {
  const [currentUserList, userDispatcher] = useReducer(userReducer, userList);
  const [dispAddUserForm, setDispAddUserForm] = useState(false);
  const [activeUser, setActiveUser] = useState(0);
  const [flashMessage, setFlashMessage] = useState("");

  function addUser(name, email){
    const addUserAction = {
      type: "ADD_USER",
      payload: {
        id: nextUserId++,
        name: name,
        email: email,
        messages: []
      }
    };
    userDispatcher(addUserAction);
  }
  function sendMail(userId, message){
    const sendMailAction = {
      type: "SEND_MAIL",
      payload: {
        id: userId,
        message: message
      }
    };
    userDispatcher(sendMailAction);
  }
  function activateAddUserForm(){
    setDispAddUserForm(!dispAddUserForm);
  }
  function changeActiveUser(userId){
    setActiveUser(userId);
  }

  return (
    <>
      <div className="container">
        <UserContext.Provider value={{currentUserList, addUser, sendMail}}>
          <ActiveUserContext.Provider value={{activeUser, changeActiveUser}}>
            <FlashMessageContext.Provider value={{flashMessage, setFlashMessage}}>
              <ContactList activateAddUserForm={activateAddUserForm} />
              {
                dispAddUserForm ?
                <AddUserForm />
                :
                <Chat />
              }
            </FlashMessageContext.Provider>
          </ActiveUserContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
