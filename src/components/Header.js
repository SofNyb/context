import { useState } from "react";
import AddPost from "./AddPost";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header>
      <h1>Bloggars</h1>
      <button onClick={() => setOpenModal(!openModal)}>Lav en post</button>
      {openModal && <AddPost closeModal={closeModal} />}
    </header>
  );
};

export default Header;
