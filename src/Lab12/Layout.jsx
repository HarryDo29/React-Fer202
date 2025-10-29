import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Navigation from "../Lab3/Navigation"

const Layout = () => {
    return (
        <Container>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </Container>
    )
}

export default Layout