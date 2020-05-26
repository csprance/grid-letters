import * as React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch } from "../redux";
import * as appActions from "../redux/app/actions";
import { useSelector } from "react-redux";
import { columnsSelector } from "../redux/app/selectors";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

interface Props {}
const TopSection: React.FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch();
  const columns = useSelector(columnsSelector);
  return (
    <Wrapper>
      Columns:{" "}
      <TextField
        type={"text"}
        name={"columns"}
        value={columns}
        onChange={(e) =>
          dispatch(appActions.setColumns(Number(e.target.value)))
        }
      />
    </Wrapper>
  );
};

export default TopSection;
