import { Box, Image } from "@chakra-ui/react";
import NavButton from "./NavButton";

function DesktopTabletNavBar({ scrollToComp }) {
  return (
    <>
      <Box
        borderRadius={"100%"}
        overflow={"hidden"}
        className={"nav-bar-photo"}
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
      <Box textAlign={"center"} className={"nav-bar-info"}>
        Back end developer
      </Box>
      <NavButton comp={"info"} text={"home"} scrollToComp={scrollToComp} />
      <NavButton comp={"about"} text={"about"} scrollToComp={scrollToComp} />
      <NavButton comp={"skills"} text={"skills"} scrollToComp={scrollToComp} />
    </>
  );
}

export default DesktopTabletNavBar;
