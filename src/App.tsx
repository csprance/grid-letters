import * as React from "react";
import styled from "styled-components";

import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import MidSection from "./components/MidSection";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface Props {}
const App: React.FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <TopSection />
      <MidSection />
      <BottomSection />
    </Wrapper>
  );
};

export default App;
