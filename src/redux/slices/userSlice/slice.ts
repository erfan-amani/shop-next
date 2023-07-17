import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthSliceState = {
  user: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      console.log({ payload });
      state.user = payload;
    },
  },
});

export interface AuthSliceState {
  user: null | {
    _id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
  status: "idle" | "loading" | "failed";
}
