"use client";
import { Card, Button } from "react-bootstrap";
import { FaMapPin, FaDollarSign, FaUsers, FaPlus } from "react-icons/fa";
import { useState } from "react";

const colors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
];

export const managerActionsButtonArr = [
  {
    icon: <FaDollarSign size="1.5em" />,
    text: "test",
  },
  {
    icon: <FaDollarSign size="1.5em" />,
    text: "test2",
  },
  {
    icon: <FaDollarSign size="1.5em" />,
    text: "test3",
  },
  {
    icon: <FaDollarSign size="1.5em" />,
    text: "test4",
  },
  {
    icon: <FaDollarSign size="1.5em" />,
    text: "test5",
  },
];

export default function GatherActionButtons() {
  const [isExpanded, setExpandedButton] = useState(false);
  const buttonsArr = managerActionsButtonArr;
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
        {buttonsArr.map((row) => (
          <QuickActionButton key={row.text} icon={row.icon} text={row.text} />
        ))}
      </Card.Body>
    </div>
  );
}

const QuickActionButton = ({ icon, text }) => (
  <div className="col-4 col-sm-3  p-1 text-center ">
    <Button variant="outline-secondary" className="rounded-circle p-3 mb-2">
      {icon}
    </Button>
    <div className="small">{text}</div>
  </div>
);
