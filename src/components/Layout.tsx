"use client";

import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
// import { Container } from "react-bootstrap";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* 상단 헤더 */}
      <HeaderLayout />
      {/* 추후 광고 영역 */}

      {/* 컨텐츠 영역 */}
      <div className="mt-5 mb-5">{children}</div>

      {/* 하단 네비게이션 */}
      <FooterLayout />
    </>
  );
};

export default Layout;
