import { Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Route path="/chats" component={ChatPage} />
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
