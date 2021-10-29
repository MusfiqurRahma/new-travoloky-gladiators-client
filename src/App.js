import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Hotel from './components/Home/Hotel/Hotel';
import LogIn from './components/Home/LogIn/LogIn';
import Newsandupdate from './components/Home/Newsandupdates/Newsandupdate';
import Notfound from './components/Home/Notfound/Notfound';
import Packages from './components/Home/Packages/Packages';
import Register from './components/Home/Register/Register';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
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
          <Route exact path ='/hotel'>
            <Hotel></Hotel>
          </Route>
          <Route exact path ='/packages'>
            <Packages></Packages>
          </Route>
          <Route exact path ='/news'>
            <Newsandupdate></Newsandupdate>
          </Route>
          <Route exact path ='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path ='/about'>
            <About></About>
          </Route>
          <Route exact path ='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
