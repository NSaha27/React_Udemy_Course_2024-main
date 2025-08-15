import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaRegEye } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";

import "bootstrap/dist/css/bootstrap.min.css";

function DisplayPost({ user, posts }) {
  {
    return !user.length > 0 && !posts.length > 0 ? null : (
      <>
        {posts.map((post) => {
          return (
            <React.Fragment key={post.id}>
              <div
                className="w-75 mx-auto p-4 rounded-2 mb-2"
                style={{
                  backgroundColor: "beige",
                  boxShadow: "0 2px 10px #aaa",
                }}
              >
                <div className="w-100 py-2 post-creator">
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
                  <h2 className="mb-4">{post.title}</h2>
                  <div className="mb-3">
                    <p>{post.body}</p>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="mb-3 d-flex flex-row justify-content-around">
                      {post.tags.map((tag, indx) => {
                        <span
                          className="bg-primary py-1 px-2 rounded"
                          key={indx}
                        >
                          {tag}
                        </span>;
                      })}
                    </div>
                  )}
                  <div className="mb-3">
                    <FaRegEye /> {post.views}
                  </div>
                </div>
                {post.images && (
                  <div className="w-100 py-2 post-images">
                    {post.images.length === 1 && (
                      <div className="row">
                        <div className="col-12">
                          <img
                            src={`images/${post.images[0]}`}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    )}
                    {post.images.length > 1 && (
                      <div className="row">
                        {post.images.map((image, indx) => {
                          return (
                            <div className="col-6" key={indx}>
                              <img
                                src={`images/${image}`}
                                alt=""
                                className=""
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
                <div className="w-100 py-2 d-flex flex-wrap justify-content-around align-items-center like-share-comments">
                  <span className="d-flex flex-row">
                    <AiOutlineLike
                      style={{
                        fontSize: "1.4rem",
                        cursor: "pointer",
                        marginRight: "0.4rem",
                      }}
                    />{" "}
                    <span className="">{post.reactions.likes} likes</span>
                  </span>
                  <span className="d-flex flex-row">
                    <AiOutlineDislike
                      style={{
                        fontSize: "1.4rem",
                        cursor: "pointer",
                        marginRight: "0.4rem",
                      }}
                    />{" "}
                    <span className="">{post.reactions.dislikes} dislikes</span>
                  </span>
                  {post.reactions.comments && (
                    <span className="d-flex flex-row">
                      <FaRegCommentDots
                        style={{
                          fontSize: "1.4rem",
                          cursor: "pointer",
                          marginRight: "0.4rem",
                        }}
                      />{" "}
                      <span className="">
                        {post.reactions.comments.length} comments
                      </span>
                    </span>
                  )}
                  {post.reactions.shares && (
                    <span className="d-flex flex-row">
                      <FaRegShareFromSquare
                        style={{
                          fontSize: "1.4rem",
                          cursor: "pointer",
                          marginRight: "0.4rem",
                        }}
                      />{" "}
                      <span className="">{post.reactions.shares} shares</span>
                    </span>
                  )}
                </div>
              </div>
              <div
                className="w-75 mx-auto p-3 mb-5"
                style={{
                  backgroundColor: "beige",
                  boxShadow: "0 2px 10px #aaa",
                }}
              >
                <form action="" method="post">
                  <div className="form-floating mb-2">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment against this post"
                      id="floatingTextarea"
                      style={{ minHeight: "75px" }}
                    ></textarea>
                    <label htmlFor="floatingTextarea">
                      Leave your comment here...
                    </label>
                  </div>
                  <button type="submit" className="btn btn-sm btn-dark ml-2">
                    Send
                  </button>
                </form>
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

export default DisplayPost;
