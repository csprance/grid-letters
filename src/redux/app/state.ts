interface AppState {
  columns: number;
  rows: number;
  data: Array<number>;
  saved: Array<Array<number>>;
}

const defaultColumns = 5;
const defaultRows = 7;

const state: AppState = {
  columns: defaultColumns,
  rows: defaultRows,
  data: Array(defaultRows * defaultColumns).fill(0),
  saved: [],
};

export default state;
