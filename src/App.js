import React from "react";
import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  FullScreen,
  Box,
  Progress,
  OrderedList,
} from "spectacle";

const theme = {
  colors: {
    primary: "#f04c22",
    secondary: "#314c9a",
  },
  fonts: {
    header: 'inherit,"Roboto", Helvetica, Arial, sans-serif',
    text: 'inherit,"Roboto", Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    header: "64px",
    paragraph: "28px",
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <Heading>EMR Monorepo</Heading>
        <OrderedList>Idea</OrderedList>
        <OrderedList>State</OrderedList>
        <OrderedList>Innovation</OrderedList>
        <OrderedList>Implementation</OrderedList>
        <OrderedList>Current State</OrderedList>
      </Slide>
      <Slide>
        <Heading>Hermes</Heading>
      </Slide>
      <Slide>
        <Heading>How Innovation Happens</Heading>
      </Slide>
      <Slide>
        <Heading>Why bother?</Heading>
      </Slide>
    </Deck>
  );
}
export default App;
