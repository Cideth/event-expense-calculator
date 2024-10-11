"use client";
import { Container, Image } from "react-bootstrap";
import { Gathering, GatheringList, GatheringNotificationEnum } from "@/index";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { HeaderLayoutStateType } from "@/index";
import { headerLayoutState } from "@/state/atom";
import { useEffect } from "react";
const testFriendData: GatheringList = [
  {
    roomId: "10",
    roomStatus: "wait",
    image: "",
    roomName: "술후딱먹고헤어지는방",
    participants: [],
    lastNotificate: null,
  },
];

const headerLayoutStateInitValue: HeaderLayoutStateType = {
  title: "모임 목록",
};

export default function Page() {
  const setHeaderLayoutState = useSetRecoilState(headerLayoutState);
  useEffect(() => {
    setHeaderLayoutState(headerLayoutStateInitValue);
  }, []);
  const router = useRouter();
  return (
    <Container fluid="xxl" className="p-0">
      <div
        className=" p-3 py-0 bg-body rounded shadow-sm"
        style={{ cursor: "pointer" }}
      >
        {testFriendData.map((row: Gathering) => (
          <div
            key={row.roomId}
            className="d-flex text-muted pt-3 pe-auto"
            onClick={() => router.push(`/gatherings/${row.roomId}`)}
          >
            <Image
              alt="profile image"
              className="bd-placeholder-img flex-shrink-0 me-2 rounded"
              src={row.image || "/test.png"}
              style={{
                width: "10vw",
                height: "10vw",
                maxWidth: "100px",
                maxHeight: "100px",
                minWidth: "50px",
                minHeight: "50px",
              }} // 반응형 스타일 적용
            />
            <div
              className="pb-3 mb-0 small lh-sm border-bottom w-100"
              style={{ minHeight: "3.5em", alignContent: "center" }}
            >
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark fs-4">{row.roomName}</strong>
              </div>
              <span
                className="d-block fs-5"
                // 높이를 일정하게 유지
              >
                {row.roomStatus || ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
