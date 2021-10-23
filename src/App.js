import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Details from './pages/Details';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/country/:id">
        <Details />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
