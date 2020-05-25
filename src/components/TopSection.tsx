import * as React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

interface Props {
  columns: number;
  setColumns: (columns: number) => void;
}
const TopSection: React.FunctionComponent<Props> = ({
  columns,
  setColumns,
}) => {
  return (
    <Wrapper>
      Columns:{" "}
      <TextField
        type={"text"}
        name={"columns"}
        value={columns}
        onChange={(e) => setColumns(Number(e.target.value))}
      />
    </Wrapper>
  );
};

export default TopSection;
