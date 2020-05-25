import * as React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Middle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
const Right = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

interface Props {
  rows: number;
  columns: number;
  data: Array<number>;
  setRows: (num: number) => void;
  setData: (data: Array<number>) => void;
  setColumns: (num: number) => void;
  save: (data: Array<Array<number>>) => void;
  saved: Array<Array<number>>;
}
const MidSection: React.FunctionComponent<Props> = ({
  rows,
  setRows,
  data,
  setData,
  columns,
  setColumns,
  save,
  saved,
}) => {
  const clearData = () =>
    setData(Array.from(Array(rows * columns).keys()).fill(0));
  const saveData = () => {
    console.log(saved);
    save([...saved, data]);
  };

  return (
    <Wrapper>
      <Left>
        <Button variant={"contained"} color={"secondary"} onClick={clearData}>
          Clear
        </Button>
        <Button variant={"contained"} color={"primary"} onClick={saveData}>
          Save
        </Button>
      </Left>
      <Middle>
        <Grid setData={setData} rows={rows} columns={columns} data={data} />
      </Middle>
      <Right>
        Rows:{" "}
        <TextField
          type={"text"}
          name={"rows"}
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
      </Right>
    </Wrapper>
  );
};

export default MidSection;
