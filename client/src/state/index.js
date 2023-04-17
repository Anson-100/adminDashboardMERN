import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  mode: "dark",
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: state => {
      statemode = state.mode === "light" ? "dark" : "light"
    },
  },
})

export const { setMode } = globalSlice.actions

export default globalSlice.reducer
