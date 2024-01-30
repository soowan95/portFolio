import { Box, Flex, Image } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UnderLine from "../util/UnderLine";

function Home() {
  const location = useLocation();

  const navigate = useNavigate();

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
        <Box
          fontSize={"1.2rem"}
          textAlign={"center"}
          mt={"20px"}
          cursor={"pointer"}
          onClick={() => navigate("/portfolio")}
        >
          home
        </Box>
        <UnderLine pathname={"/portfolio"} />
        <Box
          fontSize={"1.2rem"}
          textAlign={"center"}
          mt={"20px"}
          cursor={"pointer"}
          onClick={() => navigate("/portfolio/about")}
        >
          about
        </Box>
        <UnderLine pathname={"/portfolio/about"} />
      </Box>
      <Box w={"800px"} position={"absolute"} left={"700px"}>
        <Outlet />
      </Box>
    </Flex>
  );
}

export default Home;
