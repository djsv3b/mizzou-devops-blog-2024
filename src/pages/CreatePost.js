import React from 'react';
import '../css/post.css'; 
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";


function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    if (!auth.currentUser) {
      console.error("User not authenticated");
      return;
    }
  
    try {
      await addDoc(postsCollectionRef, {
        title,
        post,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        timestamp: serverTimestamp()
      });
      navigate("/");
    } catch (err) {
      console.error("Error creating post: ", err);
    }
  };
  

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]); 

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>Create A Post</h1>
        <div className="inputGroup">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => setPost(event.target.value)}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
