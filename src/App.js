import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import { AppContext, AppProvider } from "./contexts/AppState";

function App() {
  return (
    <AppProvider>
      <Header />
      <AppContext.Consumer>
        {({ posts }) => (
          <>
            <main>
              <h3>
                Antal posts: <span>{posts.length} styks</span>
              </h3>
              <PostList />
            </main>
          </>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}

export default App;
