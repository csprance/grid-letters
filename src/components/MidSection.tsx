import * as React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useAppDispatch } from "../redux";
import * as appActions from "../redux/app/actions";
import { useSelector } from "react-redux";
import {
  columnsSelector,
  dataSelector,
  rowsSelector,
  savedSelector,
} from "../redux/app/selectors";

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

interface Props {}
const MidSection: React.FunctionComponent<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const data = useSelector(dataSelector);
  const saved = useSelector(savedSelector);
  const rows = useSelector(rowsSelector);
  const columns = useSelector(columnsSelector);
  const clearData = () => dispatch(appActions.clearData());
  const saveData = () => dispatch(appActions.setSaved([...saved, data]));
  const toggleDataIndex = (index: number) =>
    dispatch(appActions.toggleDataIndex(index));

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
        <Grid
          toggleDataIndex={toggleDataIndex}
          rows={rows}
          columns={columns}
          data={data}
        />
      </Middle>
      <Right>
        Rows:{" "}
        <TextField
          type={"text"}
          name={"rows"}
          value={rows}
          onChange={(e) => dispatch(appActions.setRows(Number(e.target.value)))}
        />
      </Right>
    </Wrapper>
  );
};

export default MidSection;
