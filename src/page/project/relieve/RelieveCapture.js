import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

function RelieveCapture() {
  return (
    <>
      <Box className={"desktop-tablet-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          Relieve
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
              카카오 로그인
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
                src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture1.png`}
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
              추천 플레이리스트
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
                src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture2.png`}
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
              음원 추가 요청
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
                src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture3.png`}
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
              실시간 채팅
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
                src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture4.png`}
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
            카카오 로그인
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
              src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture1.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            추천 플레이리스트
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
              src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture2.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            음원 추가 요청
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
              src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture3.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            실시간 채팅
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
              src={`${process.env.PUBLIC_URL}/img/relieve/relievecapture4.png`}
            />
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default RelieveCapture;
