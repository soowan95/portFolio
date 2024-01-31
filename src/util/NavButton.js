import { Box } from "@chakra-ui/react";
import UnderLine from "./UnderLine";
import "../css/Media.css";

function NavButton({ comp, text, scrollToComp }) {
  return (
    <>
      <Box
        textAlign={"center"}
        cursor={"pointer"}
        onClick={() => scrollToComp(comp)}
        color={
          sessionStorage.getItem("comp") === comp
            ? "rgba(74,88,225,0.66)"
            : "rgba(0,0,0,0.48)"
        }
        className={"nav-bar-button"}
      >
        {text}
      </Box>
      <UnderLine comp={comp} />
    </>
  );
}

export default NavButton;
