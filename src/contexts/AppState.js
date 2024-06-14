import { createContext, useReducer } from "react";

const appReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    }
    case "ADD_POST": {
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    }
    case "ADD_USER": {
      return {
        ...state,
        users: [
          ...state.users,
          { userId: action.payload.userId, name: action.payload.name },
        ],
        nextUserId: state.nextUserId + 1,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  posts: [
    {
      id: 1,
      title: "Første post",
      body: "Dette er det første post.",
      userId: 1,
    },
    {
      id: 2,
      title: "Anden post",
      body: "Disse posts er for at vise hardcoded initial state.",
      userId: 2,
    },
    {
      id: 3,
      title: "Tredje post",
      body: "Alle fire kan slettes, men kommer igen ved reload af browser.",
      userId: 1,
    },
    {
      id: 4,
      title: "Fjerde post",
      body: "Ved at tilføje en ny post, vil den blive vist øverst i listen, men forsvinder ved reload af browser.",
      userId: 4,
    },
  ],
  users: [
    {
      userId: 1,
      name: "Emma Nielsen",
    },
    {
      userId: 2,
      name: "Alexander Madsen",
    },
    {
      userId: 3,
      name: "Lucas Pedersen",
    },
    {
      userId: 4,
      name: "Isabella Andersen",
    },
  ],
  nextUserId: 5,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deletePost = (id) => {
    dispatch({
      type: "DELETE_POST",
      payload: id,
    });
  };

  const addPost = (post) => {
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addUsers = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  return (
    <AppContext.Provider
      value={{
        posts: state.posts,
        users: state.users,
        deletePost,
        addPost,
        addUsers,
        nextUserId: state.nextUserId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
