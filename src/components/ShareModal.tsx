import { useClipBoardCopyHook } from "@/hooks/useClipBoardCopyHook";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCopy } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";

type ShareModalPropsType = {
  isShowModal: boolean;
  setModalClose: () => void;
  copyUrl: string;
};

export default function ShareModal({
  isShowModal,
  setModalClose,
  copyUrl,
}: ShareModalPropsType) {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const { clipboardCopy } = useClipBoardCopyHook(setCopySuccess);

  return (
    <>
      <Modal
        show={isShowModal}
        centered
        backdrop="static"
        onHide={setModalClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>공유하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={copyUrl}
              aria-label={copyUrl}
              aria-describedby="basic-addon2"
              disabled={true}
            />
            <Button
              variant="outline-secondary"
              onClick={() => {
                clipboardCopy(copyUrl);
              }}
            >
              {copySuccess ? <GrCompliance /> : <FaCopy />}
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}
