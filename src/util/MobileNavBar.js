import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DesktopTabletNavBar from "./DesktopTabletNavBar";

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
        zIndex={2}
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
        <DrawerContent bg={"#e1e1e1"}>
          <DesktopTabletNavBar scrollToComp={scrollToComp} />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNavBar;
