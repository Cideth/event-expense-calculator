import React from "react";
import { Card, Badge } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import { RoomStatus } from "..";

type PlaceSummaryType = {
  roomStatus: RoomStatus;
  previousPlace?: string;
  currentPlace: string;
  nextPlace?: string;
};

const getStatusColor = (status: RoomStatus) => {
  switch (status) {
    case "start":
      return "success";
    case "wait":
      return "warning";
    case "end":
      return "secondary";
  }
};

const getStatusText = (status: RoomStatus) => {
  switch (status) {
    case "start":
      return "진행 중";
    case "wait":
      return "대기 중";
    case "end":
      return "종료됨";
  }
};

export default function HorizontalPlaceSummary({
  roomStatus,
  previousPlace,
  currentPlace,
  nextPlace,
}: PlaceSummaryType) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">이동 경로</h5>
          <Badge bg={getStatusColor(roomStatus)}>
            {getStatusText(roomStatus)}
          </Badge>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          {previousPlace && (
            <div className="text-center">
              <div className="small text-muted mb-1">이전 장소</div>
              <div>{previousPlace}</div>
            </div>
          )}
          {previousPlace && <ArrowRight className="mx-2" size={24} />}
          <div className="text-center">
            <div className="small text-primary font-weight-bold mb-1">
              현재 장소
            </div>
            <div className="font-weight-bold border border-primary rounded px-3 py-2">
              {currentPlace}
            </div>
          </div>
          {nextPlace && <ArrowRight className="mx-2" size={24} />}
          {nextPlace && (
            <div className="text-center">
              <div className="small text-muted mb-1">다음 장소</div>
              <div>{nextPlace}</div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
