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
  ListItem,
  Slide,
  Quote,
} from "spectacle";
import { TwitterFollowButton, TwitterTweetEmbed } from "react-twitter-embed";

import "./index.css";
import hermes from "./assets/hermes.gif";
import cactus from "./assets/cactus.png";
import uber from "./assets/uber.jpg";
// import dho from "./assets/dho.jpg";

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

const OguzhanLogo = () => {
  return <h3>@omc345 | June 2021</h3>;
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
    <OguzhanLogo />
    <Box padding="1em">
      {slideNumber + 1}/{numberOfSlides}
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide backgroundColor="backgroundColor">
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px" fontSize="110px" color="offwhite">
            React/React Native Web Monorepo
          </Heading>
          <FlexBox>
            <Heading margin="0px" fontSize="h2">
              Oğuzhan Murat Çakmak
            </Heading>
          </FlexBox>
          <Heading margin="0px 32px" fontSize="h3" color="grey">
            Web, iOS, and Android
          </Heading>
          <TwitterFollowButton screenName={"omc345"} />
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Oguzhan Murat Cakmak</Heading>
        <FlexBox flexDirection="row">
          <Image src={uber} width="600"></Image>
          <Box width="50%">
            <UnorderedList>
              <ListItem>Airties</ListItem>
              <ListItem>Mynet</ListItem>
              <ListItem>Uber</ListItem>
              <ListItem>Hims & Hers</ListItem>
            </UnorderedList>
          </Box>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Outline</Heading>
        <UnorderedList>
          <ListItem>Definitions</ListItem>
          <ListItem>Problem</ListItem>
          <ListItem>Opportunity</ListItem>
          <ListItem>Proposal</ListItem>
          <ListItem>Implementation</ListItem>
          <ListItem>Current State</ListItem>
        </UnorderedList>
        <Notes>Read the slide</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Some definitions</Heading>
        <UnorderedList>
          <OrderedList>monorepo: single repository</OrderedList>
          <OrderedList>cross platform app development</OrderedList>
          <OrderedList>React</OrderedList>
          <OrderedList>React Native</OrderedList>
          <OrderedList>Web: Web</OrderedList>
          <OrderedList>
            Native: iOS and Android. In React Native context, they refer as
            native
          </OrderedList>
        </UnorderedList>
        <Notes>- Easier to share code, one source of truth</Notes>
        <Notes>
          Cross-platform application development is about building a single
          application that can run on various operating systems, instead of
          developing different app versions for each platform. *****************
          We have a unique naming in the web technologies. I learned iOS as iOS
          development back in the time I was doing only iOS dev. It turned out
          that they call it native in web terminology. Native applications are
          using only tools provided by operating system vendors such as Apple
          and Google in this case. What cross-platform applications aims is to
          have a one code base to rule them all. It is economically and
          technically ambitions goal and you have to do some trade-offs. Most of
          the cross-platform applications are not solid due to the need
          of************ React -> Declerative, component based, unidirectional
          data flow u olan ve bu componentlerin data degisimine react ettigi bir
          kutuphane
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Hermes</Heading>
        <FlexBox flexDirection="row">
          <Image src={hermes}></Image>
          <Box>
            <UnorderedList>
              <ListItem>Repeated Code</ListItem>
              <ListItem>NPM packages for the rescue</ListItem>
            </UnorderedList>
          </Box>
        </FlexBox>
        <Notes>
          During the project Hermes aka synchronous consultation we're able to
          build quickly for web thanks to the shared component between EMR and
          Store.This was partially thanks to github npm registry. And my attempt
          to have a uniform repository between EMR and CX which I started to
          work on first. I am briefly touching on Cactus.
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Cactus</Heading>
        <FlexBox verticalAlign="center">
          <Image width="1200" src={cactus}></Image>
        </FlexBox>
        <Notes>
          Cactus was an attempt a generally purpose component library shared
          between Store and EMR at the time being. We had to build audio and
          video components which relies on twilio. Instead of building
          seperately for EMR and store, we build once and used it everywhere.I
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
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
          so I started to think about a solution. Since Limited engineering
          resources, we had to innovate and come up with more efficient
          solution.
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Problem: How could we share data layer?</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <UnorderedList>
            Save development hours with shared data layer
          </UnorderedList>
        </FlexBox>
        <Notes>
          State container and networks calls. If we have one source of truth to
          maintain than two or more, it would be huge win
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Why not sharing!?</Heading>

        <UnorderedList>
          <ListItem>Constants</ListItem>
          <ListItem>Forms</ListItem>
          <ListItem>Utils functions</ListItem>
          <ListItem>Components & Styling</ListItem>
          <ListItem>Business logic</ListItem>
          <ListItem>Data fetching</ListItem>
          <ListItem>Libraries</ListItem>
        </UnorderedList>
        <Notes>
          Once shared data layer idea makes sense,We could extend it to{" "}
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Opportunity: Facelift</Heading>
        <OrderedList>Redesigning the EMR with actual *Designers*</OrderedList>
        <Notes>Riley & Bek</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Side Goals</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <UnorderedList>
              <ListItem>At least 80% code sharing</ListItem>
              <ListItem>Type safety</ListItem>
              <ListItem>Hooks</ListItem>
              <ListItem>CSS in JS</ListItem>
              <ListItem>Solid Project Architecture</ListItem>
              <ListItem>Stellar developer experience and efficiency</ListItem>
              <ListItem>Linter rules</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Image src="https://media.giphy.com/media/26FL4BhNXmo8PNLYk/giphy.gif"></Image>
          </Box>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          verticalAlign="center"
        >
          <Box>
            <Heading></Heading>
          </Box>
          <Box>
            <Heading>Kotlin Native/Web</Heading>
            <Heading>React Native Web</Heading>
            <Heading>Flutter</Heading>
          </Box>
          <Box></Box>
          <Notes>
            We considered those three options before we made up our minds.{" "}
          </Notes>
        </FlexBox>
        <Notes></Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Kotlin Native/Web</Heading>
        <FlexBox verticalAlign="center">
          <iframe
            style={{ height: 500, width: 500 }}
            src="https://kotlinlang.org/docs/native-overview.html"
          ></iframe>
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
              src="https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/"
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
            like it is possible thanks to some difficult metro/webpack bundler
            configurations. This post explains how you could accomplish it.
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
          Flutter is cool. The framework renders its own pixel. App and website
          sharing is not possible. it requires to learn new language called dart
          and new ecosystem, their twilio support wasn't solid back then.
        </Notes>
      </Slide>
      {/* Actual work */}
      <Slide
        transitionEffect={fancyTransition}
        backgroundImage={"linear-gradient(to right, #8BB9AE, #C8DEE7)"}
      >
        <Heading>Remember the goals?</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <UnorderedList>
              <ListItem>At least 80% code sharing</ListItem>
              <ListItem>Type safety</ListItem>
              <ListItem>Hooks</ListItem>
              <ListItem>CSS in JS</ListItem>
              <ListItem>Solid Project Architecture</ListItem>
              <ListItem>Stellar developer experience and efficiency</ListItem>
              <ListItem>Linter rules</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Image src="https://media.giphy.com/media/PnnIEAOjAgM85sy5Om/giphy.gif"></Image>
          </Box>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>React Native</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <UnorderedList>Cost-effective</UnorderedList>
            <UnorderedList>Code reuse</UnorderedList>
            <UnorderedList>Performance</UnorderedList>
          </Box>
          <Box>
            <iframe
              style={{ height: 500, width: 600 }}
              src="https://reactnative.dev/"
            ></iframe>
          </Box>
        </FlexBox>
        <Notes>
          move forward with rn. Pretty cool technology. Developed at Facebook
          for their most downloaded iOS app in the universe. Their main goal was
          to increase developer productivity. They first announced it for iOS.
          and build Android later. Historically, iOS first so they have solid
          iOS support. Most of the industry needs CRUD applications if they are
          not game or XR(x reality, AR, VR, MX(mixed reality) or everything in
          between). Airbnb was the first adapter of React and they proved that
          React has capacity to be used in big projects. They adopted react
          native as well. Then removed it because it wasn't good for their use
          case. We don't know for sure but Facebook Marketplace is purely
          written in React Native. Since React Native is using declarative
          syntax of React it has smooth onboarding for people coming from web
          development --- React Native provides you the code reuse service for
          deployment of code on two different platforms such as iOS & Android.
          Because of code reuse service react-native saves up to 40% of the
          total development cost.
          https://shivlab.com/blog/top-features-benefits-of-react-native-in-2020/
        </Notes>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>React Native</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <UnorderedList>Superior Developer Experience</UnorderedList>
            <UnorderedList>Live reload and hot reload</UnorderedList>
            <UnorderedList>React Similar Architecture</UnorderedList>
            <UnorderedList>Huge community support</UnorderedList>
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
          it is pretty big selling point in our organization. ---Scroll down
        </Notes>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>React Native</Heading>
        <FlexBox verticalAlign="center">
          <Image
            width="80%"
            src="https://miro.medium.com/max/1540/1*uHOS6oi74jX54CoZ1hEjCg.png"
          ></Image>
        </FlexBox>
        <Notes>
          The bridge is built in C/C++ and thus, can be run on multiple
          platforms, OS etc... It embeds the Apple JavaScriptCore framework in,
          which exposes APIs to access the actual JavacriptCore VM capabilities.
          Many people use these APIs on the Obj-C and Swift world. But there is
          a C API, and the Obj-C one is actually just a wrapper. With this in
          mind, JavaScript code can be run inside a C/C++ program. It can inject
          variables, functions and declare globals to enhance the JavaScript
          existing code. React Native relies on this kind of magic to make
          JavaScript communicate with the native world and thus trigger actions
          in the C/C++ world. ---- Fabric ve TurboModules kavramları gelecek.
          Sonraki yazımda bu kavramlardan bahsedeceğim.
        </Notes>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>React Native for Web</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <UnorderedList>React Native API on the Web</UnorderedList>
            <UnorderedList>{`<View /> instead of <div />`}</UnorderedList>
            <UnorderedList>{`<Text /> instead of <h1 />`}</UnorderedList>
          </Box>
          <iframe
            src="https://necolas.github.io/react-native-web"
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
            <UnorderedList>useNavigation hook FTW</UnorderedList>
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
            As I told you earlier, React Native web supports react native api
            which includes View and Text. In order to have them on the web, we
            have specify it on our webpack config file. Informally, an
            isomorphism is a map that preserves sets and relations among
            elements. In this context, we call npm packages which can work in
            both native and web as isomorphic packages. Not all the packages
            have this spec so we should do due diligence when we want to
            introduce a package. packages/web/config-overrides.js has many
            examples on how you can introduce metro based packages to webpack
            based configurations
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Patching NPM Packages</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <iframe
              src="https://www.omc345.com/patch/"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
        </FlexBox>
        <Notes>
          There is a library called patch packages. Lets app authors instantly
          make and keep fixes to npm dependencies. It's a vital band-aid for
          those of us living on the bleeding edge.
        </Notes>
      </Slide>
      {/* <Slide backgroundColor="bgSex">
        <Heading>Babel</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <iframe
              src="https://babeljs.io/"
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
      </Slide> */}
      <Slide backgroundColor="bgSex">
        <Heading>Bundler: Metro vs Webpack</Heading>
        <FlexBox verticalAlign="center" justifyContent="space-around">
          <Box>
            <iframe
              src="https://facebook.github.io/metro/"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
          <Box>
            <iframe
              src="https://webpack.js.org"
              style={{ height: 500, width: 600 }}
            ></iframe>
          </Box>
          <Notes>
            A JavaScript bundler is a tool that puts your code and all its
            dependencies together in one JavaScript file. There are many of them
            out there these days, being the most popular ones browserify and
            webpack. ... Historically JavaScript hasn't had a standard for
            requiring dependencies from your code. Module bundlers are tools
            frontend developers used to bundle JavaScript modules into a single
            JavaScript files that can be executed in the browser.
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Monorepo Architecture</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <Markdown>```@emr-clients```</Markdown>
            <OrderedList>./common</OrderedList>
            <OrderedList>./components</OrderedList>
            <OrderedList>./core</OrderedList>
            <OrderedList>mobile</OrderedList>
            <OrderedList>web</OrderedList>
            <OrderedList>assets</OrderedList>
          </Box>
        </FlexBox>
        <Notes>
          Monorepo architecture shares shared npm packages hoisted up to the
          root level. You can still keep npm libraries in local level if it is
          needed. mobile, web and assets don't have namespace since they don't
          have any potential to be an npm library later. common, components, and
          core has namespace as emr-clients which is good. I don't expect core
          to be stand alone since it has all the business logic and data layer
          in it. We didn't seperate redux/redux saga from composite UI Layer
        </Notes>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>@emr-clients/components</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <OrderedList>{`From <Button> to <Modal>`}</OrderedList>
            <OrderedList>{`<Calendar> component was the most nagging`}</OrderedList>
            <OrderedList>{`There is some atomic components and also moleculer component`}</OrderedList>
          </Box>
          <Notes>
            It has all the atomic UI components and some level of mid level
            components. We have variants of button
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>@emr-clients/core</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <OrderedList>{`Pretty much whole application`}</OrderedList>
            <OrderedList>{`Business logic`}</OrderedList>
            <OrderedList>{`Redux-sagas`}</OrderedList>
            <OrderedList>{`Views`}</OrderedList>
            <OrderedList>{`Pages`}</OrderedList>
          </Box>
          <Notes>
            The project uses .web, .native, .ios, .android file extensions.
            Let's say you have a react native specific library such as
            twilio-ios you dont want it to be rendered
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Ducks</Heading>
        <FlexBox verticalAlign="center">
          <Box marginTop={-40}>
            <TwitterTweetEmbed tweetId="1308837176814206977" />
          </Box>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>Ducks (continued)</Heading>
        <FlexBox verticalAlign="center">
          <Image
            height="500"
            src="https://p0.pikist.com/photos/590/144/duck-meet-ducks-rubber-ducks-plastic-ducks-duck-race-competition-toys-yellow-duck-race.jpg"
          ></Image>
        </FlexBox>
        <Notes>
          Basically, instead of seperating files based on their duty, seperating
          them based on the feature so you don't need to look for long hours to
          find a one specific redux action in the file tree
        </Notes>
      </Slide>
      {/* <Slide backgroundColor="bgSex">
        <Heading>Styled Components</Heading>
        <FlexBox justifyContent="space-between">
          <Markdown>Components</Markdown>
          <iframe
            width="560"
            height="515"
            src="https://www.youtube.com/embed/gvGW7sV50yU?autoplay=1&rel=0&showinfo=0&controls=0&autohide=1&modestbranding=1&amp;wmode=transparent"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </FlexBox>
      </Slide> */}
      <Slide backgroundColor="bgSex">
        <Heading>Styled Components</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <UnorderedList>
              <ListItem>Dark/Light Theme</ListItem>
              <ListItem>Spacing</ListItem>
              <ListItem>Colors</ListItem>
              <ListItem>Typography</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <iframe
              width="560"
              height="515"
              src="https://www.youtube.com/embed/Fegz4yCFxAk?autoplay=1&rel=0&showinfo=0&controls=0&autohide=1&modestbranding=1&amp;wmode=transparent"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
          <Notes>
            This is a CSS in JS solution. It doesn't use seperate CSS files. We
            inherited this from sotre.
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="bgSex">
        <Heading>General Performance</Heading>
        <FlexBox justifyContent="space-between">
          <Box>
            <UnorderedList>
              <ListItem>Unwanted UI rerenderings</ListItem>
              <ListItem>react-redux-logger issue</ListItem>
              <ListItem>Mobile app performance</ListItem>
              <ListItem>
                Bridge
                <UnorderedList>
                  <ListItem>External libraries</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Balance between JS and native runtime
                <UnorderedList>
                  <ListItem>Twilio</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>
        </FlexBox>
        <Notes>
          Earlier in the project we had unwanted render each time redux store is
          updated the whole app was rerendering. We use useMemo and reselect to
          overcome performance issue. We had a bizare one on the mobile app. We
          inherited redux logger from web and metro bundler production build
          wasn't removing loggers in the production and mobile was unresponsive
          after going through 2 visits
        </Notes>
      </Slide>
      {/* Optional */}
      {/* Deployments */}
      <Slide backgroundColor="backgroundColor">
        <Heading>Web Deployments</Heading>
        <OrderedList>
          <ListItem>CircleCI & Aptible</ListItem>
          <UnorderedList>
            <ListItem>e2e tests (Cypress)</ListItem>
            <ListItem>CI/CD (Cypress)</ListItem>
            <ListItem>Sentry sourcemaps upload</ListItem>
          </UnorderedList>
          <ListItem>Preview Links -> Netlify</ListItem>
          <UnorderedList>
            <ListItem>
              Links for QA, Staging, and Production Environments
            </ListItem>
          </UnorderedList>
        </OrderedList>
        <Notes>
          Same tooling around deployment with legacy EMR, Store and CX. pretty
          long deployment time which we'll work on the decrease. We'll take care
          of it with the help of the devops team and Santiago. We are running
          pure function tests using github actions. We used a github action
          called LGTM. Our preview links are powered by netlify which is pretty
          neat.
        </Notes>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>Mobile Deployments</Heading>
        <OrderedList>Codepush - OTA</OrderedList>
        <OrderedList>TestFlight</OrderedList>
        <OrderedList>Bitrise</OrderedList>
        <Notes>Codepush -></Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Bug Reports</Heading>
        <OrderedList>Web: Tap Collector</OrderedList>
        <OrderedList>Mobile: Instabug</OrderedList>
        <OrderedList>Both: Sentry</OrderedList>
        <Notes>
          CodePush is a Microsoft library for React Native and Cordova, which
          allows you to launch code and image updates through a proprietary
          server. This will be directly installed without the need for end-users
          to update the application through the relevant app store.
        </Notes>
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
      {/* Preview Links*/}
      <Slide backgroundColor="backgroundColor">
        <Heading>Mobile Preview links</Heading>

        <OrderedList>
          <ListItem>Github Actions</ListItem>
          <UnorderedList>
            <ListItem>Running tests</ListItem>
            <ListItem>Creating mobile preview links</ListItem>
          </UnorderedList>
          {/* <ListItem>Insert Video Here</ListItem> */}
        </OrderedList>
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
        <Heading>THE END</Heading>
        <FlexBox verticalAlign="center">
          <iframe
            src="https://giphy.com/embed/xT5LMB2WiOdjpB7K4o"
            width="480"
            height="362"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </FlexBox>
      </Slide>
    </Deck>
  );
}
export default App;
