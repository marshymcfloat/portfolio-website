"use client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { projectSlice } from "@/Slice/ProjectSlice";

const store = configureStore({ reducer: { project: projectSlice.reducer } });

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
