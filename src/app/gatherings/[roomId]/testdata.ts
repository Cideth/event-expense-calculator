import { Friend, FriendList, FriendShip } from "@/index";
import { TimelineItemProps } from "./page";
import { GatherActionbuttonProps } from "@/components/GatherActionButtons";

export const userListTestData = [
  { name: "User 1", id: "user1", profile: "San Francisco", state: "start" },
  { name: "User 2", id: "user2", profile: "New York", state: "wait" },
  { name: "User 3", id: "user3", profile: "Seattle", state: "start" },
];
export const testTimeLineData: Array<TimelineItemProps> = [
  {
    event_type: "GATHER_START",
    text: "모임 시작: 강남역",
    time: "18:00",
    event: undefined,
  },
  {
    event_type: "COST_ADD",
    text: "비용 추가: 50000원",
    time: "19:00",
    event: undefined,
  },
  {
    event_type: "ROOM_ENTER",
    text: "모임방 입장: 사용자 A",
    time: "19:10",
    event: undefined,
  },
  {
    event_type: "SETTLEMENT_CONFIRM",
    text: "정산 확정: 125000원",
    time: "21:30",
    event: { totalCost: 125000, participants: 5 },
  },
  {
    event_type: "GATHER_END",
    text: "모임 종료",
    time: "22:00",
    event: undefined,
  },
  {
    event_type: "DRINKING",
    text: "음주 시작: 홍대 술집",
    time: "20:00",
    event: undefined,
  },
  {
    event_type: "NO_DRINKING",
    text: "금주 선언: 사용자 B",
    time: "21:00",
    event: undefined,
  },
  {
    event_type: "PLACE_MOVE",
    text: "장소 이동: 강남역 -> 홍대",
    time: "20:30",
    event: { from: "강남역", to: "홍대" },
  },
  {
    event_type: "PLACE_CHANGE",
    text: "장소 변경: 홍대 -> 이태원",
    time: "22:00",
    event: { from: "홍대", to: "이태원" },
  },
  {
    event_type: "CHECK_IN",
    text: "장소 참석: 사용자 C",
    time: "22:15",
    event: { place: "이태원" },
  },
  {
    event_type: "PLACE_ADD",
    text: "장소 추가: 부산 해운대",
    time: "12:00",
    event: { newPlace: "해운대" },
  },
  {
    event_type: "PLACE_DELETE",
    text: "장소 삭제: 강남 카페",
    time: "16:30",
    event: { deletedPlace: "강남 카페" },
  },
];

export const setActionButtonSettingData: GatherActionbuttonProps = {
  isCheckedIn: true,
  isDrinking: true,
  roomStatus: "start",
  isHost: true,
};
