import './App.css';
import { Switch, Route } from "react-router-dom"
import Register from "./pages/register/Register"

function App() {
  return (
    <div className="App App-header">
      
        {/* ROUTER PAGE */}
        <Switch>

          <Route path="/dashboard">
            <h1>dashboard</h1>
          </Route>

          <Route path="/login">
            <h1>Login page</h1>
          </Route>

          <Route path="/">
            <Register />
          </Route>

        </Switch>

    </div>
  );
}

export default App;
