import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
  metadata?: Metadata;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* 상단 헤더 */}

      <HeaderLayout />

      {/* 추후 광고 영역 */}

      {/* 컨텐츠 영역 */}
      <div className="">{children}</div>

      {/* 하단 네비게이션 */}
      {/* 로그인 안했을때는 아래 애가 보이면 안됨. */}

      <FooterLayout />
    </>
  );
};

export default Layout;
