import { motion } from "framer-motion";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

function CrelloCapture() {
  return (
    <>
      <Box className={"desktop-tablet-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          Crello
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
        <SimpleGrid columns={2} spacing={10} h={"70vh"}>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              소셜 로그인 & 이메일 인증
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className={"project-detail-capture-box"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/crello/crellocapture1.png`}
              />
            </motion.div>
          </Box>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              드래그 앤 드랍
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className={"project-detail-capture-box"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/crello/crellocapture2.png`}
              />
            </motion.div>
          </Box>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              검색 기능
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className={"project-detail-capture-box"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/crello/crellocapture3.png`}
              />
            </motion.div>
          </Box>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              멤버십
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className={"project-detail-capture-box"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/crello/crellocapture4.png`}
              />
            </motion.div>
          </Box>
        </SimpleGrid>
      </Box>
      <Box className={"mobile-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          Crello
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
        <Box>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            소셜 로그인 & 이메일 인증
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"project-detail-capture-box"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/crello/crellocapture1.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            드래그 앤 드랍
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"project-detail-capture-box"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/crello/crellocapture2.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            검색 기능
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"project-detail-capture-box"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/crello/crellocapture3.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            멤버십
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"project-detail-capture-box"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={`${process.env.PUBLIC_URL}/img/crello/crellocapture4.png`}
            />
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default CrelloCapture;
