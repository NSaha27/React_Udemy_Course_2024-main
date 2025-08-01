import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";

import "bootstrap/dist/css/bootstrap.min.css";

function DisplayPost({ user, posts }) {
  {
    return (!user.length > 0 && !posts.length > 0) ? null :
    <>
    {
      posts.map(post => {
        return <div className="w-75 mx-auto p-4 rounded-2" style={{backgroundColor: "beige", boxShadow: "0 2px 10px #aaa"}} key={post.id}>
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
        <span className="">{user}</span>
        </a>{" "}
        </span>
        </div>
        <div className="w-100 py-2 post-details">
        <h4 className="">{post.title}</h4>
        <p className="">{post.desc}</p>
        </div>
        <div className="w-100 py-2 post-images">
        {post.images.length === 1 && (
          <div className="row">
          <div className="col-12"><img src={`images/${post.images[0]}`} alt="" className="img-fluid" /></div>
          </div>
        )}
        {post.images.length > 1 && (
          <div className="row">
          {post.images.map((image, indx) => {
            return <div className="col-6" key={indx}>
            <img src={`images/${image}`} alt="" className="" />
            </div>;
          })}
          </div>
        )}
        </div>
        <div className="w-100 py-2 d-flex flex-wrap justify-content-around align-items-center like-share-comments">
          <span className="d-flex flex-row">
            <AiOutlineLike style={{fontSize: "1.4rem", cursor: "pointer", marginRight: "0.4rem"}} />{" "}
            <span className="">2 likes</span>
          </span>
          <span className="d-flex flex-row">
            <FaRegCommentDots style={{fontSize: "1.4rem", cursor: "pointer", marginRight: "0.4rem"}} />{" "}
            <span className="">3 comments</span>
          </span>
          <span className="d-flex flex-row">
            <FaRegShareFromSquare style={{fontSize: "1.4rem", cursor: "pointer", marginRight: "0.4rem"}} />{" "}
            <span className="">1 share</span>
          </span>
        </div>
        </div>
      })
    }
    </>
    }
}

export default DisplayPost;
