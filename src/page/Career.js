import { Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CareerContent from "../util/career/CareerContent";
import CareerBody from "../util/career/CareerBody";
import { Element } from "react-scroll";
import ColorStrong from "../util/csscomp/ColorStrong";

function Career({ handleScroll, scrollToComp }) {
  let [ref, inView] = useInView();

  useEffect(() => {
    if (inView) handleScroll("career");
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
        className={"career-header"}
      >
        <Box
          letterSpacing={"5px"}
          fontSize={"1rem"}
          color={"#8a8989"}
          mb={"10px"}
        >
          CAREER
        </Box>
        🎞 저는 이런 경험이 있습니다.
      </motion.div>
      <Box borderLeft={"3px solid"} className={"career-header-box"}>
        <Box className={"career-header-box-placing"} />
        <CareerContent
          content={"백엔드 개발자(공부 중)"}
          duration={"2023.07 ~ "}
          scrollToComp={scrollToComp}
          comp={"skills"}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Divider />
        </motion.div>
        <CareerContent
          content={"파운드짐(헬스 트레이너)"}
          duration={"2021.09 ~ 2023.04"}
          scrollToComp={scrollToComp}
          comp={"gym"}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Divider />
        </motion.div>
        <CareerContent
          content={"7공수특전여단(정작장교)"}
          duration={"2018.06 ~ 2020.06"}
          scrollToComp={scrollToComp}
          comp={"army"}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Divider />
        </motion.div>
        <CareerContent
          content={"숭실대학교(수학과)"}
          duration={"2014.03 ~ 2018.02"}
          scrollToComp={scrollToComp}
          comp={"university"}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Divider />
        </motion.div>
        <CareerContent
          content={"충암고등학교"}
          duration={"2011.03 ~ 2014.02"}
          scrollToComp={scrollToComp}
          comp={"highschool"}
        />
        <Box className={"career-header-box-placing"} />
      </Box>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className={"career-header-content"}
      >
        저의 여러 경험을 통해 가능성을 바라봐주시면 감사하겠습니다.
      </motion.div>
      <Element name={"gym"}>
        <Box className={"career-body-title"} color={"purple"}>
          파운드짐
        </Box>
      </Element>
      <CareerBody content={"기존의 센터와 달리 팀으로 운영"}>
        다른 센터들은 개인의 성과에 따라 월급이 주어집니다. 그러나 파운드짐은
        3명이 한팀으로 구성되어 개인의 성과와{" "}
        <ColorStrong color={"purple"}>팀 전체의 성과</ColorStrong>가 모두 평가
        됐습니다. 이를 통해 개인의 발전뿐만 아니라 팀 전체의 성과를 이끌어내기
        위해 다같이 노력했고{" "}
        <ColorStrong color={"purple"}>한 팀이라는 소속감</ColorStrong>을 갖게
        됐습니다.
      </CareerBody>
      <CareerBody content={"전산화를 위한 노력, 개발자라는 꿈"}>
        센터에서는 일정관리, 매출관리, 정산 등을 엑셀을 사용하여 관리했습니다.
        저는 퇴사하기 전에 해당 파일들을 다른 pc에서도 관리가 가능한 구글
        스프레드시트로 변경하고 싶었습니다. 구글 스프레드시트로 변경하던 중 기존
        정산 파일에 있던 수기로 서명하는 부분을 전산화하는데{" "}
        <ColorStrong color={"purple"}>apps script를 사용</ColorStrong>했습니다.
        그 당시 개발에 지식이 없던 저는 chat gpt, 구글링을 통해 해당 기능을
        구현했고 <ColorStrong color={"purple"}>개발자에 대한 꿈</ColorStrong>을
        키워갔습니다.
      </CareerBody>
      <Element name={"army"}>
        <Box className={"career-body-title"} color={"green"}>
          7공수특전여단
        </Box>
      </Element>
      <CareerBody content={"지역대 인원 보고의 자동화를 꿈꾼 정작장교 시절"}>
        매일 아침 지역대 전체 인원을 파악해 보고하는 임무가 있었습니다. 선임
        정작장교들은 한글 파일을 사용해 매일 하나하나 수정해 가며
        보고했었습니다. 저는 이를{" "}
        <ColorStrong color={"green"}>자동화 할 수 있다고 생각</ColorStrong>하여
        액셀 파일로 변경했습니다. 엑셀 파일로 변경하던 중 내가 필요한 함수들을
        직접 만들어 사용할 수 있다면 편하지 않을까 하는 생각을 했습니다. 이것이
        제가 <ColorStrong color={"green"}>처음 개발자에 대한 관심</ColorStrong>
        을 갖게된 계기입니다.
      </CareerBody>
      <CareerBody content={"한계를 극복했던 부중대장 시절"}>
        처음 부대에 전입하고 받은 훈련이 천리행군이였습니다. 그 중 가장 힘들었던
        순간은 천리행군 마지막날 24시간동안 진행했던 100km행군이였습니다. 한계에
        임박했던 여러 인원들은 언성이 높아지고 인상이 찌푸려지기 시작했습니다.
        긴 행군에 낙오하는 인원도 발생했습니다. 하지만 평소 함께 시간을 많이
        보내고 가깝게 지내던 저의 팀원들은 서로 더 무거운 문장을 짊어지려하며
        다함께 임무를 완수했습니다. 저 또한 포기하고 싶었던 순간이 있었지만
        옆에서{" "}
        <ColorStrong color={"green"}>함께 한계를 극복하는 팀원</ColorStrong>들을
        보며 이겨낼 수 있었습니다.
      </CareerBody>
      <Element name={"university"}>
        <Box className={"career-body-title"} color={"#089bcc"}>
          숭실대학교
        </Box>
      </Element>
      <CareerBody content={"한 가지 결과를 위한 여러 가지 과정"}>
        제가 수학을 좋아했던 이유는 한 가지 정답을 도출하기 위한{" "}
        <ColorStrong color={"#089bcc"}>
          여러 가지 과정 중 가장 효율적인 과정을 찾는다
        </ColorStrong>
        는 점이였습니다. 또한, 여러 수식을 증명하는 과정에서 오류를 찾아내고
        수정해 나아가는 과정이 개발과 비슷하다고 느꼈습니다. 가장 좋아했던
        수학과 비슷한 점이 많은 개발에도 큰 흥미를 느꼈습니다. 수학을 학습하던
        과정들을{" "}
        <ColorStrong color={"#089bcc"}>개발에 접목하여 꾸준히 발전</ColorStrong>
        해 나아가겠습니다.
      </CareerBody>
      <Element name={"highschool"}>
        <Box className={"career-body-title"} color={"#f7c909"}>
          충암고등학교
        </Box>
      </Element>
      <CareerBody content={"꿈을 위한 노력"}>
        저는 어려서부터 제가 가진{" "}
        <ColorStrong color={"#f7c909"}>
          지식을 공유하고 다른 사람의 지식을 습득
        </ColorStrong>
        하는 것을 좋아했습니다. 고등학교 시절에는 이러한 저의 관심을 구체적으로
        실현하고자 친구들을 모아서 도서관에서 초등학생들에게 무료로 수학을
        알려주는 수업을 기획했습니다. 이 기획을 진행시키기 위해 동네에 있는
        응암정보도서관에 찾아가 기획한 내용을 보여드리고 정식 봉사활동
        프로그램으로 만들었습니다. 저는 저의 꿈을 실현시키기 위해{" "}
        <ColorStrong color={"#f7c909"}>
          실제로 행동하고 노력하는 사람
        </ColorStrong>
        입니다.
      </CareerBody>
    </>
  );
}

export default Career;
