import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Image/logo/logo-1.png';

const Header = () => {
    return (
        <div className="header-container fw-bold">
           <Navbar>
            <Container>
             <Navbar.Brand href="#home"><img style={{width:'40px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABHCAMAAAAKnSgVAAAAb1BMVEUAa0/uLkMFbFEAblD3KUL5J0LyLEP0K0IAcFAda0/rL0M+Zk7gNUQPbE/jNEStS0hnX0zVO0U3Z04taE5EZk6CWEq8RkfZOUXDQkaMVUp+WUuSVEmiT0heYk16W0zMPka2SEdUYk1wXUynTUicUUl6ZRbFAAAB30lEQVRoge2aDY6CMBCFi9OWUgQFBETX/73/GRc0GtdFO8MWG5O+C3x5M+3QeYFN3IhNmAt5rud6rueOzwWI8ngR5xEAvI2rirKqdSiECHW9bGL1Di6wVSZCKYOLpAz5tImGmSZwYa3FlXmV5PIrGUJGc2GThkGfwmA7oNpYrpqJXmonsUzG4iYZf4ptLafFONwofWzsQ5vlYgxuYsB2YKJjDBdqE7YF68g2V81e9fbW4x3pVCO48+cn+V6iodxjBNfY3GupKS02cmGNqfK50nuCYSNX9U+p3koTDJu4UGLttoZneMMmrsqQ3T3LHjemYPncFpdSZlKhTdyK4ldm1rhTCjfAD0sTF3+LOoncEpfhZuSNe7DELYhc9IE2cHMi9/jhfl31F0jXyN55xjxx7mTv/u4dzStH85nFlIFl73vEgPL91fa+v2xFeG+cLHIV3i+3+L5y9p4kfIIpmwri3b5xtC+ok5v9qL1L5kssU+v7IKbFMhhh/0Xs+0FMw2LzDdi9zDemI+Ub3eH6k13dJCp6goXPrw5pv+VQH0fMrzpyk/bkdfp7UFBIyifhuOO/8klRl4NSQnoeG233WRpwwaWuq7J4Sx57EUBS5HFeRP+Jnz8ob/dcz/Vcz3X0P8MPBlYXGoih2iYAAAAASUVORK5CYII=" alt="" /> <small className='text-white'>Bangladesh</small></Navbar.Brand>
        <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end" >
           <Link className="text-white mx-3" to='/login'><i className="fas fa-user"></i> Login</Link>
            <Link className="text-white" to='/register'><i className="fas fa-edit"></i> Register</Link>
               <Navbar.Text className="text-white mx-4">
              Signed in as: <a className="text-white"  href="#login">Mark Otto</a>
            </Navbar.Text>
           </Navbar.Collapse>
          </Container>
        </Navbar>
       <hr className='text-white' />
     <Navbar variant="light">
     <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Nav className="me-end mx-5">
            <Nav.Link className="text-white mx-3" to="/home">Home</Nav.Link>
          <Nav.Link className="text-white mx-3" to="/features">Tour</Nav.Link>
        <Nav.Link className="text-white mx-3" to="/pricing">Hotel</Nav.Link>
        <Nav.Link className="text-white mx-3" to="/blog">Blog</Nav.Link>
        <Nav.Link className="text-white mx-3" to="/contact">Contact</Nav.Link>
      </Nav>
     </Container>
            </Navbar>
            <h1 style={{ fontSize: '120px', fontWeight: '700', color: 'whitesmoke' }}>Discover</h1>
            <h4 style={{ color: 'white' }}>THE WORLD YOU HAVE NEVER SEEN</h4>
            <Button variant="primary" size="lg">
            Dummy
           </Button>{' '}
        </div>
    );
};

export default Header;