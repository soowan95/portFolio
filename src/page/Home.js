import { Box, Flex, Image } from "@chakra-ui/react";
import NavButton from "../util/NavButton";
import Info from "./Info";
import About from "./About";
import { scroller, Element } from "react-scroll";
import { useEffect, useState } from "react";

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
      <Box
        w="300px"
        h={"100vh"}
        bg={"#b9b7b7"}
        position={"fixed"}
        left={"400px"}
      >
        <Box
          borderRadius={"100%"}
          w={"150px"}
          h={"150px"}
          m={"50px auto"}
          overflow={"hidden"}
        >
          <Image src={`${process.env.PUBLIC_URL}/img/photo.jpg`} />
        </Box>
        <Box
          fontSize={"2rem"}
          textAlign={"center"}
          mt={"-20px"}
          fontFamily={"serif"}
          fontWeight={"bolder"}
        >
          김수완
        </Box>
        <Box textAlign={"center"} fontSize={"1.5rem"}>
          Back end developer
        </Box>
        <NavButton comp={"info"} text={"home"} scrollToComp={scrollToComp} />
        <NavButton comp={"about"} text={"about"} scrollToComp={scrollToComp} />
      </Box>
      <Box w={"800px"} position={"absolute"} left={"700px"}>
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
