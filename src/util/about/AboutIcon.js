import { Box } from "@chakra-ui/react";
import "../../css/Media.css";

function AboutIcon({ children, text, color }) {
  return (
    <Box
      bg={color}
      borderRadius={"10px"}
      w={"100%"}
      h={"100%"}
      border={`1px solid ${color}`}
      position={"relative"}
    >
      <Box
        fontSize={"4.5rem"}
        w={"100%"}
        h={"100%"}
        position={"absolute"}
        textAlign={"center"}
        lineHeight={"100px"}
        color={"white"}
        opacity={0.5}
      >
        {children}
      </Box>
      <Box
        fontSize={"1.5rem"}
        w={"100%"}
        h={"100%"}
        position={"absolute"}
        textAlign={"center"}
        lineHeight={"100px"}
        fontWeight={"bolder"}
        color={"#565656"}
      >
        {text}
      </Box>
    </Box>
  );
}

export default AboutIcon;
