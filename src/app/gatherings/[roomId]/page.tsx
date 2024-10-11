"use client";
import { Container, ListGroup } from "react-bootstrap";
import GatherActionButtons from "@/components/GatherActionButtons";
import CostSummary from "@/components/CostSummary";
import TimelineItem from "@/components/TimelineItem";
import { FaMapPin, FaDollarSign, FaUsers } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { headerLayoutState } from "@/state/atom";
import { HeaderLayoutStateType } from "@/index";
import { useEffect } from "react";
import PlaceSummary from "@/components/PlaceSummary";

const headerLayoutStateInitValue: HeaderLayoutStateType = {
  backButtonUrlLink: "/gatherings",
};

const testTimeLineData = [
  {
    icon: <FaMapPin size="1.5em" />,
    text: "장소 변경: 명동 맛집",
    time: "14:30",
    event: undefined,
  },
  {
    icon: <FaMapPin size="1.5em" />,
    text: "장소 변경: 명동 맛집",
    time: "14:30",
    event: undefined,
  },
  {
    icon: <FaMapPin size="1.5em" />,
    text: "장소 변경: 명동 맛집",
    time: "14:30",
    event: undefined,
  },
  {
    icon: <FaMapPin size="1.5em" />,
    text: "장소 변경: 명동 맛집",
    time: "14:30",
    event: undefined,
  },
  {
    icon: <FaMapPin size="1.5em" />,
    text: "장소 변경: 명동 맛집",
    time: "14:30",
    event: undefined,
  },
];

export default function CreatePage() {
  const setHeaderLayoutState = useSetRecoilState(headerLayoutState);
  useEffect(() => {
    setHeaderLayoutState({ ...headerLayoutStateInitValue, title: "test" });
  }, []);

  return (
    <>
      <Container
        fluid="xxl"
        className="p-0 flex-grow-1 d-flex flex-column"
        style={{ height: "calc(100dvh - 58px)" }}
      >
        <PlaceSummary
          nextPlace="PC방"
          previousPlace="집"
          roomStatus="wait"
          currentPlace="명동 맛집"
        />
        <div className="flex-grow-1 overflow-y-auto p-3 bg-body-tertiary">
          <div className="d-flex mt-3 flex-column gap-1">
            {testTimeLineData.map((row, index) => (
              <TimelineItem key={index} {...row} />
            ))}
            <TimelineItem
              icon={<FaMapPin size="1.5em" />}
              text="장소 변경: 명동 맛집"
              time="14:30"
              event={undefined}
            />
            <TimelineItem
              icon={<FaDollarSign />}
              text="비용 추가: 식사 ￦100,000"
              time="15:15"
              event={undefined}
            />
            <TimelineItem
              icon={<FaUsers />}
              text="김철수 참석"
              time="15:30"
              event={undefined}
            />
          </div>
        </div>

        <GatherActionButtons />
      </Container>
    </>
  );
}
