import { motion } from "framer-motion";
import { Box, Collapse, Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faPersonPraying,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Media.css";
import { useInView } from "react-intersection-observer";
import AboutIcon from "../util/AboutIcon";
import { faFaceLaughBeam } from "@fortawesome/free-regular-svg-icons";

function About({ handleScroll }) {
  const [index, setIndex] = useState(0);

  const toggle1 = useDisclosure();
  const toggle2 = useDisclosure();
  const toggle3 = useDisclosure();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) handleScroll("about");
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
        className={"about-header"}
      >
        <Box
          letterSpacing={"5px"}
          fontSize={"1rem"}
          color={"#8a8989"}
          mb={"10px"}
        >
          ABOUT ME
        </Box>
        ❔ 저는 이런 사람입니다.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={() => {
          if (index === 2) toggle2.onToggle();
          else if (index === 3) toggle3.onToggle();
          toggle1.onToggle();
          if (index === 1) setIndex(0);
          else setIndex(1);
        }}
        className={"about-body"}
      >
        <Box
          fontWeight={"bolder"}
          bg={index === 1 ? "rgba(0,0,0,0.1)" : "white"}
          className={"about-body-title"}
        >
          1️⃣ 저는 개인보다 팀을 중시하는 사람입니다. <br />
          <span className={"about-body-semi-title"}>
            - 팀으로 운영되는 헬스 트레이너 팀, 특전부대 장교 출신!
          </span>
        </Box>
      </motion.div>
      <Collapse
        in={toggle1.isOpen}
        transition={{ exit: { duration: 1 }, enter: { duration: 1 } }}
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderTop: "none",
        }}
        className={"about-body-content"}
      >
        <Box pl={"5px"} fontWeight={"bolder"}>
          팀원들과의 소통과 협력을 배운 2년간의 군 생활.
        </Box>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            7공수 특전여단 장교 출신으로 2년간의 팀 생활을 통해 내가 소속된
            집단의 발전을 위해 노력해오며 내가 집단을 위해 할 일이 무엇인지 많은
            생각을 했습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            외부 훈련이 많았던 부대인만큼 훈련 전에 팀원들과의 소통과 협력을
            통해 임무를 완수하는 것이 핵심이었습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            군 생활의 이러한 경험은 팀 프로젝트를 진행하면서 팀원들의 다양한
            의견을 수용하고 효과적으로 팀 혐업을 이끌어내는데 큰 도움이
            됐습니다.
          </Box>
        </Flex>
        <Box pl={"5px"} fontWeight={"bolder"} mt={"30px"}>
          코로나라는 역경을 극복했던 트레이너 시절.
        </Box>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            이전 직장에서의 힘들었던 시기는 저에게 적응력과 팀워크를 키우는 좋은
            계기가 됐습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            힘들었던 시기를 극복하고자 매주 월요일 오전에 팀원끼리 모여 공부한
            내용들을 공유하고 각자의 노하우를 배우며 노력했습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            이렇듯 저는 당장의 어려움에 주저앉기보단 조직을 바라보며 팀원들과의
            충분한 소통과 협력을 통해 제가 목표한 바를 이뤄가는 사람입니다.
          </Box>
        </Flex>
      </Collapse>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={() => {
          if (index === 1) toggle1.onToggle();
          else if (index === 3) toggle3.onToggle();
          toggle2.onToggle();
          if (index === 2) setIndex(0);
          else setIndex(2);
        }}
        className={"about-body"}
      >
        <Box
          fontWeight={"bolder"}
          bg={index === 2 ? "rgba(0,0,0,0.1)" : "white"}
          className={"about-body-title"}
        >
          2️⃣ 저는 긍정적이고 책임감이 투철한 사람입니다. <br />
          <span className={"about-body-semi-title"}>
            - 좌우명 : 긍정적인 사고가 긍정적인 결과를 만든다!
          </span>
        </Box>
      </motion.div>
      <Collapse
        in={toggle2.isOpen}
        transition={{ exit: { duration: 1 }, enter: { duration: 1 } }}
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderTop: "none",
        }}
        className={"about-body-content"}
      >
        <Box pl={"5px"} fontWeight={"bolder"}>
          긍정의 힘으로 이겨낸 역경들.
        </Box>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            군생활 중에는 팀원의 사고로 징계를 받았고, 전역 후 트레이너 생활
            때는 코로나로 인해 타격이 컸습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            그때마다 잘 될 거라는 생각과 그 생각들을 실현하고자 하는 노력으로
            극복해 왔습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            팀 프로젝트를 진행하면서도 예기치 못한 오류들로 어려움이 있었지만,
            이전의 극복했던 경험들로 포기하지 않고 끝까지 해낼 수 있었습니다.
          </Box>
        </Flex>
        <Box pl={"5px"} fontWeight={"bolder"} mt={"30px"}>
          과한 책임감, 팀원들과 나누는 방법.
        </Box>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            제가 맡은 일에는 큰 책임감을 느끼기에 저의 일을 반드시
            마무리하겠다는 신념이 있지만 때로는 부담으로 다가올 때도 있었습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            팀 프로젝트 중 WebSocket을 사용하는 일을 담당했는데 처음 사용해보는
            프로토콜이라 구현하는데 있어 어려움을 겪었습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            저의 업무였기에 혼자 해결하기 위해 많은 시간과 노력을 소비하던 중
            팀원의 제안으로 stompjs를 사용하여 해결하며 팀원들과 의견을 공유하고
            함께 해결하는 것의 중요함을 배웠습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            여전히 저에게 주어진 일에 막중한 책임감을 느끼지만 어려움이 있을 때
            팀원들과의 충분한 소통을 통해 극복해 나아가고 있습니다.
          </Box>
        </Flex>
      </Collapse>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={() => {
          if (index === 1) toggle1.onToggle();
          else if (index === 2) toggle2.onToggle();
          toggle3.onToggle();
          if (index === 3) setIndex(0);
          else setIndex(3);
        }}
        className={"about-body"}
      >
        <Box
          fontWeight={"bolder"}
          bg={index === 3 ? "rgba(0,0,0,0.1)" : "white"}
          className={"about-body-title"}
        >
          3️⃣ 입사 후에 더욱 발전하는 제가 되겠습니다. <br />
          <span className={"about-body-semi-title"}>
            - 개인의 발전이 곧 조직의 발전이다!
          </span>
        </Box>
      </motion.div>
      <Collapse
        in={toggle3.isOpen}
        transition={{ exit: { duration: 1 }, enter: { duration: 1 } }}
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderTop: "none",
        }}
        className={"about-body-content"}
      >
        <Box pl={"5px"} fontWeight={"bolder"}>
          개인의 발전과 회사의 발전을 위한 노력.
        </Box>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            저의 업무 이외에도 회사의 여러 직무에 유연하게 적응하여 뛰어난
            팀원으로서 기여하고자 합니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            전 직장에서 근무 중 개발에 대한 지식은 없었지만 여러 문서들의
            전산화를 위해 구글 스프레드 시트와 Apps script를 공부하여
            해결했습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            지속적인 자기 개발을 통해 회사의 성장과 발전에 기여할 것이며, 새로운
            기술을 습득하는데 있어 항상 열린 마음으로 임하겠습니다.
          </Box>
        </Flex>
        <Box pl={"5px"} fontWeight={"bolder"} mt={"30px"}>
          새로운 기술에 대한 열망.
        </Box>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            학원에서의 경험을 통해 끊임없는 학습과 개발에 대한 열정으로 새로운
            기술을 빠르게 습득하여 프로젝트에 적응할 수 있습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            mybatis의 쿼리문을 반복해서 작성해야 한다는 불편함을 줄이고자 jpa를
            학습했고, 보안의 편리한 구현을 위해 spring security를 학습했습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            보다 실무적인 협업 환경을 구성하기 위해 swagger를 도입하여 팀원들과
            소통했습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            이러한 노력을 통해 회사에서 주어진 업무 외의 부분에서도 적극적으로
            도전해 나아가겠습니다.
          </Box>
        </Flex>
        <Flex pl={"5px"} mt={"10px"}>
          <Box fontSize={"0.3rem"} lineHeight={"23px"} mr={"10px"}>
            <FontAwesomeIcon icon={faCircle} />
          </Box>
          <Box className={"about-body-content-text"}>
            회사의 비전과 목표에 부합하는 프로젝트에 주도적으로 참여하여 회사의
            핵심 가치를 실현해 나아가겠습니다.
          </Box>
        </Flex>
      </Collapse>
      <Flex className={"about-icon-flex"} justifyContent={"space-between"}>
        <motion.div
          className={"about-icon"}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <AboutIcon text={"팀워크"} color={"#e0d764"}>
            <FontAwesomeIcon icon={faUserGroup} />
          </AboutIcon>
        </motion.div>
        <motion.div
          className={"about-icon"}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <AboutIcon text={"긍정"} color={"#7ed9d9"}>
            <FontAwesomeIcon icon={faFaceLaughBeam} />
          </AboutIcon>
        </motion.div>
        <motion.div
          className={"about-icon"}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <AboutIcon text={"헌신"} color={"#7fe181"}>
            <FontAwesomeIcon icon={faPersonPraying} />
          </AboutIcon>
        </motion.div>
      </Flex>
      <motion.div
        className={"about-footer"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        style={{
          background: "rgba(253,179,155,0.53)",
          border: "2px solid rgb(253,179,155)",
          borderRadius: "10px",
        }}
      >
        <Box
          textAlign={"center"}
          fontWeight={"bolder"}
          mt={"20px"}
          className={"about-footer-title"}
        >
          저를 가장 잘 표현할 수 있는 세가지 키워드입니다.
        </Box>
        <Box textAlign={"center"} my={"20px"}>
          항상 겸손한 마음으로 배우려 노력하겠습니다.
        </Box>
      </motion.div>
    </>
  );
}

export default About;
