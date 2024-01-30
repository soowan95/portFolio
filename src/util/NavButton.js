import { Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import UnderLine from "./UnderLine";

function NavButton({ pathname, text }) {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <Box
        fontSize={"1.2rem"}
        textAlign={"center"}
        mt={"30px"}
        cursor={"pointer"}
        onClick={() => navigate(pathname)}
        color={
          location.pathname === pathname || location.pathname === pathname + "/"
            ? "blue"
            : "black"
        }
      >
        {text}
      </Box>
      <UnderLine pathname={pathname} />
    </>
  );
}

export default NavButton;
