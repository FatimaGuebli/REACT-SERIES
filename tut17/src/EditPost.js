import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, []);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit post</h2>
          <form
            className="newPostForm"
            on
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="postTitle">Title : </label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button
              type="submit"
              onClick={() => {
                handleEdit(post.id);
              }}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disapointing.</p>
          <p>
            <Link to="/">Visit Our HomePage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
