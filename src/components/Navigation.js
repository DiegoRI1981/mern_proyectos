import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar callapseOnSelect expand='lg' variant='dark' bg='secondary' >
            <Navbar.Brand as={NavLink} to='/'>Task Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='container text-center'>
                    <Nav.Link as={NavLink} to='/projects'>Proyects</Nav.Link>
                    <NavDropdown title='Admin'>
                        <NavDropdown.Item as={NavLink} to='/admin/users'>Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav >
                    <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                    <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                    <Nav.Link as={NavLink} to='/account'>My account</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}
