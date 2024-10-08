import { Metadata } from "next";
import FriendsPage from "./FriendsPage";

export const metadata: Metadata = {
  title: "친구 목록",
  description: "친구 목록을 표시합니다.",
};

export default function Page() {
  return (
    <>
      <FriendsPage />
    </>
  );
}
