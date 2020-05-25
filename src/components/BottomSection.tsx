import * as React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClickableMiniGrid from "./ClickableMiniGrid";

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

interface Props {
  rows: number;
  columns: number;
  data: Array<number>;
  setData: (num: Array<number>) => void;
  saved: Array<Array<number>>;
}
const BottomSection: React.FunctionComponent<Props> = ({
  data,
  setData,
  saved,
  rows,
  columns,
}) => {
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
        {saved.map((s, idx) => (
          <div key={idx} style={{ padding: 10 }}>
            <ClickableMiniGrid
              setData={setData}
              rows={rows}
              data={s}
              columns={columns}
            />
          </div>
        ))}
      </SavedWrapper>
    </Wrapper>
  );
};

export default BottomSection;
