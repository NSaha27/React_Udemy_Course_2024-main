import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";

import "bootstrap/dist/css/bootstrap.min.css";

function DisplayPost({ user, post }) {
  return (
    <div className="">
      <div className="w-100p py-2 post-creator">
        <span className="">
          <a
            href="#"
            className="d-block link-body-emphasis text-decoration-none"
          >
            {" "}
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle"
            />{" "}
          </a>{" "}
          <a href="#" className="text-decoration-none">
            {user}
          </a>
        </span>
      </div>
      <div className="w-100 py-2 post-details">
        <h4 className="">{post.title}</h4>
        <p className="">{post.desc}</p>
      </div>
      <div className="w-100 py-2 post-images">
        {post.images.length === 1 && (
          <div className="row">
            <div className="col-12">{post.images[0]}</div>
          </div>
        )}
        {post.images.length > 1 && (
          <div className="row">
            {post.images.map((image) => {
              <img src={`images/${image}`} alt="" className="col-6" />;
            })}
          </div>
        )}
      </div>
      <div className="w-100 py-2 d-flex flex-wrap justify-content-around align-items-center like-share-comments">
        <AiOutlineLike />
        <FaRegCommentDots />
        <FaRegShareFromSquare />
      </div>
    </div>
  );
}

export default DisplayPost;
