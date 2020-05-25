import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{
  rows: number;
  columns: number;
  data: Array<number>;
}>`
  width: 750px;
  height: 900px;
  display: grid;
  grid-template-columns: repeat(${(state) => state.columns}, auto);
  grid-template-rows: repeat(${(state) => state.rows}, auto);
`;

const Item = styled.div<{
  value: number;
}>`
  background: ${(state) => (state.value > 0 ? "#000" : "#fff")};
  border: 1px solid #9d9d9d;
  border-radius: 20pt;
`;

interface Props {
  rows: number;
  columns: number;
  data: Array<number>;
  setData: (data: Array<number>) => void;
}
const Grid: React.FunctionComponent<Props> = ({
  rows,
  columns,
  data,
  setData,
}) => {
  const toggleDataValue = (idx: number) => {
    const newData = [...data];
    newData[idx] = Number(!Boolean(data[idx]));
    console.log(data);
    console.log(newData);
    setData(newData);
  };

  return (
    <Wrapper rows={rows} columns={columns} data={data}>
      {Array.from(Array(rows * columns).keys()).map((c, idx) => (
        <Item
          onClick={() => toggleDataValue(idx)}
          value={data[idx]}
          key={idx}
        />
      ))}
    </Wrapper>
  );
};

export default Grid;
