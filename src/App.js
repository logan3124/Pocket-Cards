import './App.scss';
import { HomePage } from './Pages/HomePage/HomePage.js';
import { BlackJackContainer } from './Pages/BlackJackContainer/BlackJackContainer.js'
import { Solitaire } from './Pages/Solitaire/Solitaire';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/BlackJack" component={BlackJackContainer} exact={true}/>
      <Route path="/Solitaire" component={Solitaire} exact={true} />
    </Router>
  );
}

export default App;
