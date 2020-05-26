import { RootState } from "../index";

export const rowsSelector = (state: RootState) => state.app.rows;
export const columnsSelector = (state: RootState) => state.app.columns;
export const dataSelector = (state: RootState) => state.app.data;
export const savedSelector = (state: RootState) => state.app.saved;
