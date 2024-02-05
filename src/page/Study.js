import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Study({ handleScroll }) {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) handleScroll("study");
  }, [inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: "5%" }}
        whileInView={{ opacity: 1, x: "15%" }}
        transition={{ duration: 1 }}
        style={{
          fontWeight: "bolder",
        }}
        className={"study-header"}
      >
        <Box
          letterSpacing={"5px"}
          fontSize={"1rem"}
          color={"#8a8989"}
          mb={"10px"}
        >
          STUDY
        </Box>
        ✍ 저는 이렇게 학습하고 있습니다.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={"study-body-title"}
      >
        프로그래머스 코딩테스트
      </motion.div>
      <UnorderedList>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            프로그래밍 언어에 익숙해지기 위한 방법으로 코딩테스트를
            선택했습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            처음 코딩테스트를 진행했을 때는 java내장 class의 여러 함수들을 몰라
            어려움을 겪었습니다. 그러나 jdk 17 api 문서를 살펴보며 각 class와
            함수의 사용법을 익히고 실제로 적용해보며 문제를 해결하는 과정을
            거쳤습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            현재는 java 언어로 lv2 문제의 70% 이상 해결했습니다. 이 경험을 통해
            새로운 언어나 프레임워크를 학습할 때의 어려움을 극복하는 방법을
            배웠고, 지속적인 학습과 노력을 통해 실력을 향상시키고 있습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            Java 이외에도 기업에서 요구하는 언어를 학습하기 위해 코딩테스트를
            진행하겠습니다. 이러한 노력을 통해 언어에 구애받지 않고 다양한
            프로젝트와 팀에서 능동적으로 참여하며 기업의 다양한 요구사항에
            대응하겠습니다.
          </ListItem>
        </motion.div>
      </UnorderedList>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={"study-body-title"}
      >
        기록하는 습관
      </motion.div>
      <UnorderedList>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            처음 프로젝트를 진행하며 많은 오류가 발생했지만 기록하지 않아
            프로젝트가 끝난 후 자체 평가를 하는데 어려움이 있었습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            이후 프로젝트를 진행하고 여러 프레임워크와 기술을 독학하는 과정에서
            notion을 이용하여 기록하는 습관을 들였습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            프로젝트 진행 중 발생한 이슈나 해결법, 새로운 기술의 습득 과정 등을
            노트로 남기면서 이를 효과적으로 활용하는 방법에 대한 능력을 키우고
            있습니다. 이러한 기록 습관을 통해 이전의 경험과 학습을 빠르게
            참고하여 발전하겠습니다.
          </ListItem>
        </motion.div>
      </UnorderedList>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={"study-body-title"}
      >
        중앙정보처리학원
      </motion.div>
      <UnorderedList>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            자바(JAVA)기반 풀스택 개발자 취업과정을 수강하며 Java, Spring Boot,
            Javascript, React를 각각 1개월씩 학습했습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            짧은 기간에 많은 언어와 프레임워크를 배웠지만, 그 과정에서 언어의
            다양한 활용법에 대한 경험을 쌓지 못했습니다. 그래서 학원에서의 학습
            시간 이외에도 독학을 통해 깊이 있는 학습을 하기위해 노력했습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            특히 프로젝트 중에는 학원에서 학습한 프레임워크들 외에도 다양한
            경험을 하기 위해 JPA와 Spring Security를 사용했습니다.
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={"study-body-content"}
        >
          <ListItem>
            이러한 경험을 바탕으로 새로운 언어를 학습하는데 있어서 두려움 없이
            도전할 수 있습니다. 새로운 언어를 학습할 때는 이미 경험한 언어와
            비교하며 공통점과 차이점을 파악하여 효율적으로 학습하겠습니다.
          </ListItem>
        </motion.div>
      </UnorderedList>
    </>
  );
}

export default Study;
