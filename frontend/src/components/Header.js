import { Link} from 'react-router-dom'
 import { LinkContainer } from 'react-router-bootstrap'
import { Button, Badge, Container, Navbar, Nav, NavDropdown,  } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { logout } from '../actions/userActions'
// import { ShoppingCartIcon } from '@heroicons/react/solid'

const Header = ({history}) => {
  //
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo} = userLogin

  const dispatch = useDispatch()

      
  const logoutHandler = () => {
    dispatch(logout())
    if(!userInfo){
      history.push('/')
    }
  }  

  

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <>
          <Container>
            <Navbar.Brand href="/">GreyCamp Co.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">

                <Nav.Link href="/cart">
                <Badge bg="danger"> {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}</Badge>
              
                  <i className="fas fa-shopping-cart">  Cart</i> 
                </Nav.Link>
                {userInfo ? (
                      <NavDropdown title={userInfo.name} id='username'>
                       
                         <LinkContainer to="/profile">
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                      
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                     
                        </NavDropdown>
                     
                ) : <Nav.Link href="/login">
                
                  <i className="fas fa-user"> Login</i>  
                
                </Nav.Link>}

                { userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Admin' id='adminmenu'>
                       
                  <LinkContainer to='/admin/userlist'>
                   <NavDropdown.Item>Users</NavDropdown.Item>
                 </LinkContainer>
                 <LinkContainer to='/admin/productlist'>
                   <NavDropdown.Item>Products</NavDropdown.Item>
                 </LinkContainer>
                 <LinkContainer to='/admin/orderlist'>
                   <NavDropdown.Item>Orders</NavDropdown.Item>
                 </LinkContainer>
                 </NavDropdown>

                )}
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </>
      </Navbar>
    </header>
  );
};

export default Header;
