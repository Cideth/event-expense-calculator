import { selector } from "recoil";
import { simpleModalState } from "./atom";

export const isSimpleModalOpenSelector = selector({
  key: "isModalOpenSelector",
  get: ({ get }) => {
    return get(simpleModalState).isOpen;
  },
});
