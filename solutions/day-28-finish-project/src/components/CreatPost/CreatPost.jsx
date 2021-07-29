import React, { useState } from "react";
import "./creatPostStyle.scss";
function CreatPost(props) {
  const [newpost, setNewpost] = useState("");
  const newPost = props.newPost;
  const time = new Date();
  const dateFormat = (time) => {
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const year = time.getFullYear();
    const month = monthList[time.getMonth()];
    const day = time.getDate();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    return `${day} ${month} ${year} ${hour}:${minutes}:${second}`;
  };
  const handlePost = (e) => {
    setNewpost(e.target.value);
  };
  const submitPost = (e) => {
    e.preventDefault();
    const newPostData = {
      time: dateFormat(time),
      content: newpost,
    };
    newPost(newPostData);
    setNewpost("");
  };
  return (
    <div className="creat-post">
      <input onChange={handlePost} type="text" value={newpost} />
      <button onClick={submitPost}>Add post</button>
    </div>
  );
}

export default CreatPost;
