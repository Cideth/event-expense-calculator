"use client";
import { ListGroup } from "react-bootstrap";

export default function TimelineItem({ icon, text, time }) {
  return (
    <ListGroup.Item className="d-flex align-items-start">
      <div className="bg-primary text-white p-2 mt-1 rounded-circle me-3">
        {icon}
      </div>
      <div>
        <p className="mb-1 fw-bold">{text}</p>
        <p className="mb-0 text-muted small">{time}</p>
      </div>
    </ListGroup.Item>
  );
}
