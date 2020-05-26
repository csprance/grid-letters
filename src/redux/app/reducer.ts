import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import defaultState from "./state";

export default createReducer(defaultState, (builder) =>
  builder
    .addCase(actions.setSaved, (state, action) => {
      state.saved = action.payload;
    })
    .addCase(actions.setData, (state, action) => {
      state.data = action.payload;
    })
    .addCase(actions.setRows, (state, action) => {
      state.rows = action.payload;
    })
    .addCase(actions.setColumns, (state, action) => {
      state.columns = action.payload;
    })
    .addCase(actions.clearData, (state, action) => {
      state.data = Array.from(Array(state.rows * state.columns).keys()).fill(0);
    })
    .addCase(actions.toggleDataIndex, (state, action) => {
      state.data[action.payload] = Number(!Boolean(state.data[action.payload]));
    })
);
