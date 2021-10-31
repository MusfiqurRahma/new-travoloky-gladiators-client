import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Image/logo/logo-1.png';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const { user,logOut } = useAuth();
  return (
    <><Navbar bg="secondary" variant="light" sticky='top'   collapseOnSelect expand="lg">
       <Container>
       <Navbar.Brand to="/home"><img style={{marginRight:'40%'}} src={logo} alt="" /> </Navbar.Brand>
         <Navbar.Collapse className="justify-content-center">
            <Nav className='text-primary'>
               <Link className='text-light fw-bold mx-3'  to="/home">Home</Link>
            {
              user.email?<Link className="text-light fw-bold" to="/myorder">My Orders</Link>:''
            }
            {
              user.email?<Link className="text-light fw-bold mx-3" to="/manageorders">Manage Orders</Link>:''
            }
            {
              user.email?<Link className="text-light fw-bold mx-3" to="/addpackage">Add Package</Link>:''
            }      
            <Link className="text-light fw-bold mx-3" to="/news">News N Update</Link>
            {
                user.email? <button className='logOut' onClick={logOut}>Log Out</button>:<Link className="text-white mx-3" to='/login'><i className="fas fa-user"></i>Login</Link>
              }
            <Link className="text-white" to='/register'><i className="fas fa-edit"></i> Register</Link>
              {
                user.email ? <img style={{ width: '40px', borderRadius: '50px',marginLeft:'15px' }} src={user.photoURL} alt="" /> : <img style={{ width: '40px', borderRadius: '50px',marginLeft:'15px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnvWTZm8CrKxV_zBpTI2Gdvbmy2-Az8CgNw&usqp=CAU" alt="" />
                
              }    
            </Nav>                           
           </Navbar.Collapse>
         </Container>
       </Navbar>
        <div className="header-container">
            <h1 style={{ fontSize: '120px', fontWeight: '700', color: 'whitesmoke' }}>Discover</h1>
            <h4 style={{ color: 'white' }}>THE WORLD YOU HAVE NEVER SEEN</h4>
            <Button variant="primary" size="lg">
            See More
           </Button>{' '}
           </div> </>
    );
};
export default Header;