"use client";
import { Container, Image } from "react-bootstrap";
import { FriendList, Friend } from "@/index";
import { useRouter } from "next/navigation";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "친구목록",
//   description: "친구목록 표시",
// };

const testFriendData: FriendList = [
  {
    statusMessage: "",
    id: "1",
    image: null,
    name: "친구1",
  },
  {
    statusMessage: "",
    id: "2",
    image: null,
    name: "친구1",
  },
];

export default function FriendsPage() {
  const router = useRouter();
  let isClicked: NodeJS.Timeout;
  return (
    <Container fluid="xxl" className="p-0">
      <div
        className=" p-3 py-0 bg-body rounded shadow-sm"
        style={{ cursor: "pointer" }}
      >
        {testFriendData.map((row: Friend) => (
          <div key={row.id} className="d-flex text-muted pt-3 pe-auto">
            <Image
              alt="profile image"
              className="bd-placeholder-img flex-shrink-0 me-2 rounded"
              src={row.image || "/test.png"}
              style={{
                width: "10vw",
                height: "10vw",
                maxWidth: "100px",
                maxHeight: "100px",
                minWidth: "30px",
                minHeight: "30px",
              }} // 반응형 스타일 적용
            />
            <div
              className="pb-3 mb-0 small lh-sm border-bottom w-100"
              style={{ minHeight: "3.5em", alignContent: "center" }}
            >
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark fs-4">{row.name}</strong>
              </div>
              <span
                className="d-block fs-5"
                // 높이를 일정하게 유지
              >
                {row.statusMessage || "11"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
