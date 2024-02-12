import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { FaShoppingBag, FaQuestionCircle, FaChevronLeft } from 'react-icons/fa';

const styles = {
  label: {
    fontFamily: 'Open Sans',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#60646C',
  },
};

function Header(props) {
  const headerStyle = {
    width: '100%', 
    height: 'auto', 
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    background: '#F9F9FB40',
    padding: '10px', 
  };

  const deviceInfoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Navbar expand="lg" className="bg-light" style={headerStyle}>
      <Container>
        {/* Top Section (visible only on small mobile devices) */}
        <div className="d-lg-none">
          {/* Right Side */}
          <div style={deviceInfoStyle}>
            <FaChevronLeft size={20} className="mx-2" />
          </div>
        </div>

        {/* Middle Section (visible on all screens) */}
        <Navbar.Brand href="#" className="text-dark font-weight-bold text-center" style={{ fontSize: '2rem', marginTop: '10px' }}>
          {window.innerWidth < 992 ? '' : 'tickete'}
        </Navbar.Brand>

        {/* Bottom Section (visible on all screens) */}
        <Navbar.Collapse className="justify-content-center">
          <Nav className="text-center">
            {window.innerWidth < 576 ? ( // Display only on small mobile devices
              <Nav.Link href="#" style={styles.label}>
                <FaShoppingBag size={15} className='mx-2' />
                Checkout
              </Nav.Link>
            ) : (
              // Display only on larger screens
              <Nav.Link href="#" style={styles.label}>
                <FaShoppingBag size={15} className='mx-2' />
                Checkout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>

        {/* Help Icon on the Right */}
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {window.innerWidth < 576 ? ( // Display only on small mobile devices
              <Nav.Link href="#" style={styles.label}>
                <FaQuestionCircle className="mx-2" />
                Help
              </Nav.Link>
            ) : (
              // Display only on larger screens
              <Nav.Link href="#" style={styles.label}>
                <FaQuestionCircle className="mx-2" />
                Help
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
