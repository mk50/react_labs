import { List } from "./components/List";

export const App = () => {
  const posts = [
    { title: "first list", decription: "my list one" },
    { title: "second list", decription: "my list one" },
    { title: "third list", decription: "my list one" },
    { title: "forth list", decription: "my list one" },
    { title: "forth list", decription: "my list one" },
    { title: "forth list", decription: "my list one" },
   
  ];
  return (
    <div>
      <h1>Hello from the app</h1>

      {}

      {posts.map((p) => (
        <List title={p.title} decription={p.decription} />
      ))}

    </div>
  );
};
