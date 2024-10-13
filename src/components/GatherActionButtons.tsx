"use client";
import { Card, Button } from "react-bootstrap";
import {
  FaMapPin,
  FaDollarSign,
  FaUsers,
  FaPlus,
  FaQuestion,
  FaPowerOff,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
import { BiSolidDrink } from "react-icons/bi";
import { MdOutlineNoDrinks } from "react-icons/md";
import { timeLineEvents } from "@/app/gatherings/[roomId]/page";
import { RoomStatus, TimeLineEventType } from "..";
import { RiUserLocationLine, RiUserUnfollowLine } from "react-icons/ri";

const colors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
];

type ActionButtonType =
  | "GATHER_START"
  | "PLACE_EDIT"
  | "COST_EDIT"
  | "CHECK_IN_OUT"
  | "SETTLEMENT_CHECK"
  | "GETHER_END"
  | "DRINKING_YES_NO";

const actionButtons: {
  [key in ActionButtonType]: { icon: JSX.Element; label: string };
} = {
  GATHER_START: { icon: <FaPlus />, label: "모임 시작" },
  PLACE_EDIT: { icon: <FaMapPin />, label: "장소 편집" },
  COST_EDIT: { icon: <FaDollarSign />, label: "비용 편집" },
  CHECK_IN_OUT: { icon: <FaUsers />, label: "모임 참석" },
  SETTLEMENT_CHECK: { icon: <FaDollarSign />, label: "비용 확인" },
  GETHER_END: { icon: <FaPowerOff />, label: "모임 종료" },
  DRINKING_YES_NO : { icon: <BiSolidDrink />, label: "����� 여부" }
};

const hostActionButtonsInfo: { [key in RoomStatus]: ActionButtonType[] } = {
  wait: [
    "GATHER_START", // 모임 시작
    "COST_EDIT",
    "PLACE_EDIT",
  ],
  start: [
    "GETHER_END", // 모임 종료
    "PLACE_EDIT", // 장소 관리
    "COST_EDIT",// 비용 관리
  ],
  end: ["SETTLEMENT_CHECK"],
};

const attendeeActionButtonsInfo : { [key in RoomStatus]: ActionButtonType[] } = {
  wait: [
    "CHECK_IN_OUT",
  ],
  start: [
    "GETHER_END", // 모임 종료
    "PLACE_EDIT", // 장소 이동
    "CHECK_IN_OUT",
  ],
  end: ["SETTLEMENT_CHECK"],
};

// gatheractionbuttons props = RoomStatus, IsAttendPlace, IsAdmin
type GatherActionbuttonProps = {
  roomStatus: RoomStatus;
  isAttendPlace: boolean;
  isHost: boolean;
};

export default function GatherActionButtons({
  roomStatus,
  isAttendPlace,
  isHost,
}: GatherActionbuttonProps) {
  const [isExpanded, setExpandedButton] = useState(false);
  const buttonsArr = managerActionsButtonInfo.wait;
  {
    /*
            1. 모임장이 볼 수 있는 버튼
              - 장소 변경
            2. 모임 참가자가 볼 수 있는 버튼

            이 페이지에 들어왔을때 내가 모임장인지 모임원인지 상태값을 가져올거임
            그랬을때 
            분기를 처리해서 
            1. 모임장 Arr 
            2. 모임원 Arr 

            UI 관련 
            현재 모임 종료 여부에 따라서도 보여줘야할게 달라질 것같음

            종료 및 상태 + 관리자 여부 에 따라서 보여지는게 달라짐
            1. 상태
            - 대기
            - 진행중
            - 종료

            2. 회원타입
            - 관리자(모임장)
              1. 장소 관리
                - 장소 추가
                - 장소 삭제
                - 장소 변경
                - 장소 이동
              2. 비용 설정
                - 현재 장소 비용 추가
                - 전체 비용 추가
              3. 모임 종료 설정
            - 참석자


            모임이 대기 상태일때 모임장이 가능한 액션
            1. 모임 시작
            2. 장소 변경
            3. 전체 비용 추가 (기본료 개념, 장소 대여비 등)
            모임이 대기 상태일때 참석자가 가능한 액션
            - 없음
            모임이 시작 상태일때 모임장이 가능한 액션
            1. 모임 종료
            2. 장소 이동
            3. 비용 추가
            - 전체 비용 추가
            - 현재 장소 비용 추가
            4. 친구 초대


            push 알림을 보내야 하는 Event type은 뭐가있을까
            1. 중요도 순
            - 모임 초대
            - 장소 변경(모임 상태가 대기 상태일 경우)
            - 
  */
  }

  return (
    <div className="px-3 pb-3 border rounded-top">
      <div
        className="text-center py-1 "
        onClick={(e) => {
          setExpandedButton(!isExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          style={{
            rotate: `${isExpanded ? 180 : 0}deg`,
            transition: "rotate 0.3s ease-in-out",
          }}
        >
          <path
            fill="currentColor"
            d="M12.75 20a.75.75 0 0 1-1.5 0v-9.25H6a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28h-5.25z"
          ></path>
        </svg>
      </div>
      <Card.Body
        className={`row ${isExpanded ? "" : "overflow-hidden"}`}
        style={{
          maxHeight: isExpanded ? "1000px" : "88.789px",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {buttonsArr.map((event_type, index) => (
          <ActionButtonFactory event_type={event_type} key={index} />
        ))}
      </Card.Body>
    </div>
  );
}

function getCheckInOutButton(isCheckedIn: boolean): { icon: JSX.Element; label: string } {
  return isCheckedIn
    ? { icon: <RiUserUnfollowLine />, label: "체크아웃" } 
    : { icon: <RiUserLocationLine />, label: "체크인" };
}
function getDrinkYesNoButton(isDrinking: boolean): { icon: JSX.Element; label: string } {
  return isDrinking
    ? { icon: <BiSolidDrink />, label: "금주" }  
    : { icon: <MdOutlineNoDrinks />, label: "음주" };
}

function getActionHandler(event_type: ActionButtonType, isHost: boolean, isAttendPlace: boolean) {
  const eventItem = timeLineEvents.find((item) => item.type === event_type);

  if (eventItem) {
    if (isHost) {
      return eventItem.hostHandler;
    } else if (isAttendPlace) {
      return eventItem.attendeePlaceHandler;
    } else {
      return eventItem.attendeeHandler;
    }
  }

  // Default case for unknown event types
  console.error(`Unknown event type: ${event_type}`);
  return null;
}


function QuickActionButton({ icon, text }) => (
  <div className="col-4 col-sm-3  p-1 text-center ">
    <Button variant="outline-secondary" className="rounded-circle p-3 mb-2">
      {icon}
    </Button>
    <div className="small">{text}</div>
  </div>
);

function ActionButtonFactory({ event_type, event }: any) {
  console.log(event_type);
  const eventItem = timeLineEvents.find((item) => item.type === event_type);

  if (eventItem) {
    return (
      <QuickActionButton
        icon={eventItem.icon}
        text={eventItem.message || eventItem.message}
      />
    );
  }

  // Default case for unknown event types
  console.error(`Unknown event type: ${event_type}`);
  return (
    <QuickActionButton
      icon={<FaQuestion size="1.5em" />}
      text={"알 수 없는 이벤트"}
    />
  );
}
