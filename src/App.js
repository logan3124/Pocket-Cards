import './App.scss';
import { HomePage } from './Pages/HomePage/HomePage.js';
import { BlackJackContainer } from './Pages/BlackJackContainer/BlackJackContainer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/BlackJack" component={BlackJackContainer} exact={true}/>
    </Router>
  );
}

export default App;
