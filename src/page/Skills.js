import { motion } from "framer-motion";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Progress from "../util/Progress";

function Skills() {
  return (
    <Box position={"relative"}>
      <motion.div
        initial={{ opacity: 0, x: "5%" }}
        whileInView={{ opacity: 1, x: "15%" }}
        transition={{ duration: 1 }}
        style={{
          fontWeight: "bolder",
        }}
        className={"skills-header"}
      >
        <Box
          letterSpacing={"5px"}
          fontSize={"1rem"}
          color={"#8a8989"}
          mb={"10px"}
        >
          SKILLS
        </Box>
        ❕ 제가 사용할 수 있는 기술들은 이렇습니다.
      </motion.div>
      {/* 공간 채우기용 */}
      <Box className={"skills-body-spacing"}>
        <SimpleGrid columns={2} spacing={10}>
          <Box className={"skills-block"}></Box>
          <Box className={"skills-block"}></Box>
          <Box className={"skills-block"}></Box>
          <Box className={"skills-block"}></Box>
          <Box className={"skills-block"}></Box>
          <Box className={"skills-block"}></Box>
        </SimpleGrid>
      </Box>
      {/* 공간 채우기용 */}
      <Box position={"absolute"} bottom={0} className={"skills-body-progress"}>
        <SimpleGrid columns={2} spacing={10}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Box>JAVA</Box>
            <Progress color={"#0073bc"} progress={"70%"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Box>SPRING</Box>
            <Progress color={"#69bc4d"} progress={"50%"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Box>JAVASCRIPT</Box>
            <Progress color={"#f0db4e"} progress={"40%"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Box>REACT</Box>
            <Progress color={"#00d8fe"} progress={"40%"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Box>JAVA</Box>
            <Progress color={"blue"} progress={"70%"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Box>JAVA</Box>
            <Progress color={"blue"} progress={"70%"} />
          </motion.div>
        </SimpleGrid>
      </Box>
      <Box position={"absolute"} bottom={0} className={"skills-body-progress"}>
        <SimpleGrid columns={2} spacing={10}>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 0, x: "-10%" }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/javalogo.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 0, x: "10%" }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/springbootlogo.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 0, x: "-10%" }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/javascriptlogo.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 0, x: "10%" }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/reactlogo.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 0, x: "-10%" }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            asdf
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 0, x: "10%" }}
            transition={{ duration: 1, delay: 1 }}
            className={"skills-block"}
          >
            asdf
          </motion.div>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Skills;
