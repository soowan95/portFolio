import { Box, Flex } from "@chakra-ui/react";
import Info from "./Info";
import About from "./About";
import { Element, scroller } from "react-scroll";
import { useEffect, useState } from "react";
import DesktopTabletNavBar from "../util/DesktopTabletNavBar";
import "../css/Media.css";
import MobileNavBar from "../util/MobileNavBar";
import Skills from "./Skills";
import Career from "./Career";

function Home() {
  const [comp, setComp] = useState("info");

  useEffect(() => {
    sessionStorage.setItem("comp", "info");
  }, []);

  const scrollToComp = (comp) => {
    scroller.scrollTo(comp, {
      duration: 1000,
      delay: 1,
      smooth: "easeInOut",
    });
  };

  const handleScroll = (compName) => {
    sessionStorage.setItem("comp", compName);
    setComp(compName);
  };

  return (
    <Flex>
      <Box className={"mobile-nav-bar"}>
        <MobileNavBar scrollToComp={scrollToComp} />
      </Box>
      <Box bg={"#e1e1e1"} className={"desktop-tablet-nav-bar"}>
        <DesktopTabletNavBar scrollToComp={scrollToComp} />
      </Box>
      <Box className={"content"}>
        <Element name={"info"}>
          <Info handleScroll={handleScroll} />
        </Element>
        <Element name={"about"}>
          <About handleScroll={handleScroll} />
        </Element>
        <Element name={"skills"}>
          <Skills handleScroll={handleScroll} />
        </Element>
        <Element name={"career"}>
          <Career handleScroll={handleScroll} />
        </Element>
        <Box h={"5vh"}></Box>
      </Box>
    </Flex>
  );
}

export default Home;
