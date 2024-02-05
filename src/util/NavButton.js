import { Box } from "@chakra-ui/react";
import UnderLine from "./csscomp/UnderLine";
import "../css/Media.css";
import { useState } from "react";

function NavButton({ comp, text, scrollToComp }) {
  const [onComp, setOnComp] = useState(null);

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
        onMouseEnter={() => {
          sessionStorage.setItem("onComp", `on${comp}`);
          setOnComp(`on${comp}`);
        }}
        onMouseLeave={() => {
          sessionStorage.removeItem("onComp");
          setOnComp(null);
        }}
      >
        {text}
      </Box>
      <UnderLine comp={comp} />
    </>
  );
}

export default NavButton;
