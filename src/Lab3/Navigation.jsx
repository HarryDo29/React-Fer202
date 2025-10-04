import { Navbar, Nav, Button } from "react-bootstrap";
import useAuth from "./useAuth";
import { NavLink as RouterNavLink } from "react-router-dom";


const Navigation = () => {
    const { isAuthenticated, toggleLogin, toggleLogout } = useAuth();

    return(
        <Navbar bg="dark" variant="dark" style={{width: '100%', padding: "10px"}}
        className="d-flex align-items-center">
            {/* Left */}
            <Navbar.Brand className="me-auto">
                {isAuthenticated.status ? `Welcome, ${isAuthenticated.user.name}` : 'Please log in'}
            </Navbar.Brand>

            {/* Center */}
            <Nav className="mx-auto">
                <Nav.Link as={RouterNavLink} to="/">Index</Nav.Link>
                <Nav.Link as={RouterNavLink} to="/naturals">Naturals</Nav.Link>
                <Nav.Link as={RouterNavLink} to="/contact">Contact</Nav.Link>
            </Nav>

            {/* Right */}
            <Nav className="ms-auto">
                {isAuthenticated.status ? 
                    <Button variant="outline-light" onClick={() => toggleLogout()}>Logout</Button>
                    :<Button variant="outline-light" onClick={() => toggleLogin()}>Login</Button>
                }   
            </Nav>
        </Navbar>
    )
}

export default Navigation;