import { Navbar, Nav, Button } from "react-bootstrap";
import useAuth from "./useAuth";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";


const Navigation = () => {
    const { isAuthenticated, toggleLogout , user } = useAuth();
    const navigate = useNavigate();

    const navToLogin = () => {
        navigate('/login');
    }
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="w-full px-4" style={{padding: "10px"}}>
            {/* Left */}
            <Navbar.Brand className="me-auto" style={{ fontWeight: 'bold', fontSize: '24px' }}>
                Orchid List
            </Navbar.Brand>

            {/* Center */}
            <Nav className="flex-1 justify-center">
                <Nav.Link as={RouterNavLink} to="/" style={{ color: 'white', fontWeight: 'bold' }}>Index</Nav.Link>
                <Nav.Link as={RouterNavLink} to="/naturals" style={{ color: 'white', fontWeight: 'bold' }}>Naturals</Nav.Link>
                <Nav.Link as={RouterNavLink} to="/contact" style={{ color: 'white', fontWeight: 'bold' }}>Contact</Nav.Link>
            </Nav>

            {/* Right */}
            <Nav className="ms-auto">
                <Navbar.Text className="px-3" style={{ color: 'white', fontWeight: 'bold' }}>
                    {isAuthenticated ? `Welcome, ${user.fullName}` : 'Please log in'}
                </Navbar.Text>
                {isAuthenticated ? 
                    <Button variant="outline-light" onClick={() => toggleLogout()}>Logout</Button>
                    :<Button variant="outline-light" onClick={navToLogin}>Login</Button>
                }   
            </Nav>
        </Navbar>
    )
}

export default Navigation;