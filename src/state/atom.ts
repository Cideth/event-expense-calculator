import { atom } from "recoil";
import { HeaderLayoutStateType } from "..";

export const headerLayoutState = atom<HeaderLayoutStateType>({
  key: "headerLayoutState",
  default: {
    title: process.env.NEXT_PUBLIC_APP_TITLE,
    backButtonUrlLink: null,
  },
});
