import { useContext } from "react";
import { AppContext } from "../contexts/AppState";

const PostItem = ({ post: { title, id, body, userId, name } }) => {
  const { deletePost, users } = useContext(AppContext);

  const user = users.find((user) => user.userId === userId);

  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Skrevet af: {user ? user.name : name}</p>
      <div>
        <i className="fas fa-edit"></i>
        <i className="fas fa-trash" onClick={() => deletePost(id)}></i>
      </div>
    </li>
  );
};

export default PostItem;
