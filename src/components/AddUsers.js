import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppState";

const AddUsers = ({ closeUsersModal }) => {
  const { addUsers, nextUserId } = useContext(AppContext);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const validateInputs = (e) => {
    e.preventDefault();

    if (!name) return setError("Navn skal udfyldes.");

    addUsers({ userId: nextUserId, name });
    setName("");
    closeUsersModal();
  };

  return (
    <>
      <form onSubmit={validateInputs}>
        <input
          type="text"
          placeholder="Skriv dit navn her..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button className="add" type="submit">
          Tilføj
        </button>
        <button type="button" onClick={() => closeUsersModal()}>
          Annuller
        </button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddUsers;
