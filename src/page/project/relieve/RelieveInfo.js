import { Box, ListItem, SimpleGrid, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

function RelieveInfo() {
  return (
    <>
      <Box className={"desktop-tablet-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          팀 프로젝트 - Relieve
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
              개요
            </motion.div>
            <UnorderedList className={"project-detail-info-box"}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={"project-detail-info"}
              >
                <ListItem>나만의 플레이리스트를 공유하는 사이트</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>음악에 대해서 자유롭게 소통하는 사이트</ListItem>
              </motion.div>
            </UnorderedList>
          </Box>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              기간 / 인원
            </motion.div>
            <UnorderedList className={"project-detail-info-box"}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={"project-detail-info"}
              >
                <ListItem>2023. 11. 27 ~ 2023. 12. 26</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>풀스택 개발자 5인</ListItem>
              </motion.div>
            </UnorderedList>
          </Box>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              핵심 기능
            </motion.div>
            <UnorderedList className={"project-detail-info-box"}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={"project-detail-info"}
              >
                <ListItem>카카오톡 소셜 로그인</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>조회수, 좋아요 순 추천 플레이리스트</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-info"}
              >
                <ListItem>원하는 음원 추가 요청</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className={"project-detail-info"}
              >
                <ListItem>실시간 채팅 기능</ListItem>
              </motion.div>
            </UnorderedList>
          </Box>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              개인 성과
            </motion.div>
            <UnorderedList className={"project-detail-info-box"}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={"project-detail-info"}
              >
                <ListItem>
                  협업을 위해 기획단계에서 설정해야 할 것들 파악
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>Mybatis를 이용한 CRUD 구현</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-info"}
              >
                <ListItem>Oauth 사용 경험</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.7 }}
                className={"project-detail-info"}
              >
                <ListItem>Web Socket 프로토콜에 대한 이해</ListItem>
              </motion.div>
            </UnorderedList>
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
          팀 프로젝트 - Relieve
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
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            개요
          </motion.div>
          <UnorderedList className={"project-detail-info-box"}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>나만의 플레이리스트를 공유하는 사이트</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>음악에 대해서 자유롭게 소통하는 사이트</ListItem>
            </motion.div>
          </UnorderedList>
        </Box>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            기간 / 인원
          </motion.div>
          <UnorderedList className={"project-detail-info-box"}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>2023. 11. 27 ~ 2023. 12. 26</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>풀스택 개발자 5인</ListItem>
            </motion.div>
          </UnorderedList>
        </Box>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            핵심 기능
          </motion.div>
          <UnorderedList className={"project-detail-info-box"}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>카카오톡 소셜 로그인</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>조회수, 좋아요 순 추천 플레이리스트</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>원하는 음원 추가 요청</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>실시간 채팅 기능</ListItem>
            </motion.div>
          </UnorderedList>
        </Box>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={"project-detail-subtitle"}
          >
            개인 성과
          </motion.div>
          <UnorderedList className={"project-detail-info-box"}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>
                협업을 위해 기획단계에서 설정해야 할 것들 파악
              </ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>Mybatis를 이용한 CRUD 구현</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>Oauth 구현 경험</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>Web Socket 프로토콜에 대한 이해</ListItem>
            </motion.div>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}

export default RelieveInfo;
