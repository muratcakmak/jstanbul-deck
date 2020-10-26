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
  UnorderedList,
  Slide,
  Quote,
} from "spectacle";
import "./index.css";
import { ReactComponent as Logo } from "./logo.svg";
import hermes from "./assets/hermes.gif";
import cactus from "./assets/cactus.png";

const theme = {
  colors: {
    primary: "black",
    secondary: "black",
    backgroundColorOffbrand: "#EEE2D6",
    backgroundColorAlt: "#D8A285",
    backgroundColor: "#d9b48e",
    bgWell: "#8BB9AE",
    bgSex: "#C8DEE7",
    bgSexAlt: "#e4eae6",
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
      <Slide
        backgroundColor="backgroundColor"
        transitionEffect={fancyTransition}
      >
        <Heading>Cactus</Heading>
        <FlexBox verticalAlign="center">
          <Image width="1200" src={cactus}></Image>
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
      <Slide backgroundColor="bgSex">
        <Heading>TIL: Naming Convention</Heading>
        <OrderedList>EMR: Electronic medical records</OrderedList>
        <OrderedList>EMR UI: Legacy EMR</OrderedList>
        <OrderedList>EMR Clients: Also known as monorepo</OrderedList>
        <OrderedList>Web: Web</OrderedList>
        <OrderedList>
          Native: iOS and Android. In React Native context, they refer as native
        </OrderedList>
        <FlexBox justifyContent="space-between">
          <Notes>
            We have a unique naming in the web technologies. I learned iOS as
            iOS development back in the time I was doing only iOS dev. It turned
            out that they call it native in web terminology. Native applications
            are using only tools provided by operating system vendors such as
            Apple and Google in this case. What cross-platform applications aims
            is to have a one code base to rule them all. It is economically and
            technically ambitions goal and you have to do some trade-offs. Most
            of the cross-platform applications are not solid due to the need of
            refinements.
          </Notes>
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
      <Slide backgroundColor="backgroundColor">
        <Heading>Other Goals</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <OrderedList>Type safety</OrderedList>
            <OrderedList>CSS in JS</OrderedList>
            <OrderedList>Solid Linter rules</OrderedList>
            <OrderedList>Solid Project Architecture</OrderedList>
          </Box>
          <Box>
            <Image src="https://media.giphy.com/media/26FL4BhNXmo8PNLYk/giphy.gif"></Image>
          </Box>
        </FlexBox>
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
      {/* Background */}
      <Slide backgroundColor="backgroundColor">
        <Heading>React Native/React Native for Web</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <UnorderedList>Monorepo</UnorderedList>
          </Box>
          <Box>
            <iframe
              src="https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
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

      {/* Actual work */}
      <Slide backgroundColor="bgSex">
        <Heading>Remember</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <OrderedList>DX and efficiency</OrderedList>
            <OrderedList>Type safety</OrderedList>
            <OrderedList>CSS in JS</OrderedList>
            <OrderedList>Solid Linter rules</OrderedList>
            <OrderedList>Solid Project Architecture</OrderedList>
          </Box>
          <Box>
            <Image src="https://media.giphy.com/media/26FL4BhNXmo8PNLYk/giphy.gif"></Image>
          </Box>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>React Native</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <UnorderedList>
              Cost-effective & code reuse & performance
            </UnorderedList>
            <UnorderedList>Reusable Components</UnorderedList>
            <UnorderedList>Superior Developer Experience</UnorderedList>
          </Box>
          <Box>
            <iframe
              style={{ height: 500, width: 600 }}
              src="https://reactnative.dev/"
            ></iframe>
          </Box>
        </FlexBox>
        <Notes>
          Pretty cool technology. Developed at Facebook for their most
          downloaded iOS app in the universe. Their main goal was to increase
          developer productivity. They first announced it for iOS. and build
          Android later. Historically, iOS first so they have solid iOS support.
          Most of the industry needs CRUD applications if they are not game or
          XR(x reality, AR, VR, MX(mixed reality) or everything in between).
          Airbnb was the first adapter of React and they proved that React has
          capacity to be used in big projects. They adopted react native as
          well. Then removed it because it wasn't good for their use case. We
          don't know for sure but Facebook Marketplace is purely written in
          React Native. Since React Native is using declarative syntax of React
          it has smooth onboarding for people coming from web development ---
          React Native provides you the code reuse service for deployment of
          code on two different platforms such as iOS & Android. Because of code
          reuse service react-native saves up to 40% of the total development
          cost.
          https://shivlab.com/blog/top-features-benefits-of-react-native-in-2020/
        </Notes>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>React Native</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <UnorderedList>Live reload and hot reload</UnorderedList>
            <UnorderedList>React Similar Architecture</UnorderedList>
            <UnorderedList>Reusable Components</UnorderedList>
            <UnorderedList>Superior Developer Experience</UnorderedList>
          </Box>
          <Box>
            <iframe
              style={{ height: 500, width: 600 }}
              src="https://reactnative.dev/"
            ></iframe>
          </Box>
        </FlexBox>
        <Notes>
          -- Live reload provides you the service of reading & compiling a file
          that can be modified by developers for presenting in front of a
          simulator. It can also reload the app on its own from the initial
          stage. Live reload can enable you to see the result of any recent
          changing to the programming. Live reload will provide you with a
          two-screen service so that on one you can modify the code and see the
          result on the other screen. --- Since we are pretty much React shop,
          it is pretty big selling point in our organization
        </Notes>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>React Native for Web</Heading>
        <FlexBox justifyContent="space-between">
          <Box></Box>
          <iframe
            src="https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej"
            style={{ height: 500, width: 600 }}
          ></iframe>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Moving redux and redux-sagas</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-arojnd">
          <Box>
            <UnorderedList>
              We have just moved all the sagas from legacy EMR to emr-clients
              app
            </UnorderedList>
          </Box>
          <Box>
            <iframe
              src="https://redux-saga.js.org/"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
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
      <Slide backgroundColor="bgSex">
        <Heading>Routing</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <UnorderedList>React Router Dom</UnorderedList>
            <UnorderedList>React Navigation</UnorderedList>
          </Box>
          <Box>
            <iframe
              src="https://reactnavigation.org"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
          <Notes>
            Routing was a hard topic. Once you have react and react native, they
            converge pretty much everything other than routing. We don't have
            browser routing on mobile applications. No query params, no history,
            no nothing. React Navigation has beta web support but wasn't
            production ready. In order to have the best of both worlds, I
            implemented two routers. React Router Dom is inherited from EMR-UI
            project. I was pretty much familiar with React Navigation which is
            basically React Native navigation but that name was taken already.
            After implementing login flow things were ok.
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Adding isomorphic packages</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Quote>
            Isomorphism is a very general concept that appears in several areas
            of mathematics. The word derives from the Greek iso, meaning
            "equal," and morphosis, meaning "to form" or "to shape." Formally,
            an isomorphism is bijective morphism. Informally, an isomorphism is
            a map that preserves sets and relations among elements.
          </Quote>

          <Notes>
            Isomorphism is a very general concept that appears in several areas
            of mathematics. The word derives from the Greek iso, meaning
            "equal," and morphosis, meaning "to form" or "to shape." Formally,
            an isomorphism is bijective morphism. Informally, an isomorphism is
            a map that preserves sets and relations among elements. In this
            context, we call npm packages which can work in both native and web
            as isomorphic packages. Not all the packages have this spec so we
            should do due diligence when we want to introduce a package.
            packages/web/config-overrides.js has many examples on how you can
            introduce metro based packages to webpack based configurations
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Babel vs Metro</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <iframe
              src="https://babeljs.io/"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
          <Box>
            <iframe
              src="https://facebook.github.io/metro/"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
          <Notes>
            Babel is a transpiler. What?!? Well a transpiler is a tool that
            reads source code written in one programming language, and produces
            the equivalent code in another language. React Native uses Babel to
            convert React syntax and the newer ES5+ syntax into code that can be
            run in a JavaScript environment that doesn’t support those features.
            Out of the box Babel doesn’t do anything. It basically parses the
            code and then generates the same code back out again. In order to
            introduce some magic you need to integrate plugins (or presets, a
            set of plugins) for Babel to do anything. Plugins and presets can be
            installed as packages using yarn (or npm) — a package manager for
            JavaScript — declaring them in a file called package.json. Packages
            are available as dependencies or devDependencies. The difference
            relies on their usage. In fact, while the former are required at
            runtime, the latter are required during development.
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Monorepo Architecture</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <Markdown>```Project Structure```</Markdown>
            <Markdown>```@emr-clients namespace```</Markdown>
            <Markdown>```core/components/common```</Markdown>
          </Box>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
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
      <Slide backgroundColor="bgSex">
        <Heading>Styled Components</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>```Components```</Markdown>
          <iframe
            src="https://styled-components.com/"
            style={{ height: 500, width: 600 }}
          ></iframe>
        </FlexBox>
      </Slide>

      {/* Optional */}

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
        <Notes>notorious deployment time</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Bug Reports</Heading>
        <OrderedList>Web: Tap Collector</OrderedList>
        <OrderedList>Mobile: Instabug</OrderedList>
      </Slide>
      {/* Security */}
      <Slide backgroundColor="backgroundColor">
        <Heading>Security</Heading>
        <OrderedList>FaceID, TouchID, Biometric Auth</OrderedList>
        <OrderedList>MFA</OrderedList>
        <OrderedList>VPN</OrderedList>
        <Notes>
          Behind vpm for internal users --- two vpn --- the fact that internal
          users have @forhims.com and clinicians are not. If we they have
          @forhims.com healthcare providers, telemedicine company (faciliator).
          Single sign on. p81 it is either signle signon or indepedently
          managed.com. 300 simultaneous. east of missipisi, west of missispi.
          what albert and petr, they close it geographically binded. clinician
          endpoint nordVPN for p81. --------------- --- pound check doctors
          change their password, database for leaked passwords, we increase the
          requirement of length and we got rid of that, when you change your
          password, it doesn't allow you to add it --------------- backend for
          vpn, downlaod the profile trust it. p81, downloading and independent
          app and seems to be stable. that's looking forward put the backend
          behind the VPN --
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>THE END.</Heading>
        <OrderedList>Questions?</OrderedList>
      </Slide>
    </Deck>
  );
}
export default App;
