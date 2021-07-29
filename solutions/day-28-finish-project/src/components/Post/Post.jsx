import React, { useRef, useState } from "react";
import {
  FiUser,
  FiEdit,
  FiTrash2,
  FiHeart,
  FiMessageSquare,
  FiShare,
} from "react-icons/fi";
import "./postStyle.scss";
function Post({ post, deletePost, updatePost }) {
  const [update, setUpdate] = useState(post.content);
  const [isUpdate, setIsUpdate] = useState(false);
  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(post.id);
  };
  const handleUpdate = (e) => {
    setUpdate(e.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
    setIsUpdate(!isUpdate);
    const updateContent = {
      id: post.id,
      content: update,
    };
    updatePost(updateContent);
  };
  return (
    <div className="post">
      <div className="user-infor">
        <FiUser id="user-icon" />
        <h3 className="author">{post.author}</h3>
      </div>
      <div className="post-text">
        {isUpdate ? "" : <p className="post-content">{post.content}</p>}
      </div>
      {isUpdate ? (
        <div className="update-post">
          <textarea onChange={handleUpdate} value={update} cols="70" rows="3">
            {update}
          </textarea>
          <button className="save-btn" onClick={onClick}>
            Save
          </button>
        </div>
      ) : (
        <div className="post-detail">
          <div>
            <FiEdit onClick={onClick} />
            <FiTrash2 onClick={handleDelete} />
          </div>
          <div className="post-activity">
            <FiMessageSquare />
            <FiHeart />
            <FiShare />
          </div>
          <strong className="time">{post.time}</strong>
        </div>
      )}
    </div>
  );
}
export default Post;
