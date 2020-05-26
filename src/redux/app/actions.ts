import { createAction } from "@reduxjs/toolkit";
import { Data, Saved } from "./types";

export const clearData = createAction("app/clear_data");
export const setData = createAction<Data>("app/set_data");
export const setRows = createAction<number>("app/set_rows");
export const setColumns = createAction<number>("app/set_columns");
export const setSaved = createAction<Saved>("app/set_saved");
export const toggleDataIndex = createAction<number>("app/toggle_data_index");
