import './App.css';
import { Switch, Route } from "react-router-dom"
import Register from "./pages/register/Register"
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App App-header">
      
        {/* ROUTER PAGE */}
        <Switch>

          <Route path="/dashboard">
            <Dashboard />
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
