import { motion } from "framer-motion";
import {
  Box,
  ListItem,
  OrderedList,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";

function CrelloCheck() {
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
                <ListItem>
                  axios interceptor을 사용하며 cors에 대해 학습
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  JWT를 통한 인증/인가를 구현하며 spring boot의 동작 방식에 대한
                  이해가 높아짐
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  pathvariable에 #으로 시작하는 변수를 사용하려 시도하며 dns에
                  대해 학습함
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  프로젝트를 진행하면서 생긴 오류들을 기록하는 습관이 생김
                </ListItem>
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
                <ListItem>
                  1인 프로젝트를 진행하여 협업을 더 경험해 보고 싶다는 생각을 함
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  충분한 학습을 하지 않고 spring security를 사용하여 많은 오류를
                  경험
                </ListItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className={"project-detail-check"}
              >
                <ListItem>
                  인증/인가를 위해 인메모리db를 사용하려 했지만 이해도 부족으로
                  실패
                </ListItem>
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
              프로젝트를 시작하기 전 기획 기간을 길게 설정하여 사용 기술들을
              충분히 학습.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              단위 테스트와 통합 테스트를 진행하여 프로젝트의 완성도를 높이기.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              인메모리db를 학습하여 실무적인 인증/인가 서비스를 구현.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              Github action을 활용한 ci/cd 구현.
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
              <ListItem>cors에 대해 학습</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>spring boot의 동작 방식에 대한 이해가 높아짐</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>dns에 대해 학습함</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>
                프로젝트를 진행하면서 생긴 오류들을 기록하는 습관이 생김
              </ListItem>
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
              <ListItem>협업에 대해 더 경험해 보고싶음</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>spring security에 대한 학습 미흡</ListItem>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={"project-detail-check"}
            >
              <ListItem>
                인메모리db를 사용하려 했지만 이해도 부족으로 실패
              </ListItem>
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
              프로젝트를 시작하기 전 기획 기간을 길게 설정하여 사용 기술들을
              충분히 학습.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              단위 테스트와 통합 테스트를 진행하여 프로젝트의 완성도를 높이기.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              인메모리db를 학습하여 실무적인 인증/인가 서비스를 구현.
            </ListItem>
            <ListItem className={"project-detail-check-footer-item"}>
              Github action을 활용한 ci/cd 구현.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
    </>
  );
}

export default CrelloCheck;
