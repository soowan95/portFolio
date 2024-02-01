import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";

function CareerContent({ duration, content, scrollToComp, comp }) {
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
          onClick={() => scrollToComp(comp)}
        >
          {content}
        </motion.div>
      </Flex>
    </motion.div>
  );
}

export default CareerContent;
