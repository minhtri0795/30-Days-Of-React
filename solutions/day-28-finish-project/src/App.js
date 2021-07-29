import React, { useState } from "react";
import CreatPost from "./components/CreatPost/CreatPost";
import Post from "./components/Post/Post";
const App = () => {
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
  const [postList, setPostList] = useState([
    {
      id: 1,
      author: "Asabeneh Yetayeh",
      content:
        "30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.",
      time: dateFormat(time),
    },
    {
      id: 2,
      author: "Asabeneh Yetayeh",
      content:
        "30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. I hope this will help lots of students. JavaScript for Ever!",
      time: dateFormat(time),
    },
    {
      id: 3,
      author: "Asabeneh Yetayeh",
      content:
        "30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists and aspiring ML. Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",
      time: dateFormat(time),
    },
    {
      id: 4,
      author: "Asabeneh Yetayeh",
      content:
        "I have no idea about the coming challenge. It could be 30 days of HTML & CSS, ReactNative, Data Analysis or MERN.",
      time: dateFormat(time),
    },
  ]);

  const newPost = (post) => {
    const newPost = {
      id: postList.length + 1,
      author: "Minh Tri",
      content: post.content,
      time: post.time,
    };
    const newPostList = [...postList, newPost];
    setPostList(newPostList);
  };
  const deletePost = (id) => {
    const index = postList.findIndex((post) => post.id === id);
    const newPostList = [...postList];
    newPostList.splice(index, 1);
    setPostList(newPostList);
  };
  const updatePost = (updatePost) => {
    const index = postList.findIndex((post) => post.id === updatePost.id);
    const newPostList = [...postList];
    const dataUpdate = {
      id: updatePost.id,
      author: newPostList[index].author,
      content: updatePost.content,
      time: newPostList[index].time,
    };
    newPostList.splice(index, 1, dataUpdate);
    setPostList(newPostList);
  };
  return (
    <div className="App">
      <CreatPost newPost={newPost} />
      <div className="post-list">
        {postList.map((post) => {
          return (
            <Post post={post} deletePost={deletePost} updatePost={updatePost} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
