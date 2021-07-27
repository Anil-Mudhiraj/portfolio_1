import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container app__container">
          <div className="row app_row">
            <div className="col-lg-3 ">
              <Sidebar />
            </div>
            <div className="col-lg-9 app-main-container">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route exact path="/resume">
                  <Resume />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
