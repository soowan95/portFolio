import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";

function MobileNavBar({ scrollToComp }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box
        ref={btnRef}
        onClick={onOpen}
        position={"fixed"}
        top={"20px"}
        left={"30px"}
      >
        <FontAwesomeIcon icon={faBars} />
      </Box>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={"left"}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#b9b7b7"}>
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
          <NavButton
            comp={"about"}
            text={"about"}
            scrollToComp={scrollToComp}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNavBar;
