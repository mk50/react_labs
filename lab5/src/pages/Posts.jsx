import { useState } from "react";
import { ViewPosts } from "../components/ViewPosts";
import { AddPost } from "../components/AddPost";
import { useEffect } from "react";
import { useGetPosts } from "../hooks";




export const Posts = (props) => {

  
  const [posts, setPosts] = useState([]);
  const getPosts = useGetPosts();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  if (!posts.length) return <h1>Loading...</h1>;

  const handleDelete = () => {
    setPosts([]);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <h1>Posts-Page</h1>
      <div className="row">
        <div className="col-6">
          <AddPost addPost={addPost} />
        </div>
        <div className="col-6">
          <ViewPosts posts={posts} onDelete={handleDelete} />
        </div>
      </div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
