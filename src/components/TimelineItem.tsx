"use client";
import { ListGroup } from "react-bootstrap";
import { IconTimelineItemProps } from "..";

interface TimelineItemProps extends IconTimelineItemProps {
  icon: React.ReactNode;
}

export default function TimelineItem({
  icon,
  text,
  time,
  event,
}: TimelineItemProps) {
  return (
    <ListGroup.Item
      onClick={(e) => {
        if (!event) return;
        return event(e);
      }}
      className="d-flex align-items-start mb-1"
    >
      <div className="bg-primary text-white p-3 rounded-circle me-3">
        {icon}
      </div>
      <div>
        <p className="mb-1 fw-bold">{text}</p>
        <p className="mb-0 text-muted small">{time}</p>
      </div>
    </ListGroup.Item>
  );
}
