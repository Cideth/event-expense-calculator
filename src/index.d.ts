export interface Friend {
  id: string;
  statusMessage: string;
  image: string | null;
  name: string;
}

export interface FriendShip extends Friend {
  myFriends: Friend[];
}

export type FriendList = Friend[];

export type RoomStatus = "START" | "END" | "WAIT";

export type TimeLineEventType =
  | "GATHER_START"
  | "GATHER_END"
  | "DRINKING"
  | "NO_DRINKING"
  | "PLACE_MOVE"
  | "PLACE_CHANGE"
  | "CHECK_IN"
  | "CHECK_OUT"
  | "PLACE_ADD"
  | "ROOM_ENTER"
  | "ROOM_EXIT"
  | "COST_ADD"
  | "PLACE_DELETE"
  | "SETTLEMENT_CONFIRM"
  | "COST_REMOVE"
  | "COST_CHANGE";

// Notification types
export enum GatheringNotificationEnum {
  Attendance = "Meeting Attendance",
  AttendanceCancellation = "Meeting Attendance Cancellation",
  Ended = "Meeting Ended",
  LocationChanged = "Meeting Location Changed",
  Created = "Meeting Created",
  OneHourReminder = "Reminder: 1 Hour Before Meeting",
  LocationMoved = "Meeting Location Moved",
  AutomaticallyEnded = "Meeting Automatically Ended",
}

export interface Gathering {
  gatherId: number;
  imageLink: string | null; // corrected to camel case
  status: RoomStatus;
  title: string;
  expectedStartTime: string; // corrected to camel case
  costType: string; // corrected to camel case
  creator: number;
}

export interface GatheringRegistration {
  image: string | null;
  title: string;
  expectedStartTime: string; // corrected to camel case
  costType: string; // corrected to camel case
}

export interface GatheringsInfo {
  gatherId: number;
  imageLink: string | null; // corrected to camel case
  status: RoomStatus;
  title: string;
  entryCount: number; // corrected to camel case
  lastNotification: TimeLineEventType | null; // corrected to camel case
  createdAt: string; // corrected to camel case
  updatedAt: string | null; // corrected to camel case
}

export type HeaderLayoutStateType = {
  title?: string;
  backButtonUrlLink?: string | null;
  additionalComponent?: React.ReactNode | null;
  additionalComponentProps?: Record<string, any>;
};

export interface IconTimelineItemProps {
  text: string;
  time: string;
  event?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export interface ModalConfig {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface Timeline {
  eventType: TimeLineEventType; // corrected to camel case
  gatheringInfoId: number; // corrected to camel case
  text: string;
  time: string;
  event?: undefined | any; // keep as is, unless changing `event` naming too
}
