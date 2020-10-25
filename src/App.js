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
import hermes from "./assets/hermes.gif";

const theme = {
  colors: {
    primary: "black",
    secondary: "black",
    backgroundColor: "#d9b48e",
    backgroundColorSecondary: "#e4eae6",
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
    <Logo />
    <Box padding="1em">
      {slideNumber + 1}/{numberOfSlides}
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
        <FlexBox flexDirection="row">
          <Image src={hermes}></Image>
          <Box>
            <OrderedList>Repeated Code</OrderedList>
            <OrderedList>NPM packages for the rescue</OrderedList>
          </Box>
        </FlexBox>
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
      <Slide backgroundColor="backgroundColorSecondary">
        <Heading>TIL: Naming Convention</Heading>
        <OrderedList>EMR: Electronic medical records</OrderedList>
        <OrderedList>EMR UI: Legacy EMR</OrderedList>
        <OrderedList>EMR Clients: Also known as monorepo</OrderedList>
        <OrderedList>Web: Web</OrderedList>
        <OrderedList>
          Native: iOS and Android. In React Native context, they refer as native
        </OrderedList>
        <FlexBox justifyContent="space-between">
          <Notes></Notes>
        </FlexBox>
      </Slide>
      <Slide
        backgroundColor="backgroundColor"
        transitionEffect={fancyTransition}
      >
        <Heading>EMR UI Team</Heading>
        <FlexBox>
          <OrderedList>Keeping up with 3 developers as 1 developer</OrderedList>
          <Image
            width="600"
            src="https://blog.puls.com/hs-fs/hubfs/puls-iphone-stuck-on-apple-logo-updates.jpg?width=3600&name=puls-iphone-stuck-on-apple-logo-updates.jpg"
          ></Image>
        </FlexBox>
        <Notes>
          Hermes project, we have realized that we could do better with the
          engineering resources we have. At that time, EMR had 3 UI engineers
          and 1 iOS engineer. So each feature was repeated in the mobile and the
          web. Mobile was also iOS only. It wasn't the ideal way to spend energy
          so I started to think about a solution
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Problem: How could we share data layer?</Heading>
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
      <Slide
        backgroundColor="backgroundColor"
        transitionEffect={fancyTransition}
      >
        <Heading>Three options</Heading>
        <FlexBox flexDirection="row">
          <Box>
            <OrderedList>Kotlin Native</OrderedList>
            <OrderedList>React Native Web</OrderedList>
            <OrderedList>Flutter</OrderedList>
          </Box>
        </FlexBox>
        <Notes></Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Kotlin Native</Heading>
        <FlexBox justifyContent="space-between">
          <Image
            style={{ height: 500 }}
            src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin-logo.svg"
          ></Image>
        </FlexBox>
        <Notes>
          Kotlin/Native is a technology for compiling Kotlin code to native
          binaries, which can run without a virtual machine. It is an LLVM based
          backend for the Kotlin compiler and native implementation of the
          Kotlin standard library. Kotlin/Native is primarily designed to allow
          compilation for platforms where virtual machines are not desirable or
          possible, for example, embedded devices or iOS. It solves the
          situations when a developer needs to produce a self-contained program
          that does not require an additional runtime or virtual machine.
        </Notes>
      </Slide>
      {/* <Slide backgroundColor="backgroundColor">
        <Heading>How Innovation Happens</Heading>
        <Markdown>```That's cool```</Markdown>
      </Slide> */}
      <Slide backgroundColor="backgroundColor">
        <Heading>React Native for Web</Heading>
        <FlexBox verticalAlign="center">
          <iframe
            src="https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej"
            style={{ height: 500, width: 600 }}
          ></iframe>
          <Notes>
            I heard first about React Native Web with this blog post. I was
            doing some research on my own after working consumer app. I was like
            oh boy this is so cool to work on mobile apps. Is there any way to
            combine components across the board. React's motto is learn once
            apply every where and Java's motto is `write once and run anywhere`.
            How about altering React motto to match with Java's claim? It seemed
            like it is possible thanks to some difficult metro/webpack bundler.
            This post explains how you could accomplish it.
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Flutter</Heading>
        <FlexBox verticalAlign="center">
          <iframe
            src="https://flutter.dev/"
            style={{ height: 500, width: 600 }}
          ></iframe>
        </FlexBox>
        <Notes>
          Flutter is cool but it requires to learn new language called dart and
          new ecosystem, their twilio support wasn't solid back then
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Moving redux and redux-sagas</Heading>
        <FlexBox verticalAlign="center">
          <Heading>
            We have just moved all the sagas from legacy EMR to emr-clients app
          </Heading>
          <iframe
            src="https://redux-saga.js.org/"
            style={{ height: 500, width: 600 }}
          ></iframe>
        </FlexBox>
        <Notes>
          After creating the project, I was able to render cross platform login
          page which was really cool for me but it wasn't enough. I wanted to
          have proof of concept and that's why I want something quick. I went to
          EMR UI app, copied all data layer and added it to my POC project. It
          didn't work for sure. EMR UI was using ES5 style imports and export
          which you can't use with Metro bundler. So I was like a mac who runs
          90% of memory and CPU for 3 hours. It took me literally 3 hours 11
          minutes to get it working once it is working I knew that we're into
          something big. This was big since we were able to accomplish the first
          and foremost goal instantaniously. We have data layer which includes
          network calls, their side effects, sagas, and redux store inherited
          from legacy EMR. BOOM BOOM BOOM
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Lerna</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```lerna```</Markdown>
          <Image
            style={{ height: 500 }}
            src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png"
          ></Image>
          <Notes>
            Lerna is tool used to make monorepos. It was before Yarn workspaces.
            It still plays well with yarn workspaces. If you want to pick and
            publish one of the packages, lerna is way to go in monorepos.
          </Notes>
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
        <Heading>Typescript</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```Components```</Markdown>
          <iframe
            src="https://www.typescriptlang.org/"
            style={{ height: 500, width: 600 }}
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
            style={{ height: 500, width: 600 }}
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
            style={{ height: 500, width: 600 }}
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
        <Heading>Styled Components</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```Components```</Markdown>
          <iframe
            src="https://styled-components.com/"
            style={{ height: 500, width: 600 }}
          ></iframe>
        </FlexBox>
      </Slide>
      {/* Deployments */}
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
      {/* Security */}
      <Slide backgroundColor="backgroundColor">
        <Heading>Security</Heading>
        <OrderedList>FaceID, TouchID, Biometric Auth</OrderedList>
        <OrderedList>MFA</OrderedList>
        <OrderedList>VPN</OrderedList>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Working in the project</Heading>
        <OrderedList>Adding isomorphic packages</OrderedList>
      </Slide>
    </Deck>
  );
}
export default App;
