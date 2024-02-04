import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

function CareerContent({
  duration,
  content,
  scrollToComp,
  comp,
  scrollToCenter,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: -20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2 }}
      className={"career-header-box-content"}
    >
      <Flex>
        <Box className={"career-header-box-duration"}>- {duration}</Box>
        <motion.div
          whileHover={{ y: -10, cursor: "pointer" }}
          transition={{ duration: 1 }}
          onClick={() => {
            if (comp) scrollToComp(comp);
            else scrollToCenter();
          }}
        >
          {content}
          <span style={{ marginLeft: "10px" }}>
            <FontAwesomeIcon icon={faHandPointer} />
          </span>
        </motion.div>
      </Flex>
    </motion.div>
  );
}

export default CareerContent;
