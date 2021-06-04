import React, { useContext } from "react";
import "./Navbar.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as
  
  Router, 
  Switch,
   Route,
    Link, 
    useParams } 
  
  from "react-router-dom";
import { userContext } from "../../App";


const Navbaar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContext);

  const {name,email} = loggedInUser;

  let { id } = useParams();

  return (
    <Navbar className="bg-transparent navbar-style" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-style">
          <Link className='link' to='/'>    Ride    </Link>
          <br/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
   
            {
              email ? ( <> <span className="p-2 text-danger"> {name || email} </span>
                <Button variant="danger" className="Nav-Btn">
                <Link className="link text-white" onClick={() => setLoggedInUser({})}>Log out</Link>
                </Button>    
               </>
              ) : (
                <Button variant="danger" className="nav-btn">
                <Link className="link text-white" to='/login'>Log In</Link>
                </Button>
              )
            }
            {/* <Button variant="danger" className="nav-btnp">
            <Link className="link text-white" to='/login'>Log In</Link>
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbaar;
