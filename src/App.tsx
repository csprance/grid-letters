import * as React from "react";
import store from "store";
import styled from "styled-components";

import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import MidSection from "./components/MidSection";
import defaultState from "./state";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface Props {}
const App: React.FunctionComponent<Props> = () => {
  const [rows, setRows] = React.useState(defaultState.rows);
  const [columns, setColumns] = React.useState(defaultState.columns);
  const [data, setData] = React.useState(defaultState.data);
  const [saved, setSaved] = React.useState(store.get("saved", []));
  const save = (data: Array<Array<number>>) => {
    setSaved(data);
    store.set("saved", data);
  };

  return (
    <Wrapper>
      <TopSection columns={columns} setColumns={setColumns} />
      <MidSection
        save={save}
        saved={saved}
        columns={columns}
        rows={rows}
        data={data}
        setRows={setRows}
        setData={setData}
        setColumns={setColumns}
      />
      <BottomSection
        saved={saved}
        data={data}
        setData={setData}
        rows={rows}
        columns={columns}
      />
    </Wrapper>
  );
};

export default App;
