import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

function RelieveSkill() {
  return (
    <>
      <Box className={"desktop-tablet-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          기술 스택
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
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={"project-detail-subtitle"}
        >
          Back End
        </motion.div>
        <Flex className={"project-detail-skill-box"}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={"project-detail-skill"}
          >
            JDK 17,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className={"project-detail-skill"}
          >
            Spring Boot 3.x,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className={"project-detail-skill"}
          >
            Mybatis 3
          </motion.div>
        </Flex>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={"project-detail-subtitle"}
        >
          Front End
        </motion.div>
        <Flex className={"project-detail-skill-box"}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={"project-detail-skill"}
          >
            React,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className={"project-detail-skill"}
          >
            npm
          </motion.div>
        </Flex>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={"project-detail-subtitle"}
        >
          Database
        </motion.div>
        <Flex className={"project-detail-skill-box"}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={"project-detail-skill"}
          >
            Mariadb
          </motion.div>
        </Flex>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={"project-detail-subtitle"}
        >
          Server / Deployment
        </motion.div>
        <Flex className={"project-detail-skill-box"}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={"project-detail-skill"}
          >
            Nginx,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className={"project-detail-skill"}
          >
            AWS EC2,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className={"project-detail-skill"}
          >
            AWS RDS,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className={"project-detail-skill"}
          >
            AWS S3
          </motion.div>
        </Flex>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={"project-detail-subtitle"}
        >
          Collaborations
        </motion.div>
        <Flex className={"project-detail-skill-box"}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={"project-detail-skill"}
          >
            Git,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className={"project-detail-skill"}
          >
            Figma
          </motion.div>
        </Flex>
      </Box>
      <Box className={"mobile-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginTop: "50px" }}
          className={"project-detail-title"}
        >
          기술 스택
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
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-subtitle"}
        >
          Back End
        </motion.div>
        <SimpleGrid
          columns={2}
          spacing={5}
          className={"project-detail-skill-box"}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={"project-detail-skill"}
          >
            JDK 17
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={"project-detail-skill"}
          >
            Spring Boot 3.x
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={"project-detail-skill"}
          >
            Mybatis 3
          </motion.div>
        </SimpleGrid>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-subtitle"}
        >
          Front End
        </motion.div>
        <SimpleGrid
          columns={2}
          spacing={10}
          className={"project-detail-skill-box"}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={"project-detail-skill"}
          >
            React
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={"project-detail-skill"}
          >
            npm
          </motion.div>
        </SimpleGrid>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-subtitle"}
        >
          Database
        </motion.div>
        <SimpleGrid
          columns={2}
          spacing={10}
          className={"project-detail-skill-box"}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={"project-detail-skill"}
          >
            Mariadb
          </motion.div>
        </SimpleGrid>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-subtitle"}
        >
          Server / Deployment
        </motion.div>
        <SimpleGrid
          columns={2}
          spacing={10}
          className={"project-detail-skill-box"}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={"project-detail-skill"}
          >
            Nginx
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={"project-detail-skill"}
          >
            AWS EC2
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={"project-detail-skill"}
          >
            AWS RDS
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={"project-detail-skill"}
          >
            AWS S3
          </motion.div>
        </SimpleGrid>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-subtitle"}
        >
          Collaborations
        </motion.div>
        <SimpleGrid
          columns={2}
          spacing={10}
          className={"project-detail-skill-box"}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={"project-detail-skill"}
          >
            Git
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={"project-detail-skill"}
          >
            Figma
          </motion.div>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default RelieveSkill;
