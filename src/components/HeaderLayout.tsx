"use client";
import { Navbar, Container } from "react-bootstrap";
import { usePathname, useRouter } from "next/navigation";
/*
  1. 로그인 하기 전에는 footer가 표시되면 안됨
  2. 로그인 한 이후
    - 친구 목록에서는 Nav 상단 우측에 친구 검색, 친구 추가 버튼이 있어야함
    - 모임 목록에서는 Nav 상단 우측에 검색, 필터링 버튼이 있어야함
    - 모임 목록에서는 floating button 필요함 -> 모임 추가용 (이거는 그냥 알아서 추가 가능)
    - 설정 페이지에서는 그냥 제목만 표시되면 됨
  공통으로 처리해야할 사항
  - Nav에서는 페이지마다 타이틀 값을 가져와서 표시해줘야함. ex) 카카오톡에서 탭별 클릭시 상단에 표시되는 제목 변경 되듯이

  고민이
  1. Layout을 몇개 더 만들어서 그걸 경로값을 받아서 case 처리를 한다
  2. Layout에서 그냥 경로값을 받아서 case 마다 component를 추가를 한다
  - 필수적으로 로그인 하기 전에 footer가 표시되면 안되니까 components/Layout.tsx 에서는 무조건 분기처리가 필요


*/

export default function HeaderLayout() {
  const router = useRouter();
  const excludeBackbuttonPathRegex = /^\/[^\/]+\/[^\/?]+.*$/;
  const pathname = usePathname();
  const showBackButton = excludeBackbuttonPathRegex.test(pathname);

  console.log(`Show Back Button: ${showBackButton}`);

  return (
    <Navbar bg="primary" variant="dark" className="position-sticky top-0 z-3 ">
      <Container className="justify-content-start mx-1">
        {showBackButton && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.back();
            }}
          >
            <path
              fill="#ffffff"
              d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z"
            />
          </svg>
        )}
        <Navbar.Brand>{"모임 정산 앱"}</Navbar.Brand>
        {/* if 경로가 뭐다 -> 무슨 컴포넌트 추가 */}
      </Container>
    </Navbar>
  );
}
