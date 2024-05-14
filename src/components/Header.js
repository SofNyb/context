import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppState";
import AddPost from "./AddPost";

const Header = () => {
  const { darkTheme } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header className={`${darkTheme ? "dark" : ""}`}>
      <h1>Bloggars</h1>
      <button onClick={() => setOpenModal(!openModal)}>Lav en post</button>
      {openModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;
