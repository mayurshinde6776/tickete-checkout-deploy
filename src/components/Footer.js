import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaHeart, FaCircle } from 'react-icons/fa';

const styles = {
  loveIcon: {
    color: 'red',
    marginRight: '5px',
  },
  dotIcon: {
    color: 'white',
    marginLeft: '5px',
    fontSize: '0.5rem',
  },
  customLink: {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#ADB1B8',
  },
  
};

function Footer(props) {
  return (
    <Navbar fixed="" bg="dark" variant="dark" style={{ background: '#000000' }}>
      <Container >
        {/* Tickete Heading and Navigation Links */}
        <div className="d-flex flex-column justify-content-center align-items-left">
        <Navbar.Brand
  href="#"
  className="text-light font-weight-bold m-2 ml-0" style={{  color: '#FFFFFF', fontSize:'20px' }}>
  tickete
</Navbar.Brand>
<div className="d-flex flex-row flex-wrap justify-content-left gap-4">
  <Nav.Link href="#" className={`text-light p-2 mb-1 ${styles.customLink}`}>
    Made with <FaHeart style={{ ...styles.loveIcon, marginLeft: '5px' }} />
  </Nav.Link>
  <Nav.Link href="#" className={`text-light p-2 mb-1 ${styles.customLink}`}>
    <FaCircle style={{ ...styles.dotIcon, marginLeft: '5px', marginRight: '5px' }} />
    Privacy Policy
  </Nav.Link>
  <Nav.Link href="#" className={`text-light p-2 mb-1 ${styles.customLink}`}>
    <FaCircle style={{ ...styles.dotIcon, marginLeft: '5px', marginRight: '5px' }} />
    Terms of Usage
  </Nav.Link>
  <Nav.Link href="#" className={`text-light p-2 mb-1 ${styles.customLink}`}>
    <FaCircle style={{ ...styles.dotIcon, marginLeft: '5px', marginRight: '5px' }} />
    Cancellation Policy
  </Nav.Link>
  <Nav.Link href="#" className={`text-light p-2 mb-1 ${styles.customLink}`}>
    <FaCircle style={{ ...styles.dotIcon, marginLeft: '5px', marginRight: '5px' }} />
    Sitemap
  </Nav.Link>
</div>

        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
