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
import Project from "./project/Project";
import { useLocation } from "react-router-dom";
import Crello from "./project/crello/Crello";

function Home() {
  const [comp, setComp] = useState("info");

  const location = useLocation();

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
    <>
      {location.pathname === "/portfolio" && (
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
              <Career handleScroll={handleScroll} scrollToComp={scrollToComp} />
            </Element>
            <Element name={"project"}>
              <Project handleScroll={handleScroll} />
            </Element>
            <Box h={"5vh"}></Box>
          </Box>
        </Flex>
      )}
      {location.pathname === "/portfolio/crello" && <Crello />}
    </>
  );
}

export default Home;
