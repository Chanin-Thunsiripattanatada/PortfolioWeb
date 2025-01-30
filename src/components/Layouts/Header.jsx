import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/images/c.png';
import { FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <><header>
      <Navbar bg="dark" variant="dark" expand="md" className="py-3">
        <Container>
          <Navbar.Brand to="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="img-fluid rounded-circle" />
          </Navbar.Brand>
          <Navbar.Brand>
            <br />
            <div className='text-white' style={{ fontSize: "16px" }}>
              <pre>
                Chanin Thunsiripattanatada<br />
                Personal
              </pre>
            </div>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/Chanin-Thunsiripattanatada">
              <FaGithub size={50} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header></>
  );
}

export default Header;
