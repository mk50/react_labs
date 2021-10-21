import { useState } from "react";
import { Input } from "./../Input";


export const Addpostts = (props) => {
  const [title, setTitle] = useState("Please enter post title");
  const [description, setBody] = useState("Please enter post body");

  const handleSubmit = () => {
    console.log("Calling to backend service");
    props.addPost({ title, description });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Post</h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={description} setValue={setBody} label="description" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Post
      </button>
    </div>
  );
};
