import { atom } from "recoil";
import { HeaderLayoutStateType } from "..";


export const headerLayoutState = atom<HeaderLayoutStateType | null>({
    key : "headerLayoutState",
    default: null,
});