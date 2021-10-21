import { List } from "../Post";

export const Viewpost = (props) => {
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>Hello from the app</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.posts.map((p) => (
        <List title={p.title} description={p.description} />
      ))}
    </div>
  );
};