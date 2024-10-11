"use client";
import { useState } from "react";
import { Button, InputGroup, ListGroup } from "react-bootstrap";
import { userListTestData } from "./testdata";
import UserAvatar from "./UserAvatar";
import { BsShare } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import ShareModal from "@/components/ShareModal";
export default function SlidingSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [show, setShow] = useState(false);
  const setModalClose = () => {
    setShow(false);
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>유저 목록</h2>
        <hr />

        <ListGroup as="ol">
          {userListTestData.map((row) => (
            <ListGroup.Item as="li" key={row.id}>
              <UserAvatar
                isOnline={false}
                src="/logo.png"
                alt={row.name + "의 이미지"}
              />
              {row.name}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* 고정된 하단 버튼 */}
        <div className="sidebar-footer ">
          <InputGroup className="mb-3 d-flex">
            <div className="col-6 mb-2">
              <Button
                variant="outline-primary"
                size="lg"
                className="w-100 d-flex justify-content-center align-items-center"
                onClick={() => {
                  setShow(true);
                }}
              >
                <BsShare />
              </Button>
            </div>
            <div className="col-6 mb-2">
              <Button
                variant="outline-danger"
                size="lg"
                className="w-100 d-flex justify-content-center align-items-center"
              >
                <RxExit />
              </Button>
            </div>
          </InputGroup>
          <ShareModal
            copyUrl=""
            isShowModal={show}
            setModalClose={setModalClose}
          />
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          right: -80%;
          width: 80%;
          height: 100dvh;
          background-color: white;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease-in-out;
          z-index: 1050;
          padding: 20px;
          overflow-y: auto;
        }
        .sidebar.open {
          right: 0;
        }

        /* 하단 버튼을 고정하기 위한 스타일 */
        .sidebar-footer {
          position: absolute;
          bottom: 1px;
          background-color: white;
          width: 70dvw;
        }
      `}</style>
    </>
  );
}
