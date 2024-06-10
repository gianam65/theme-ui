import { atom } from "recoil";
import { STORE } from "../../constants/store";
import { persistAtom } from "../persist";

export const loadingState = atom({
  key: STORE.APP.LOADING,
  default: false,
});

export const pageErrorMessageState = atom({
  key: STORE.APP.ERROR_MESSAGE,
  default: "",
});

export const userTokenState = atom({
  key: STORE.ACCOUNT.ACCOUNT_TOKEN,
  default: "",
  effects_UNSTABLE: [persistAtom],
});
