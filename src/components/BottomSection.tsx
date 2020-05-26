import * as React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import ClickableMiniGrid from "./ClickableMiniGrid";
import { useAppDispatch } from "../redux";
import { useSelector } from "react-redux";
import {
  columnsSelector,
  dataSelector,
  rowsSelector,
  savedSelector,
} from "../redux/app/selectors";
import * as appActions from "../redux/app/actions";
import { Data } from "../redux/app/types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SavedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {}
const BottomSection: React.FunctionComponent<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const data = useSelector(dataSelector);
  const saved = useSelector(savedSelector);
  const rows = useSelector(rowsSelector);
  const columns = useSelector(columnsSelector);
  const setData = (data: Data) => dispatch(appActions.setData(data));

  return (
    <Wrapper>
      <div>
        Results:{" "}
        <TextField
          type={"text"}
          name={"results"}
          value={data.reduce((a, b) => `${a}${b}`, "")}
        />
      </div>
      <SavedWrapper>
        {saved.map((savedData, idx) => (
          <div key={idx} style={{ padding: 10 }}>
            <ClickableMiniGrid
              setData={setData}
              rows={rows}
              data={savedData}
              columns={columns}
            />
          </div>
        ))}
      </SavedWrapper>
    </Wrapper>
  );
};

export default BottomSection;
