import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <>
            <Header></Header>
            <div className="app__body">
              <Sidebar></Sidebar>

              <Switch>
                <Route path="/room/:roomId">
                  <Chat></Chat>
                </Route>
                <Route path="/"></Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
