"use client";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { BiSolidDrink } from "react-icons/bi";
import { FaDollarSign, FaMapPin, FaPlus, FaPowerOff } from "react-icons/fa";
import { MdOutlineNoDrinks } from "react-icons/md";
import { RiUserLocationLine, RiUserUnfollowLine } from "react-icons/ri";
import { ModalConfig, RoomStatus } from "..";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSimpleModalHook } from "@/hooks/useModalHook";
import { useRecoilValue } from "recoil";
import { isSimpleModalOpenSelector } from "@/state/selectors";
import SimpleModal from "./SimpleModal";

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
  PLACE_EDIT: { icon: <FaMapPin />, label: "장소 설정" },
  COST_EDIT: { icon: <FaDollarSign />, label: "비용 설정" },
  CHECK_IN_OUT: { icon: <RiUserLocationLine />, label: "상태 확인중..." },
  SETTLEMENT_CHECK: { icon: <FaDollarSign />, label: "비용 확인" },
  GETHER_END: { icon: <FaPowerOff />, label: "모임 종료" },
  DRINKING_YES_NO: { icon: <BiSolidDrink />, label: "상태 확인중..." },
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
    "COST_EDIT", // 비용 관리
  ],
  end: ["SETTLEMENT_CHECK"],
};

const attendeeActionButtonsInfo: { [key in RoomStatus]: ActionButtonType[] } = {
  wait: ["DRINKING_YES_NO"],
  start: ["CHECK_IN_OUT", "DRINKING_YES_NO"],
  end: ["SETTLEMENT_CHECK"],
};

// gatheractionbuttons props = RoomStatus, IsAttendPlace, IsAdmin
export type GatherActionbuttonProps = {
  roomStatus: RoomStatus;
  isCheckedIn: boolean;
  isHost: boolean;
  isDrinking: boolean;
};

export default function GatherActionButtons({
  roomStatus,
  isCheckedIn,
  isDrinking,
  isHost,
}: GatherActionbuttonProps) {
  const MAX_LINE_IN_BUTTON_COUNT = 3;
  const [isExpanded, setExpandedButton] = useState(false);
  const buttonsArr = isHost
    ? hostActionButtonsInfo[roomStatus]
    : attendeeActionButtonsInfo[roomStatus];
  const isShowExpandedButton =
    buttonsArr.length > MAX_LINE_IN_BUTTON_COUNT ? true : false;
  const router = useRouter();

  const { openModal } = useSimpleModalHook();
  const isModalOpen = useRecoilValue(isSimpleModalOpenSelector);
  const pathName = usePathname();
  const navigate = function (
    cb: (router: AppRouterInstance, currentPath: string) => void
  ): void {
    cb(router, pathName);
  };

  return (
    <div
      className="px-3 pb-3 border rounded-top"
      style={{ paddingTop: isShowExpandedButton ? "0px" : "10px" }}
    >
      {isShowExpandedButton && (
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
      )}

      <Card.Body
        className={`row ${isExpanded ? "" : "overflow-hidden"}`}
        style={{
          maxHeight: isExpanded ? "1000px" : "95px",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {buttonsArr.map((action_type) => (
          <ActionButtonFactory
            key={action_type}
            action={action_type}
            isCheckedIn={isCheckedIn}
            isDrinking={isDrinking}
            openModal={openModal}
            navigate={navigate}
          />
        ))}
      </Card.Body>
      {isModalOpen && <SimpleModal />}
    </div>
  );
}

function getCheckInOutButton(isCheckedIn: boolean): {
  icon: JSX.Element;
  label: string;
} {
  return isCheckedIn
    ? { icon: <RiUserUnfollowLine />, label: "체크아웃" }
    : { icon: <RiUserLocationLine />, label: "체크인" };
}
function getDrinkYesNoButton(isDrinking: boolean): {
  icon: JSX.Element;
  label: string;
} {
  return isDrinking
    ? { icon: <BiSolidDrink />, label: "금주" }
    : { icon: <MdOutlineNoDrinks />, label: "음주" };
}

function getActionHandler(
  action: ActionButtonType,
  isCheckedIn: boolean,
  isDrinking: boolean,
  openModal: (config: ModalConfig) => void,
  navigate: (
    cb: (router: AppRouterInstance, currentPath: string) => void
  ) => void
): () => void {
  switch (action) {
    case "CHECK_IN_OUT":
      return () =>
        openModal({
          isOpen: true,
          message: isCheckedIn
            ? "체크아웃 하시겠습니까?"
            : "체크인 하시겠습니까?",
          onConfirm: () => {
            console.log(isCheckedIn ? "Checked out" : "Checked in");
          },
          onCancel: () => {
            console.log("Action cancelled");
          },
        });
    case "DRINKING_YES_NO":
      return () =>
        openModal({
          isOpen: true,
          message: isDrinking ? "금주 하시겠습니까?" : "음주 하시겠습니까?",
          onConfirm: () => {
            console.log(isDrinking ? "Drinking" : "Not drinking");
          },
          onCancel: () => {
            console.log("Action cancelled");
          },
        });
    case "PLACE_EDIT":
      return () =>
        navigate((router, currentPath) => {
          router.push(`${currentPath}/place`);
        });
    case "COST_EDIT":
      return () =>
        navigate((router, currentPath) => {
          router.push(`${currentPath}/cost`);
        });
    case "GATHER_START":
      return () => alert("Gathering started!");
    case "GETHER_END":
      return () => alert("Gathering ended!");
    case "SETTLEMENT_CHECK":
      return () =>
        navigate((router, currentPath) => {
          router.push(`${currentPath}/settlement/check`);
        });
    default:
      return () => {
        console.error("알 수 없는 타입의 ActionHandler가 등록되었습니다.");
      };
  }
}

function QuickActionButton({
  icon,
  label,
  click_handler,
}: {
  icon: JSX.Element;
  label: string;
  click_handler: () => void;
}) {
  return (
    <div className="col-4  p-1 text-center ">
      <Button
        variant="outline-secondary"
        className="rounded-circle p-3 mb-2"
        onClick={(e) => {
          click_handler();
        }}
      >
        {icon}
      </Button>
      <div className="small">{label}</div>
    </div>
  );
}

function ActionButtonFactory({
  action,
  isCheckedIn,
  isDrinking,
  openModal,
  navigate,
}: {
  action: ActionButtonType;
  isCheckedIn: boolean;
  isDrinking: boolean;
  openModal: (config: ModalConfig) => void;
  navigate: (
    cb: (router: AppRouterInstance, currentPath: string) => void
  ) => void;
}): JSX.Element {
  let actionInfo;
  switch (action) {
    case "CHECK_IN_OUT":
      actionInfo = getCheckInOutButton(isCheckedIn);
      break;
    case "DRINKING_YES_NO":
      actionInfo = getDrinkYesNoButton(isDrinking);
      break;
    default:
      actionInfo = actionButtons[action];
  }
  const click_handler = getActionHandler(
    action,
    isCheckedIn,
    isDrinking,
    openModal,
    navigate
  );

  return (
    <QuickActionButton
      icon={actionInfo.icon}
      label={actionInfo.label}
      click_handler={click_handler}
    />
  );
}
