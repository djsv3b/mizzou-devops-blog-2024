import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../css/home.css";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const q = query(postsCollectionRef, orderBy("timestamp", "desc"));
      const data = await getDocs(q);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postsCollectionRef]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPostList(postLists.filter((post) => post.id !== id)); // Remove post from UI after delete
  };

  return (
    <div className="home-page">
      {postLists.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <div className="post-title">
                <h1>{post.title}</h1>
              </div>
              <div className="delete-post">
                {/* Only author can delete post */}
                {isAuth && auth.currentUser && post.author.id === auth.currentUser.uid && (
                  <button onClick={() => deletePost(post.id)}>&#128465;</button>
                )}
              </div>
            </div>
            <div className="post-content">{post.post}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
