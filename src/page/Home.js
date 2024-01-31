import { Box, Flex } from "@chakra-ui/react";
import Info from "./Info";
import About from "./About";
import { Element, scroller } from "react-scroll";
import { useEffect, useState } from "react";
import DesktopTabletNavBar from "../util/DesktopTabletNavBar";
import "../css/Media.css";
import MobileNavBar from "../util/MobileNavBar";
import Skills from "./Skills";

function Home() {
  const [comp, setComp] = useState("info");

  useEffect(() => {
    sessionStorage.setItem("comp", "info");
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  const scrollToComp = (comp) => {
    scroller.scrollTo(comp, {
      duration: 1000,
      delay: 1,
      smooth: "easeInOut",
    });
  };

  const handlescroll = () => {
    const scrollPosotion = window.scrollY;
    console.log("Scroll Position: " + scrollPosotion);

    if (scrollPosotion < 500) {
      sessionStorage.setItem("comp", "info");
      setComp("info");
    } else if (scrollPosotion < 1600) {
      sessionStorage.setItem("comp", "about");
      setComp("about");
    } else {
      sessionStorage.setItem("comp", "skills");
      setComp("skills");
    }
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
          <Info />
        </Element>
        <Element name={"about"}>
          <About />
        </Element>
        <Element name={"skills"}>
          <Skills />
        </Element>
        <Box h={"5vh"}></Box>
      </Box>
    </Flex>
  );
}

export default Home;
