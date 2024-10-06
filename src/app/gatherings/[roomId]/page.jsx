import { Container, ListGroup } from "react-bootstrap";
import GatherActionButtons from "@/components/GatherActionButtons";
import CostSummary from "@/components/CostSummary";
import TimelineItem from "@/components/TimelineItem";
import { FaMapPin, FaDollarSign, FaUsers } from "react-icons/fa";

const TimelineData = [];

export default function CreatePage() {
  return (
    <Container
      fluid="xxl"
      className="p-0 flex-grow-1 d-flex flex-column"
      style={{ height: "calc(100vh - 96px)" }}
    >
      <CostSummary />
      <div className="flex-grow-1 overflow-y-auto p-4 bg-body-tertiary">
        <div className="d-flex flex-column gap-1">
          <TimelineItem
            icon={<FaMapPin />}
            text="장소 변경: 명동 맛집"
            time="14:30"
          />
          <TimelineItem
            icon={<FaDollarSign />}
            text="비용 추가: 식사 ￦100,000"
            time="15:15"
          />
          <TimelineItem icon={<FaUsers />} text="김철수 참석" time="15:30" />
        </div>
      </div>
      <GatherActionButtons />
    </Container>
  );
}
