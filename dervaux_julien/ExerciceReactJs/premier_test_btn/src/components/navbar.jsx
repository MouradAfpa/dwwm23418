import React from 'react';
import { Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'




function Header() {

  return (
    <Navbar className='bg-black'>
    <Navbar.Brand className='text-white ms-3'>Header</Navbar.Brand>
    </Navbar>

  );
}

export default Header;