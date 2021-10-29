import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import LogIn from './components/Home/LogIn/LogIn';
import Register from './components/Home/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route exact path ='/home'>
            <Home></Home>
          </Route>
          <Route exact path ='/login'>
            <LogIn></LogIn>
          </Route>
          <Route exact path ='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
