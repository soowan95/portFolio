import { Box } from "@chakra-ui/react";
import UnderLine from "./UnderLine";

function NavButton({ comp, text, scrollToComp }) {
  return (
    <>
      <Box
        fontSize={"1.2rem"}
        textAlign={"center"}
        mt={"30px"}
        cursor={"pointer"}
        onClick={() => scrollToComp(comp)}
        color={
          sessionStorage.getItem("comp") === comp
            ? "rgba(74,88,225,0.66)"
            : "rgba(0,0,0,0.48)"
        }
      >
        {text}
      </Box>
      <UnderLine comp={comp} />
    </>
  );
}

export default NavButton;
