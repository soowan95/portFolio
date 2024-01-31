import { Box, Flex } from "@chakra-ui/react";
import Info from "./Info";
import About from "./About";
import { Element, scroller } from "react-scroll";
import { useEffect, useState } from "react";
import DesktopTabletNavBar from "../util/DesktopTabletNavBar";
import "../css/Media.css";
import MobileNavBar from "../util/MobileNavBar";

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
    } else {
      sessionStorage.setItem("comp", "about");
      setComp("about");
    }
  };

  return (
    <Flex>
      <Box className={"mobile-nav-bar"}>
        <MobileNavBar scrollToComp={scrollToComp} />
      </Box>
      <Box bg={"#b9b7b7"} className={"desktop-tablet-nav-bar"}>
        <DesktopTabletNavBar scrollToComp={scrollToComp} />
      </Box>
      <Box className={"content"}>
        <Element name={"info"}>
          <Info />
        </Element>
        <Element name={"about"}>
          <About />
        </Element>
        <Box h={"5vh"}></Box>
      </Box>
    </Flex>
  );
}

export default Home;
