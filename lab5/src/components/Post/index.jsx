import { Card } from "../Card";

export const Post = (props) => {
  const deletehandler=(e)=>{
    e.target.parentElement.parentElement.remove();

  }
  return (
    <Card>

      <div>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        <button className="btn btn-danger" onClick={deletehandler}>Delete </button>
      </div>
      
    </Card>
  );
};
