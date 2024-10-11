import React from "react";
import { Image } from "react-bootstrap";
import { FaCrown } from "react-icons/fa";

type UserAvatarProps = {
  src: string;
  alt: string;
  isOnline: boolean;
  size?: string; // 이미지 크기를 조정할 수 있는 옵션
};

export default function UserAvatar({
  src,
  alt,
  isOnline,
  size = "45px",
}: UserAvatarProps) {
  return (
    <div
      className="position-relative d-inline-block"
      style={{ width: size, height: size }}
    >
      {/* 프로필 이미지 */}
      <Image
        src={src}
        alt={alt}
        roundedCircle
        style={{ width: "100%", height: "100%" }}
      />

      {/* 좌측 하단 온라인 상태 표시 */}
      <span
        className={` position-absolute p-1 rounded-circle border border-light ${
          isOnline ? "bg-success" : "bg-danger"
        }`}
        style={{
          width: "15px",
          height: "15px",
          bottom: "5%", // 상대적으로 위치를 조정
          left: "5%", // 이미지의 크기에 상관없이 일정하게 유지
        }}
      />
    </div>
  );
}
