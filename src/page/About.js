import { motion } from "framer-motion";
import { Box, Button, Collapse, Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function About() {
  const [index, setIndex] = useState(0);

  const toggle1 = useDisclosure();
  const toggle2 = useDisclosure();
  const toggle3 = useDisclosure();

  return (
    <>
      {(index === 0 || index === 1) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: "85%",
            marginLeft: "15%",
            marginTop: index === 0 ? "200px" : "100px",
          }}
          onClick={() => {
            toggle1.onToggle();
            setIndex(1);
          }}
        >
          <Box fontSize={"1.8rem"} fontWeight={"bolder"}>
            1️⃣ 저는 개인보다 팀을 중시하는 사람입니다. <br />
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "100",
                marginLeft: "40px",
              }}
            >
              - 팀으로 운영되는 헬스 트레이너 팀, 특전부대 장교 출신!
            </span>
          </Box>
        </motion.div>
      )}
      <Collapse
        in={toggle1.isOpen}
        transition={{ exit: { duration: 0 }, enter: { duration: 2 } }}
        style={{ width: "85%", marginLeft: "15%", marginTop: "30px" }}
      >
        <Box fontWeight={"bolder"}>
          팀원들과의 소통과 협력을 배운 2년간의 군 생활.
        </Box>
        <Flex mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box fontSize={"1.1rem"}>
            7공수 특전여단 장교 출신으로 2년간의 팀 생활을 통해 내가 소속된
            집단의 발전을 <br /> 위해 노력해오며 내가 집단을 위해 할 일이
            무엇인지 많은 생각을 했습니다.
          </Box>
        </Flex>
        <Flex mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box fontSize={"1.1rem"}>
            외부 훈련이 많았던 부대인만큼 훈련 전에 팀원들과의 소통과 협력을
            통해 임무를 <br /> 완수하는 것이 핵심이었습니다.
          </Box>
        </Flex>
        <Flex mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box fontSize={"1.1rem"}>
            군 생활의 이러한 경험은 팀 프로젝트를 진행하면서 팀원들의 다양한
            의견을 수용하고 효과적으로 팀 혐업을 이끌어내는데 큰 도움이
            됐습니다.
          </Box>
        </Flex>
        <Box fontWeight={"bolder"} mt={"30px"}>
          코로나라는 역경을 극복했던 트레이너 시절.
        </Box>
        <Flex mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box fontSize={"1.1rem"}>
            이전 직장에서의 힘들었던 시기는 저에게 적응력과 팀워크를 키우는 좋은
            계기가 <br /> 됐습니다.
          </Box>
        </Flex>
        <Flex mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box fontSize={"1.1rem"}>
            힘들었던 시기를 극복하고자 매주 월요일 오전에 팀원끼리 모여 공부한
            내용들을 <br /> 공유하고 각자의 노하우를 배우며 노력했습니다.
          </Box>
        </Flex>
        <Flex mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box fontSize={"1.1rem"}>
            이렇듯 저는 당장의 어려움에 주저앉기보단 조직을 바라보며 팀원들과의
            충분한 <br /> 소통과 협력을 통해 제가 목표한 바를 이뤄가는
            사람입니다.
          </Box>
        </Flex>
      </Collapse>
      {(index === 0 || index === 2) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ width: "85%", marginLeft: "15%", marginTop: "100px" }}
          onClick={() => {
            toggle2.onToggle();
            setIndex(2);
          }}
        >
          <Box fontSize={"1.8rem"} fontWeight={"bolder"}>
            2️⃣ 저는 긍정적이고 책임감이 투철한 사람입니다. <br />
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "100",
                marginLeft: "40px",
              }}
            >
              - 좌우명 : 긍정적인 사고가 긍정적인 결과를 만든다!
            </span>
          </Box>
        </motion.div>
      )}
      <Collapse
        in={toggle2.isOpen}
        transition={{ exit: { duration: 0 }, enter: { duration: 2 } }}
      >
        <Box>asdf</Box>
      </Collapse>
      {(index === 0 || index === 3) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ width: "85%", marginLeft: "15%", marginTop: "100px" }}
          onClick={() => {
            toggle3.onToggle();
            setIndex(3);
          }}
        >
          <Box fontSize={"1.8rem"} fontWeight={"bolder"}>
            3️⃣ 입사 후에 더욱 발전하는 제가 되겠습니다. <br />
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "100",
                marginLeft: "40px",
              }}
            >
              - 개인의 발전이 곧 조직의 발전이다!
            </span>
          </Box>
        </motion.div>
      )}
      <Collapse
        in={toggle3.isOpen}
        transition={{ exit: { duration: 0 }, enter: { duration: 2 } }}
      >
        <Box>asdf</Box>
      </Collapse>
      {index !== 0 && (
        <Button
          onClick={() => {
            if (index === 1) toggle1.onToggle();
            else if (index === 2) toggle2.onToggle();
            else toggle3.onToggle();
            setIndex(0);
          }}
          position={"absolute"}
          top={"80vh"}
          right={0}
        >
          뒤로가기
        </Button>
      )}
    </>
  );
}

export default About;
