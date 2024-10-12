"use client";
import { Button, Container, ListGroup } from "react-bootstrap";
import GatherActionButtons from "@/components/GatherActionButtons";
import TimelineItem from "@/components/TimelineItem";
import {
  FaMapPin,
  FaDollarSign,
  FaUsers,
  FaQuestion,
  FaPowerOff,
} from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { headerLayoutState, sidebarState } from "@/state/atom";
import { HeaderLayoutStateType, TimeLineEventType } from "@/index";
import { useEffect, useRef, useState } from "react";
import PlaceSummary from "@/components/PlaceSummary";
import { IoIosMenu } from "react-icons/io";
import GatherUserList from "./GatherUserList";
import GatherStartItem from "@/components/timeline/GatherStartItem";
import { LuPartyPopper } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";
import {
  MdAddLocationAlt,
  MdOutlineNoDrinks,
  MdOutlineShareLocation,
  MdWrongLocation,
} from "react-icons/md";
import { PiSneakerMoveFill } from "react-icons/pi";
import { IoEnterOutline, IoExit } from "react-icons/io5";
import { RiExchangeDollarLine, RiUserLocationLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { testTimeLineData } from "./testdata";
import { TbCurrencyDollarOff } from "react-icons/tb";

export default function CreatePage({
  timelineData,
}: {
  timelineData: Array<TimelineItemProps>;
}) {
  timelineData = testTimeLineData;
  const setHeaderLayoutState = useSetRecoilState(headerLayoutState);
  const setSidebarState = useSetRecoilState(sidebarState);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // 페이지가 로드되었을 때 헤더 상태 설정
    setHeaderLayoutState({
      backButtonUrlLink: "/gatherings",
      title: "test",
      additionalComponent: <GatherUserList />,
    });

    // 페이지를 벗어나거나 언마운트될 때 사이드바 상태 초기화
    return () => {
      setSidebarState(false);
      scrollToBottom();
    };
  }, [setHeaderLayoutState, setSidebarState]); // 의존성 배열에 상태 설정 함수 추가

  return (
    <>
      <Container
        fluid="xxl"
        className="p-0 flex-grow-1 d-flex flex-column"
        style={{ height: "calc(100dvh - 58px)" }}
        onClick={() => {
          setSidebarState(false);
        }}
      >
        <PlaceSummary
          nextPlace="PC방"
          // previousPlace="집"
          startTime="15:00"
          endTime="18:00"
          roomStatus="wait"
          currentPlace="명동 맛집"
        />
        <div className="flex-grow-1 overflow-y-auto p-3 bg-body-tertiary">
          <div className="d-flex mt-3 flex-column gap-1 ">
            {timelineData.map((row, index) => (
              <TimelineItemFactory key={index} {...row} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <GatherActionButtons />
      </Container>
    </>
  );
}

export interface TimelineItemProps {
  event_type: TimeLineEventType;
  text: string;
  time: string;
  event?: JSX.Element | undefined | any;
}

function TimelineItemFactory({
  event_type,
  text,
  time,
  event,
}: TimelineItemProps) {
  const eventItem = timeLineEvents.find((item) => item.type === event_type);

  if (eventItem) {
    return (
      <TimelineItem
        icon={eventItem.icon}
        text={text || eventItem.message}
        time={time}
        event={event}
      />
    );
  }

  // Default case for unknown event types
  return (
    <TimelineItem
      icon={<FaQuestion size="1.5em" />}
      text={text || "알 수 없는 이벤트"}
      time={time}
      event={event}
    />
  );
}
export const timeLineEvents: Array<{
  type: TimeLineEventType;
  message: string;
  icon: JSX.Element; // JSX.Element 타입을 사용하여 React 컴포넌트를 포함할 수 있도록 합니다.
}> = [
  {
    type: "GATHER_START",
    message: "모임 시작",
    icon: <LuPartyPopper size="1.5em" />,
  },
  {
    type: "GATHER_END",
    message: "모임 종료",
    icon: <FaPowerOff size="1.5em" />,
  },
  { type: "DRINKING", message: "음주", icon: <BiSolidDrink size="1.5em" /> },
  {
    type: "NO_DRINKING",
    message: "금주",
    icon: <MdOutlineNoDrinks size="1.5em" />,
  },
  {
    type: "PLACE_MOVE",
    message: "장소 이동",
    icon: <PiSneakerMoveFill size="1.5em" />,
  },
  {
    type: "PLACE_CHANGE",
    message: "장소 변경",
    icon: <MdOutlineShareLocation size="1.5em" />,
  },
  {
    type: "PLACE_ATTEND",
    message: "장소 참석",
    icon: <RiUserLocationLine size="1.5em" />,
  },
  {
    type: "PLACE_ADD",
    message: "장소 추가",
    icon: <MdAddLocationAlt size="1.5em" />,
  },
  {
    type: "ROOM_ENTER",
    message: "모임방 입장",
    icon: <IoEnterOutline size="1.5em" />,
  },
  { type: "ROOM_EXIT", message: "모임방 퇴장", icon: <IoExit size="1.5em" /> },
  {
    type: "COST_ADD",
    message: "비용 추가",
    icon: <FaDollarSign size="1.5em" />,
  },
  {
    type: "PLACE_DELETE",
    message: "장소 삭제",
    icon: <MdWrongLocation size="1.5em" />,
  },
  {
    type: "SETTLEMENT_CONFIRM",
    message: "정산 확정",
    icon: <GiConfirmed size="1.5em" />,
  },
  { 
    type : "COST_REMOVE",
    message: "비용 삭제",
    icon : <TbCurrencyDollarOff size="1.5em"/>
  },
  {
    type :"COST_CHANGE",
    message:  "비용 변경",
    icon :  <RiExchangeDollarLine size="1.5em" />

  }

];
