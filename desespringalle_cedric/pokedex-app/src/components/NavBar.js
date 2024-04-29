import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Nav = ({ onViewChange, onClose }) => {
  const handleFavoritesClick = () => {
    onViewChange("favorites");
  };

  return (
    <Navbar className="bg-primary">
      <Container className="ms-1 justify-content-start">
        <Navbar.Brand>
          <Button onClick={onClose}>
            <img
              src="https://imgs.search.brave.com/GoU0rOtI6dj4IysMWfi0Pg-w6VNWGrdH3fuoAqQDgRM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk4L0ludGVybmF0/aW9uYWxfUG9rJUMz/JUE5bW9uX2xvZ28u/c3Zn.svg"
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="Pokemon logo"
            />
          </Button>
        </Navbar.Brand>
        <Button className="fw-bold fs-3" onClick={handleFavoritesClick}>
          Favoris
        </Button>
      </Container>
    </Navbar>
  );
};

export default Nav;
