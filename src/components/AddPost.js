import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppState";

const AddPost = ({ closeModal }) => {
  const { addPost } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);

  const validateInputs = (e) => {
    e.preventDefault();

    if (!title || !body) return setError("Alle felter skal udfyldes.");

    addPost({ title, body });
    closeModal();
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
        <button className="add" type="submit">
          Tilføj
        </button>
        <button type="submit" onClick={() => closeModal()}>
          Annuller
        </button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddPost;
