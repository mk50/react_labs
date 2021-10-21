
import { useState } from "react";
import { Viewpost } from "./components/Viewpost";
import { Addpostts } from "./components/Addpostts";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const handleDelete = () => {
    setPosts([]);
  };

  const Addposts = (newPost) => {
    setPosts([...posts, newPost]);
  };
  
  return (
      <div className="container">
        <div className="row">
         <div className="col-6">
         <Addpostts addPost={Addposts} />

         </div>
         <div className="col-6">
           <Viewpost
           posts={posts}
           onDelete={handleDelete}

           />
           
         </div>

        </div>

      </div>

      

    
  );
};
