import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
    /*<Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" component={About} />
      </Switch>
    </Router>*/
    <h1>Hello World</h1>
  );
}

export default App;