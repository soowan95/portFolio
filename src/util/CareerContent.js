import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";

function CareerContent({ duration, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: -20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2 }}
      className={"career-header-box-content"}
    >
      <Flex>
        <Box w={"200px"}>- {duration}</Box>
        <Box>{content}</Box>
      </Flex>
    </motion.div>
  );
}

export default CareerContent;
