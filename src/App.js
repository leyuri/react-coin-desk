import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ExchangesPage from './pages/ExchangePage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/exchanges">
            <ExchangesPage />
          </Route>
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
