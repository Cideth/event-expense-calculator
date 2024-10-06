export interface Friend {
  id: string;
  statusMessage: string;
  image: string | null;
  name: string;
}
export type FriendList = Friend[];

export type roomStatusType = "wait" | "start" | "end";

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
  roomId: string;
  roomStatus: roomStatusType;
  image: string | null;
  roomName: string;
  participants: FriendList | [];
  lastNotificate?: GatheringNotificationEnum;
}
export type GatheringList = Gathering[];
