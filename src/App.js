import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Films from './views/Films/Films';
import Main from './views/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
