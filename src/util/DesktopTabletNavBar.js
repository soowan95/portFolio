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
      <Box className={"nav-bar-name"}>김수완</Box>
      <Box textAlign={"center"} className={"nav-bar-info"} color={"black"}>
        Back end developer
      </Box>
      <NavButton comp={"info"} text={"home"} scrollToComp={scrollToComp} />
      <NavButton comp={"about"} text={"about"} scrollToComp={scrollToComp} />
      <NavButton comp={"skills"} text={"skills"} scrollToComp={scrollToComp} />
      <NavButton comp={"career"} text={"career"} scrollToComp={scrollToComp} />
      <NavButton
        comp={"project"}
        text={"project"}
        scrollToComp={scrollToComp}
      />
      <NavButton comp={"study"} text={"study"} scrollToComp={scrollToComp} />
    </>
  );
}

export default DesktopTabletNavBar;
