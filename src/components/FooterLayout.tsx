import { useState } from "react";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
type TabType = "friends" | "gatherings" | "setting";

export default function FooterLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("friends");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Container>
        <Nav className="w-100 justify-content-around">
          <Link href="/friends" passHref legacyBehavior>
            <Nav.Link
              active={activeTab === "friends"}
              onClick={() => handleTabClick("friends")}
            >
              친구
            </Nav.Link>
          </Link>
          <Link href="/gatherings" passHref legacyBehavior>
            <Nav.Link
              active={activeTab === "gatherings"}
              onClick={() => handleTabClick("gatherings")}
            >
              모임
            </Nav.Link>
          </Link>
          <Link href="/setting" passHref legacyBehavior>
            <Nav.Link
              active={activeTab === "setting"}
              onClick={() => handleTabClick("setting")}
            >
              설정
            </Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
