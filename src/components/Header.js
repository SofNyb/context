import { useState } from "react";
import AddPost from "./AddPost";
import AddUsers from "./AddUsers";

const Header = () => {
  const [usersModalOpen, setUsersModalOpen] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);

  const openUsersModal = () => {
    setUsersModalOpen(true);
  };

  const closeUsersModal = () => {
    setUsersModalOpen(false);
  };

  const openPostModal = () => {
    setPostModalOpen(true);
  };

  const closePostModal = () => {
    setPostModalOpen(false);
  };

  return (
    <header>
      <h1>Bloggars</h1>
      <button onClick={openUsersModal}>Tilføj en bruger</button>
      {usersModalOpen && <AddUsers closeUsersModal={closeUsersModal} />}

      <button onClick={openPostModal}>Lav en post</button>
      {postModalOpen && <AddPost closePostModal={closePostModal} />}
    </header>
  );
};

export default Header;
