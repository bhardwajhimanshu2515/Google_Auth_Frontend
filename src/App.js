import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Header from "./shared/header";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
