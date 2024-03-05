import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function Header() {
  return (
    <>
      <Navbar className="navstyle">
        <Container>
          <div>
            <img
              className="logo1"
              alt=""
              src="logo.png"
              width="130"
              height="40"
            />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
