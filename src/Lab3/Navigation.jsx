import {Container, Navbar, Nav, Button } from "react-bootstrap";
import useAuth from "./useAuth";


export default function Navigation() {
    const { isAuthenticated, toggleLogin, toggleLogout } = useAuth();

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Text >{isAuthenticated.status ? 
                    "Welcome, " + isAuthenticated.user.name : 
                    "Please log in"}
                </Navbar.Text>
                {/* <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">List</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
                <Nav className="ms-auto">
                    {isAuthenticated.status ? 
                        <Button variant="outline-light" onClick={() => toggleLogout()}>Logout</Button>
                        :<Button variant="outline-light" onClick={() => toggleLogin()}>Login</Button>
                    }   
                </Nav>
            </Container>
        </Navbar>
    )
}