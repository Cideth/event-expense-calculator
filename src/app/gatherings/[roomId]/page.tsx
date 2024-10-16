import { Metadata } from "next";
import GatheringRoomPage from "./GatheringRoomPage";

export const metadata: Metadata = {
  title: "모임방",
  description: "모임방 내부 페이지 입니다",
};
import { testTimeLineData } from "./testdata";

export default function Page() {
  return (
    <>
      <GatheringRoomPage timelineData={testTimeLineData} />
    </>
  );
}
