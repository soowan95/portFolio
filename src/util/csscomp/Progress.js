import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

function Progress({ progress, color }) {
  return (
    <Box w={"100%"}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{
          paddingLeft: progress,
          marginLeft: "-5%",
          color: color,
          fontWeight: "bolder",
        }}
      >
        {progress}
      </motion.div>
      <Box
        borderRadius={"5px"}
        h={"7px"}
        border={"1px solid #ccc"}
        bg={"#f1f0f0"}
        overflow={"hidden"}
      >
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            borderRadius: "5px",
            background: color,
            border: `1px solid ${color}`,
            height: "100%",
            width: progress,
          }}
        />
      </Box>
    </Box>
  );
}

export default Progress;
