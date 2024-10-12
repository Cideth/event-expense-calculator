"use client";

import { LuPartyPopper } from "react-icons/lu";
import TimelineItem from "../TimelineItem";
import { IconTimelineItemProps } from "@/index";

export default function GatherStartItem({
  event,
  time,
  text,
}: IconTimelineItemProps) {
  return (
    <TimelineItem
      icon={<LuPartyPopper size="1.5em" />}
      event={undefined}
      time={time}
      text={text}
    />
  );
}
