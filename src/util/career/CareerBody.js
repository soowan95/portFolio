import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CareerBody({ content, children }) {
  const [isClick, setIsClick] = useState(false);

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box className={"career-body"}>
      <Box
        className={"career-body-content"}
        onClick={() => {
          onToggle();
          setIsClick(!isClick);
        }}
      >
        - {content} <FontAwesomeIcon icon={isClick ? faAngleUp : faAngleDown} />
      </Box>
      <Collapse in={isOpen} className={"career-body-content-text"}>
        {children}
      </Collapse>
    </Box>
  );
}

export default CareerBody;
