import "bootstrap/dist/css/bootstrap.min.css";

function Item({ topic }) {
  return (
    <li className="list-group-item p-3">
      <div className="topic">
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
        <p>{topic.conclusion}</p>
        <p>
          <h3>Give your remarks about this topic</h3>
          <p>
            <form action="#" method="post">
              <p>
                <label htmlFor="email">Your Email</label> <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email id here..."
                />
              </p>
              <p>
                <label htmlFor="remarks">Your Remarks</label> <br />
                <textarea
                  name="remarks"
                  id="remarks"
                  cols="30"
                  rows="7"
                  placeholder="enter your remarks here..."
                ></textarea>
              </p>
              <p>
                <button type="submit" className="btn btn-warning">
                  Send
                </button>
              </p>
            </form>
          </p>
        </p>
      </div>
    </li>
  );
}

export default Item;
