import { simpleModalState } from "@/state/atom";
import { Button, Modal } from "react-bootstrap";
import { useRecoilState } from "recoil";

export default function SimpleModal() {
  const [{ message, onConfirm, onCancel }, setModalState] =
    useRecoilState(simpleModalState);

  const handleConfirm = () => {
    onConfirm();
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  };

  const handleCancel = () => {
    onCancel();
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  };

  return (
    <Modal show={true} centered backdrop="static" animation={false}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          취소
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
