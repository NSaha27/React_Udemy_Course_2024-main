function Message() {
  return (
    <div className="message">
      <div className="buttons">
        <button className="primary" onClick={displayMessageBox}>
          Message
        </button>
        <button className="primary ghost">Follow</button>
      </div>
      <div className="message-box">
        <form action="#" method="post">
          <textarea
            name="message"
            id="message"
            className="form-control"
            placeholder="Enter you message here..."
          ></textarea>
          <button type="submit" className="btn primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
