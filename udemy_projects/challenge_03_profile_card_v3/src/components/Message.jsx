import { useState } from "react";

function Message() {
  const [dispMsgBoxStatus, setDispMsgBoxStatus] = useState("none");

  const displayMessageBox = () => {
    return dispMsgBoxStatus === "none"
      ? setDispMsgBoxStatus("block")
      : setDispMsgBoxStatus("none");
  };

  return (
    <div className="message">
      <div className="buttons">
        <button className="primary" onClick={displayMessageBox}>
          Message
        </button>
        <button className="primary ghost">Following</button>
      </div>
      <div className="message-box" style={{ display: dispMsgBoxStatus }}>
        <form action="#" method="post">
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={10}
              placeholder="write your message here..."
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Message;
