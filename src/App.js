import './App.scss';
import { HomePage } from './Pages/HomePage/HomePage.js';
import { Login } from './Pages/Login/Login.js';
import { Guest } from './Pages/Guest/Guest.js';
import { SignUp } from './Pages/SignUp/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Guest">
        <Guest />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
    </Router>
  );
}

export default App;
