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
        posts: [action.payload, ...state.posts],
      };
    }
    case "SET_DARK_THEME": {
      return {
        ...state,
        darkTheme: action.payload,
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
    },
    {
      id: 2,
      title: "Anden post",
      body: "Disse posts er for at vise hardcoded initial state.",
    },
    {
      id: 3,
      title: "Tredje post",
      body: "Alle fire kan slettes, men kommer igen ved reload af browser.",
    },
    {
      id: 4,
      title: "Fjerde post",
      body: "Ved at tilføje en ny post, vil den blive vist øverst i listen, men forsvinder ved reload af browser.",
    },
  ],
  darkTheme: false,
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

  const setDarkTheme = (bool) => {
    dispatch({
      type: "SET_DARK_THEME",
      payload: bool,
    });
  };

  return (
    <AppContext.Provider
      value={{
        posts: state.posts,
        darkTheme: state.darkTheme,
        deletePost,
        addPost,
        setDarkTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
