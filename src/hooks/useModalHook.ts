import { simpleModalState } from "@/state/atom";
import { useSetRecoilState } from "recoil";
import { ModalConfig } from "..";

export const useSimpleModalHook = () => {
  const setModalState = useSetRecoilState(simpleModalState);

  // Omit을 통해 ModalConfig의 속성중 isOpen만 제외.
  const openModal = (config: ModalConfig) => {
    setModalState({ ...config, isOpen: true });
  };

  const closeModal = () => {
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  };

  return { openModal, closeModal };
};
