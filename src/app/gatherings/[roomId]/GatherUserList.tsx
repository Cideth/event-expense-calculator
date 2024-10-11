"use client";
import { Button } from "react-bootstrap";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import SlidingSidebar from "./SlidingSidebar";
import { useRecoilState } from "recoil";
import { sidebarState } from "@/state/atom";

export default function GatherUserList() {
  const [isOpen, setSidebarState] = useRecoilState(sidebarState);
  const toggleSidebar = () => setSidebarState(!isOpen);
  return (
    <div className="d-flex justify-content-end">
      <Button variant="primary" onClick={toggleSidebar}>
        <SlMenu size="1.5em" />
      </Button>
      <SlidingSidebar isOpen={isOpen} onClose={toggleSidebar} />
    </div>
  );
}
