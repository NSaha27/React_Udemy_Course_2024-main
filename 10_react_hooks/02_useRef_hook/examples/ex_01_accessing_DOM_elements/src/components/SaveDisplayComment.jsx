import { useRef, useState } from "react";

function SaveDisplayComment(){
  const [comment, setComment] = useState({});
  const commentRef = useRef();

  function handleInput(event){
    const {name, value} = event.target;
    setComment(curComment => {
      const newComment = {...curComment, [name]: value};
      return newComment;
    })
  }

  function handleSaveComment(event){
    event.preventDefault();
    commentRef.current = comment;
  }

  return <div className="">
    <div className="display-comment">
      <table className="">
        <tbody>
          <tr>
            <th>Commented by: </th>
            <td ref={commentRef}>{commentRef.current ? commentRef.current.name : null}</td>
          </tr>
          <tr>
            <th>Current comment: </th>
            <td>{commentRef.current && commentRef.current.name === comment.name ? comment.comment : null}</td>
          </tr>
          <tr>
            <th>Previous comment: </th>
            <td ref={commentRef}>{commentRef.current ? commentRef.current.comment : null}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="save-comment">
      <form action="" className="post" onSubmit={handleSaveComment}>
        <p>
          <label htmlFor="name">Name</label> <br />
          <input type="text" name="name" id="name" onChange={handleInput} />
        </p>
        <p>
          <label htmlFor="comment">Comment</label> <br />
          <textarea name="comment" id="comment" rows={10} cols={35} onChange={handleInput}></textarea>
        </p>
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    </div>
  </div>

}

export default SaveDisplayComment;