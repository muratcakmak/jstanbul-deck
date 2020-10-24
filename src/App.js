/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  Markdown,
  Notes,
  OrderedList,
  Slide,
} from "spectacle";
import "./index.css";
import { ReactComponent as Logo } from "./logo.svg";

const theme = {
  colors: {
    primary: "black",
    secondary: "black",
    backgroundColor: "#d9b48e",
  },
  fonts: {
    header: `SofiaProWeb, "Open Sans", sans-serif, Helvetica, Arial`,
    text: `SofiaProWeb, "Open Sans", sans-serif, Helvetica, Arial`,
  },
  fontSizes: {
    header: "64px",
    paragraph: "28px",
  },
};

const fancyTransition = {
  from: {
    position: "fixed",
    transform: "translate(50%, 0%)",
  },
  enter: {
    position: "fixed",
    transform: "translate(0, 0%)",
  },
  leave: {
    position: "fixed",
    transform: "translate(-100%, 0%)",
  },
};

const template = ({ slideNumber, numberOfSlides }) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Logo></Logo>
    <Box padding="1em">
      {slideNumber}/{numberOfSlides}
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide
        backgroundColor="backgroundColor"
        transitionEffect={fancyTransition}
      >
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px" fontSize="150px" color="offwhite">
            EMR Monorepo
          </Heading>
          <Heading margin="0px" fontSize="h2">
            Oguzhan Murat Cakmak
          </Heading>
          <Heading margin="0px 32px" fontSize="h3" color="grey">
            Monorepo, facelift, refreshed...
          </Heading>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>EMR Monorepo</Heading>
        <OrderedList>Problem</OrderedList>
        <OrderedList>State</OrderedList>
        <OrderedList>Proposal</OrderedList>
        <OrderedList>Implementation</OrderedList>
        <OrderedList>Current State</OrderedList>
        <OrderedList>Future Plans</OrderedList>
        <Notes>
          Urql is a GraphQL client that exposes a set of React components and
          hooks.
        </Notes>
      </Slide>
      <Slide
        backgroundColor="backgroundColor"
        transitionEffect={fancyTransition}
      >
        <Heading>Hermes</Heading>
        <OrderedList>Repeated Code</OrderedList>
        <OrderedList>NPM packages for the rescue</OrderedList>
        <OrderedList>Keeping up with 3 developers as 1 developer</OrderedList>
        <Notes>
          During the project Hermes aka synchronous consultation we're able to
          build quickly for web thanks to the shared component between EMR and
          Store. This was partially thanks to github npm registry. And my
          attempt to have a uniform repository between EMR and CX which I
          started to work on first. I am briefly touching on Cactus. Cactus is a
          generally purpose component library shared between Store and EMR at
          the time being. I wanted to make it general purpose component library
          but seems like creating infrastructure between store and EMR is harder
          than doing your own implementation. So we kept it
        </Notes>
      </Slide>
      <Slide
        backgroundColor="backgroundColor"
        transitionEffect={fancyTransition}
      >
        <Heading>EMR UI Team</Heading>
        <OrderedList>Keeping up with 3 developers as 1 developer</OrderedList>
        <Notes>
          Hermes project, we have realized that we could do better with the
          engineering resources we have. At that time, EMR had 3 UI engineers
          and 1 iOS engineer. So each feature was repeated in the mobile and the
          web. Mobile was also iOS only. It wasn't the ideal way to spend energy
          so I started to think about a solution
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Problem: How could we share data layer</Heading>
        <OrderedList>Save development hours with shared data layer</OrderedList>
        <Notes>
          EMR is a CRUD application at the core. We added video chat on top of
          CRUD application. Most of the we read and display data on the
          frontend. If user does any add or update to the database we also
          render it on the UI. It doesn't matter it is an Apple Watch app,
          Oculus VR App, or Apple Glass app(Coming soon). What it means is if we
          could cross-platform data layer, we would be able to save enourmous
          eng time. And eng time means efficiency and we could spend remaining
          time to improve UX and do fancy/fun things
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Kotlin Native</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```Kotlin Native```</Markdown>
          <Image
            style={{ height: 500 }}
            src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg"
          ></Image>
        </FlexBox>
        <Notes></Notes>
      </Slide>
      {/* <Slide backgroundColor="backgroundColor">
        <Heading>How Innovation Happens</Heading>
        <Markdown>```That's cool```</Markdown>
      </Slide> */}
      <Slide backgroundColor="backgroundColor">
        <Heading>Yarn</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```yarn workspaces```</Markdown>
          <Image src="https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png"></Image>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Lerna</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```lerna```</Markdown>
          <Image
            style={{ height: 500 }}
            src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png"
          ></Image>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>React Native</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```React Native```</Markdown>
          <Image
            style={{ height: 500 }}
            src="https://www.codeplusinfo.com/wp-content/uploads/2020/02/react-native-logo-e1581157043920.png"
          ></Image>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>React Native for Web</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```React Native for Web```</Markdown>
          <iframe
            src="https://github.com/necolas/react-native-web"
            style={{ height: 400, width: 400 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Typescript</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```Components```</Markdown>
          <iframe
            src="https://www.typescriptlang.org/"
            style={{ height: 400, width: 400 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Typescript</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <Markdown>```tsconfig```</Markdown>
            <Markdown>```linter```</Markdown>
          </Box>
          <iframe
            src="https://www.typescriptlang.org/"
            style={{ height: 400, width: 400 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Monorepo Architecture</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <Markdown>```Project Structure```</Markdown>
            <Markdown>```@emr-clients name space```</Markdown>
            <Markdown>```core/components/common```</Markdown>
          </Box>
          <iframe
            src="https://www.typescriptlang.org/"
            style={{ height: 400, width: 400 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Ducks</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <Markdown>```Project Structure```</Markdown>
            <Markdown>```@emr-clients name space```</Markdown>
            <Markdown>```core/components/common```</Markdown>
          </Box>
          <iframe
            src="https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/"
            style={{ height: 500, width: 600 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>React Native and Web</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <Markdown>```Project Structure```</Markdown>
            <Markdown>```@emr-clients name space```</Markdown>
            <Markdown>```core/components/common```</Markdown>
          </Box>
          <iframe
            src="https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej"
            style={{ height: 500, width: 600 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Styled Components</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```Components```</Markdown>
          <iframe
            src="https://styled-components.com/"
            style={{ height: 400, width: 400 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Moving redux and redux-sagas</Heading>
        <FlexBox verticalAlign="center">
          <Markdown>
            ```We have just moved all the sagas from legacy EMR to emr-clients
            app```
          </Markdown>
          <iframe
            src="https://www.typescriptlang.org/"
            style={{ height: 400, width: 400 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Deployments</Heading>
        <OrderedList>CircleCI</OrderedList>
        <OrderedList>Bitrise</OrderedList>
        <OrderedList>
          Github Actions <OrderedList>Running tests</OrderedList>
          <OrderedList>Notorious LGTM</OrderedList>
        </OrderedList>
        <OrderedList>Preview Links</OrderedList>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Bug Reports</Heading>
        <OrderedList>Tap Collector</OrderedList>
        <OrderedList>Instabug</OrderedList>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Security</Heading>
        <OrderedList>FaceID, TouchID, Biometric Auth</OrderedList>
        <OrderedList>MFA</OrderedList>
        <OrderedList>VPN</OrderedList>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Going Around</Heading>
        <OrderedList>Adding new packages</OrderedList>
        <OrderedList>Pathing packages</OrderedList>
      </Slide>
    </Deck>
  );
}
export default App;
