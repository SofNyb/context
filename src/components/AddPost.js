import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppState";

const AddPost = ({ closePostModal }) => {
  const { addPost, users } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(false);

  const validateInputs = (e) => {
    e.preventDefault();

    if (!title || !body) return setError("Alle felter skal udfyldes.");

    addPost({ title, body, userId });
    closePostModal();
  };

  return (
    <>
      <form onSubmit={validateInputs}>
        <input
          type="text"
          placeholder="Skriv en titel her..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Skriv indholdet af din post her..."
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <br />
        <select
          id="users"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="" disabled>
            Vælg en bruger
          </option>
          {users.map((user) => (
            <option key={user.userId} value={user.userId}>
              {user.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button className="add" type="submit">
          Tilføj
        </button>
        <button type="submit" onClick={() => closePostModal()}>
          Annuller
        </button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddPost;
