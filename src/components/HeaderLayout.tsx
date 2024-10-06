import { Navbar, Container } from "react-bootstrap";

export default function HeaderLayout() {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">모임 정산 앱</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
