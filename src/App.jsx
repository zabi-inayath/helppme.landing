import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import SplitText from "./page animations/SplitText";
import BlurText from "./page animations/BlurText";
import TextPressure from "./page animations/Textpressure";
import RotatingText from "./page animations/RotatingText";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import VariableProximity from "./page animations/Variable";
import TrueFocus from "./page animations/TrueFocus";


const PageOne = () => (
  <motion.div
    className="flex items-center justify-center h-screen bg-cream"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.img
      src="https://res.cloudinary.com/dhcfcubwa/image/upload/v1742617856/logo_p0irkv.svg"
      alt="Logo"
      className="w-64 h-64 sm:w-100 sm:h-100" // Responsive logo size
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.9, 0, 0.4, 1]
      }}
      whileHover={{
        scale: 1.1
      }}
    />
  </motion.div>
);

const PageTwo = () => (
  <div className="flex items-center justify-center h-screen bg-[#3B41EF]">
    <SplitText
      text="Hello, Ambur!"
      className="text-4xl sm:text-6xl lg:text-8xl font-semibold text-center text-[#FFFBE7]" // Responsive text size
      delay={80}
      animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
    />
  </div>
);

const PageThree = () => (
  <div className="flex items-center justify-center h-screen bg-cream">
    <BlurText
      text="We're Almost there"
      delay={80}
      animateBy="words"
      direction="top"
      className="text-4xl sm:text-6xl lg:text-8xl text-[#3B41EF] text-center" // Responsive text size
    />
  </div>
);

const PageFour = () => {
  const containerRef = useRef(null);
  return (
    <div className="snap-start h-screen relative bg-[#3B41EF]">
      <h1
        className="absolute text-5xl mt-8 sm:text-5xl lg:text-9xl text-white text-center px-4" // Adjusted for mobile responsiveness
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2
        }}
      >
        Registrations <br /> from
      </h1>
      <div className="items-center justify-center text-white">
        <TrueFocus
          sentence="Ambur's first public utility platform to open"
          manualMode={false}
          blurAmount={4}
          borderColor="#FF5B22"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
      </div>
    </div>
  );
};

const PageFive = () => (
  <div className="flex items-center justify-center h-screen bg-cream">
    <TextPressure
      text="April"
      flex={true}
      alpha={false}
      stroke={false}
      width={true}
      weight={true}
      italic={true}
      textColor="#3B41EF"
      strokeColor="#ff0000"
      minFontSize={20}
      maxFontSize={100}
      className="flex items-center justify-center text-center h-full w-full text-4xl sm:text-6xl lg:text-8xl"
    />
  </div>
);

const PageSix = () => (
  <div className="bg-[#3B41EF]">
    <div className="flex flex-col items-center justify-center h-screen bg-[#3B41EF]">
      <LayoutGroup>
        <motion.div
          className="flex flex-col sm:flex-row items-center" // Stack on mobile, row on larger screens
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        >
          <motion.span
            className="text-4xl sm:text-6xl lg:text-8xl text-white text-center mb-4 sm:mb-0 sm:mr-5" // Responsive text size
            layout
          >
            Follow us on
          </motion.span>
          <motion.div
            className="bg-[#FFFBE7] text-[#3B41EF] px-4 py-2 rounded-lg"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            <RotatingText
              texts={["Instagram", "Facebook", "Twitter", "LinkedIn"]}
              mainClassName="text-2xl sm:text-4xl lg:text-6xl overflow-hidden mt-3 mx-2" // Responsive text size
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div>
        </motion.div>
        <div className="mt-8">
          <a
            href="https://www.instagram.com/helppme.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dhcfcubwa/image/upload/v1742615129/Group_91_mkmagg.svg"
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 mr-8" // Responsive icon size
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dhcfcubwa/image/upload/v1742615223/Group_92_oceswr.svg"
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 mr-8" // Responsive icon size
              alt="Facebook"
            />
          </a>
          <a
            href="https://in.linkedin.com/company/helppme-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dhcfcubwa/image/upload/v1742615252/Group_93_ubnvhn.svg"
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 mr-8" // Responsive icon size
              alt="Twitter"
            />
          </a>
          <a
            href="https://x.com/HelppmeIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dhcfcubwa/image/upload/v1742615300/Group_94_ijlnud.svg"
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 mr-8" // Responsive icon size
              alt="LinkedIn"
            />
          </a>
        </div>
      </LayoutGroup>
    </div>
    <h1 className="text-[#FFFBE7] text-sm sm:text-lg DXRigraf-Thin text-center">
      All rights reserved helppme.in 2025
    </h1>
  </div>
);

const App = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <div className="snap-start">
        <PageOne />
      </div>
      <div className="snap-start">
        <PageTwo />
      </div>
      <div className="snap-start">
        <PageThree />
      </div>
      <div className="snap-start">
        <PageFour />
      </div>
      <div className="snap-start">
        <PageFive />
      </div>
      <div className="snap-start">
        <PageSix />
      </div>
    </div>
  );
};

export default App;
