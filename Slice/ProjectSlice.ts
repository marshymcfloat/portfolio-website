import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectId: "",
  title: "",
  images: [],
  description: "",
  technology: [],
  githubLink: "",
  liveLink: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    selectProject(state, action) {
      return action.payload;
    },
  },
});

export const projectSliceAction = projectSlice.actions;
