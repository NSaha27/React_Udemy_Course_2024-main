import { useContext, useState } from "react";
import { UserContext } from "../store/user-context";

function AddPost({setDisplayAddPostForm}){
  const { addPost } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    desc: "",
    images: null,
  });

  function handleAddPostInputChange(ev) {
    const { name, value, files } = ev.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files[0] || [] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleAddPostFormSubmit(ev) {
    ev.preventDefault();
    if (!formData.title.trim() || !formData.desc.trim()) {
      alert("*** Title and Description are required!");
      return;
    }
    addPost(formData.username, formData.title, formData.desc, formData.images);
    setDisplayAddPostForm(false);
    setFormData({
      username: "",
      title: "",
      desc: "",
      images: [],
    });
  }

  return (
    <div className="form-signin w-100 m-auto">
      <div className="">
        <div className="">
          <h1 className="h3 mb-3 fw-normal">Create a post</h1>
        </div>
        <div className="">
          <form action="#" method="post" onSubmit={handleAddPostFormSubmit}>
            <input type="hidden" name="username" value={formData.username} />
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                name="title"
                placeholder="name@example.com"
                value={formData.title}
                onChange={handleAddPostInputChange}
              />
              <label htmlFor="floatingInput">Post Title</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                name="desc"
                id="floatingTextarea2"
                style={{ height: "150px" }}
                value={formData.desc}
                onChange={handleAddPostInputChange}
              ></textarea>
              <label htmlFor="floatingTextarea2">Your Post</label>
            </div>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                name="images"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
                aria-label="Upload"
                onChange={handleAddPostInputChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon03"
              >
                Upload
              </button>
            </div>
            <div className="mt-1">
              <button type="submit" className="btn btn-primary ml-2">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPost;