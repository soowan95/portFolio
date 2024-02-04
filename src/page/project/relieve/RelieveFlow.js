import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

function RelieveFlow() {
  return (
    <>
      <Box className={"desktop-tablet-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          Spring Boot Flow
        </motion.div>
        <motion.div
          style={{
            borderBottom: "1px solid",
            margin: "0 auto",
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <Image
            w={"100%"}
            h={"100%"}
            src={`${process.env.PUBLIC_URL}/img/relieve/relieveflow.png`}
          />
        </motion.div>
      </Box>
      <Box className={"mobile-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          Spring Boot Flow
        </motion.div>
        <motion.div
          style={{
            borderBottom: "1px solid",
            margin: "0 auto",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 2 }}
        >
          <Image
            w={"100%"}
            h={"100%"}
            src={`${process.env.PUBLIC_URL}/img/relieve/relieveflow.png`}
          />
        </motion.div>
      </Box>
    </>
  );
}

export default RelieveFlow;
