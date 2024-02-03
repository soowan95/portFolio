import { motion } from "framer-motion";
import { Box, ListItem, SimpleGrid, UnorderedList } from "@chakra-ui/react";

function CrelloInfo() {
  return (
    <>
      <Box className={"desktop-tablet-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          1인 프로젝트 - Crello
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
                <ListItem>
                  일정을 편하게 관리하고 공유할 수 있는 사이트
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>trello 클론 코딩</ListItem>
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
                <ListItem>2024. 01 .02 ~ 2024. 01. 19</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>1인 프로젝트</ListItem>
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
                <ListItem>
                  카카오톡, 네이버 소셜 로그인 & 이메일 인증 기능
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>드래그 앤 드랍으로 손쉬운 일정 관리</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-info"}
              >
                <ListItem>닉네임, 해시코드로 검색 가능</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className={"project-detail-info"}
              >
                <ListItem>멤버십 구매로 추가 board 사용 가능</ListItem>
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
                <ListItem>Spring Security 구현 경험</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-info"}
              >
                <ListItem>JWT를 이용한 인증/인가 경험</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-info"}
              >
                <ListItem>JPA를 통해 orm 경험</ListItem>
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
          1인 프로젝트 - Crello
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
              <ListItem>일정을 편하게 관리하고 공유할 수 있는 사이트</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>trello 클론 코딩</ListItem>
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
              <ListItem>2024. 01 .02 ~ 2024. 01. 19</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>1인 프로젝트</ListItem>
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
              <ListItem>
                카카오톡, 네이버 소셜 로그인 & 이메일 인증 기능
              </ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>드래그 앤 드랍으로 손쉬운 일정 관리</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>닉네임, 해시코드로 검색 가능</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>멤버십 구매로 추가 board 사용 가능</ListItem>
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
              <ListItem>Spring Security 구현 경험</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>JWT를 이용한 인증/인가 경험</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-info"}
            >
              <ListItem>JPA를 통해 orm 경험</ListItem>
            </motion.div>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}

export default CrelloInfo;
