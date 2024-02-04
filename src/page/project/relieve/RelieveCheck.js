import {
  Box,
  ListItem,
  OrderedList,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function RelieveCheck() {
  return (
    <>
      <Box className={"desktop-tablet-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          자체 평가
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
        <SimpleGrid columns={2} spacing={10} h={"40vh"}>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={"project-detail-subtitle"}
            >
              발전 / 학습
            </motion.div>
            <UnorderedList className={"project-detail-check-box"}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={"project-detail-check"}
              >
                <ListItem>카카오 로그인을 구현하며 Oauth에 대한 이해</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  실시간 채팅 기능을 구현하며 Web Socket에 대한 이해
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  팀원들과 소통하며 문제를 해결하는 과정에서 협업의 중요성을
                  배움
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className={"project-detail-check"}
              >
                <ListItem>Mybatis를 이용한 CRUD 구현</ListItem>
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
              아쉬운 점
            </motion.div>
            <UnorderedList className={"project-detail-check-box"}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className={"project-detail-check"}
              >
                <ListItem>프로젝트를 기획하며 컨벤션을 설정하지 않음</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  Github을 사용하며 issue를 충분히 활용하지 못함
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-check"}
              >
                <ListItem>프로젝트 중 발생한 오류를 기록하지 않음</ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className={"project-detail-check"}
              >
                <ListItem>반응형 웹사이트 미구현</ListItem>
              </motion.div>
            </UnorderedList>
          </Box>
        </SimpleGrid>
        <Box
          mt={"20px"}
          border={"2px solid rgb(115,120,208)"}
          borderRadius={"10px"}
          bg={"rgba(115,120,208,0.49)"}
        >
          <Box className={"project-detail-subtitle"} mt={"20px"}>
            추후 계획
          </Box>
          <OrderedList className={"project-detail-check-footer"}>
            <ListItem className={"project-detail-check-footer-item"}>
              figjam을 활용하여 보다 가독성이 좋은 기획안 만들기.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              JWT를 통한 인증/인가 구현하기.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              swagger-ui 등 협업을 위한 도구 적극 활용하기.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
      <Box className={"mobile-project-detail"}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={"project-detail-title"}
        >
          자체 평가
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
            발전 / 학습
          </motion.div>
          <UnorderedList className={"project-detail-check-box"}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>Oauth에 대한 이해</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>Web Socket에 대한 이해</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>팀원들과의 소통에 대한 중요성을 배움</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>Mybatis를 이용한 CRUD 구현</ListItem>
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
            아쉬운 점
          </motion.div>
          <UnorderedList className={"project-detail-check-box"}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>기획 단계에서 컨벤션을 설정하지 않음</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>Github 활용 부족</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>발생한 오류에 대해 기록하지 않음</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>반응형 웹사이트 미구현</ListItem>
            </motion.div>
          </UnorderedList>
        </Box>
        <Box
          mt={"20px"}
          mb={"50px"}
          border={"2px solid rgb(115,120,208)"}
          borderRadius={"10px"}
          bg={"rgba(115,120,208,0.49)"}
        >
          <Box className={"project-detail-subtitle"} mt={"10px"}>
            추후 계획
          </Box>
          <OrderedList className={"project-detail-check-footer"}>
            <ListItem className={"project-detail-check-footer-item"}>
              figjam을 활용하여 보다 가독성이 좋은 기획안 만들기.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              JWT를 통한 인증/인가 구현하기.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              swagger-ui 등 협업을 위한 도구 적극 활용하기.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
    </>
  );
}

export default RelieveCheck;
