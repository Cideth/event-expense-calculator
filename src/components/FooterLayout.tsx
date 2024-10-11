"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";
type TabType = "friends" | "gatherings" | "setting";

export default function FooterLayout() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<TabType>("friends");

  const excludedRegex = /^\/gatherings\/\d+$/;
  const excludedList = ["/login"];
  console.log(pathname);
  if (excludedList.includes(pathname) || excludedRegex.test(pathname)) {
    return null;
  } else {
  }

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
