import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:id">
            <DetailPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
