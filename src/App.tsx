import React from "react";
import DynamicList from "./components/DynamicList";
import LittleImages from "./components/LittleImages";
import ColorPicker from "./components/ColorPicker";
import styled from "styled-components";

/* flex-direction: column; to the Container style, which tells 
the flex container to arrange its items in a column direction 
rather than a row direction. This causes the two InnerContainer 
components to stack on top of each other rather than being placed
side-by-side. */

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  color: white;
  background-color: #222222;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
`;

const App = () => {
  return (
    <Container>
      <InnerContainer>
        <DynamicList />
      </InnerContainer>
      <InnerContainer>
        <LittleImages />
      </InnerContainer>
      <InnerContainer>
        <ColorPicker />
      </InnerContainer>
    </Container>
  );
};

export default App;
