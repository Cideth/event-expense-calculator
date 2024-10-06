"use client";
import { Card, Button } from "react-bootstrap";
import { FaMapPin, FaDollarSign, FaUsers, FaPlus } from "react-icons/fa";

export default function GatherActionButtons() {
  return (
    <Card className="m-3">
      <Card.Body className="d-flex justify-content-around">
        <QuickActionButton icon={<FaDollarSign />} text="비용 추가" />
        <QuickActionButton icon={<FaMapPin />} text="장소 변경" />
        <QuickActionButton icon={<FaUsers />} text="참석자 관리" />
        <QuickActionButton icon={<FaPlus />} text="기타" />
      </Card.Body>
    </Card>
  );
}

const QuickActionButton = ({ icon, text }) => (
  <div className="text-center">
    <Button variant="outline-secondary" className="rounded-circle p-3 mb-2">
      {icon}
    </Button>
    <div className="small">{text}</div>
  </div>
);
