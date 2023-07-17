import { ReduxState } from "@/redux/store";

export const selectUser = (state: ReduxState) => state.auth.user;
export const selectIsAuth = (state: ReduxState) => !!state.auth.user;
