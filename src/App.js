import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Addpackage from './components/Database/Addpackage/Addpackage';
import Manageallorders from './components/Database/Manageallorders/Manageallorders';
import Myorder from './components/Database/Myorders/Myorder';
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
import Singlepackage from './components/Home/Singlepackage/Singlepackage';
import Orderplace from './components/Orderplace/Orderplace';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
            <Route exact path ='/about'>
            <About></About>
          </Route>          
          <Route exact path ='/hotels'>
            <Hotel></Hotel>
          </Route>
          <Route exact path ='/packages'>
            <Packages></Packages>
          </Route>
          <PrivateRoute path ='/singlepackage/:orderId'>
            <Singlepackage></Singlepackage>
          </PrivateRoute>
          <Route exact path ='/news'>
            <Newsandupdate></Newsandupdate>
          </Route>
          <Route exact path ='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path ='/orderplace'>
            <Orderplace></Orderplace>
          </Route>
          <Route exact path ='/myorder'>
            <Myorder></Myorder>
          </Route>
          <Route exact path ='/manageorders'>
            <Manageallorders></Manageallorders>
          </Route>
          <Route exact path ='/addpackage'>
            <Addpackage></Addpackage>
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
