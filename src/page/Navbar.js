import { Box, Image } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box w="300px" h={"100vh"} bg={"#b9b7b7"} position={"fixed"} left={"400px"}>
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
      <Box textAlign={"center"}>Back end developer</Box>
    </Box>
  );
}

export default Navbar;
