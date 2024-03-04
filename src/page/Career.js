import { Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import CareerContent from "../util/career/CareerContent";
import CareerBody from "../util/career/CareerBody";
import ColorStrong from "../util/csscomp/ColorStrong";

function Career({ handleScroll, scrollToComp }) {
  const gymRef = useRef();
  const armyRef = useRef();
  const uniRef = useRef();
  const highRef = useRef();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) handleScroll("career");
  }, [inView]);

  const scrollToCenter = (ref) => {
    if (ref.current) {
      const elem = ref.current;
      const elemRect = elem.getBoundingClientRect();
      const tartgetY =
        elemRect.top +
        window.scrollY -
        window.innerHeight / 2 +
        elemRect.height / 2;

      const duration = 1000;
      const startTime = performance.now();
      const startScrollY = window.scrollY;

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutCubic = (t) =>
          t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

        window.scrollTo(
          0,
          startScrollY + (tartgetY - startScrollY) * easeInOutCubic(progress),
        );

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

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
        🎬 저는 이런 경험이 있습니다.
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
          scrollToCenter={() => scrollToCenter(gymRef)}
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
          scrollToCenter={() => scrollToCenter(armyRef)}
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
          scrollToCenter={() => scrollToCenter(uniRef)}
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
      <Box className={"career-body-title"} color={"purple"} ref={gymRef}>
        파운드짐
      </Box>
      <CareerBody content={"기존의 센터와 달리 팀으로 운영"}>
        다른 센터들은 개인의 성과에 따라 월급이 주어집니다. 그러나 파운드짐은
        3명이 한팀으로 구성되어{" "}
        <ColorStrong color={"purple"}>
          개인의 성과와팀 전체의 성과가 모두 평가
        </ColorStrong>
        됐습니다. 이를 통해{" "}
        <ColorStrong color={"purple"}>
          개인의 발전뿐만 아니라 팀 전체의 성과를 이끌어내기 위해 다같이 노력
        </ColorStrong>
        했고{" "}
        <ColorStrong color={"purple"}>
          한 팀이라는 소속감을 갖게 됐습니다.
        </ColorStrong>
      </CareerBody>
      <CareerBody content={"전산화를 위한 노력, 개발자라는 꿈"}>
        센터에서는 일정관리, 매출관리, 정산 등을 엑셀을 사용하여 관리했습니다.
        저는 퇴사하기 전에 해당 파일들을{" "}
        <ColorStrong color={"purple"}>
          다른 pc에서도 관리가 가능한 구글 스프레드시트로 변경하고 싶었습니다.
        </ColorStrong>{" "}
        구글 스프레드시트로 변경하던 중 기존{" "}
        <ColorStrong color={"purple"}>
          정산 파일에 있던 수기로 서명하는 부분을 전산화하는데 apps script를
          사용
        </ColorStrong>
        했습니다. 그 당시 개발에 지식이 없던 저는{" "}
        <ColorStrong color={"purple"}>
          chat gpt, 구글링을 통해 해당 기능을 구현했고 개발자에 대한 꿈을
          키워갔습니다.
        </ColorStrong>
      </CareerBody>
      <Box className={"career-body-title"} color={"green"} ref={armyRef}>
        7공수특전여단
      </Box>
      <CareerBody content={"지역대 인원 보고의 자동화를 꿈꾼 정작장교 시절"}>
        매일 아침 지역대 전체 인원을 파악해 보고하는 임무가 있었습니다. 선임
        정작장교들은{" "}
        <ColorStrong color={"green"}>
          한글 파일을 사용해 매일 하나하나 수정해 가며 보고
        </ColorStrong>
        했었습니다. 저는 이를{" "}
        <ColorStrong color={"green"}>
          자동화 할 수 있다고 생각하여 액셀 파일로 변경
        </ColorStrong>
        했습니다. 엑셀 파일로 변경하던 중 내가 필요한 함수들을 직접 만들어
        사용할 수 있다면 편하지 않을까 하는 생각을 했습니다. 이것이 제가{" "}
        <ColorStrong color={"green"}>
          처음 개발자에 대한 관심 을 갖게된 계기
        </ColorStrong>
        입니다.
      </CareerBody>
      <CareerBody content={"한계를 극복했던 부중대장 시절"}>
        처음 부대에 전입하고 받은 훈련이 천리행군이였습니다. 그 중{" "}
        <ColorStrong color={"green"}>
          가장 힘들었던 순간은 천리행군 마지막날 24시간동안 진행했던 100km행군
        </ColorStrong>
        이였습니다. 한계에 임박했던 여러 인원들은 언성이 높아지고 인상이
        찌푸려지기 시작했습니다. 긴 행군에 낙오하는 인원도 발생했습니다. 하지만{" "}
        <ColorStrong color={"green"}>
          평소 함께 시간을 많이 보내고 가깝게 지내던 저의 팀원들은 서로 더
          무거운 문장을 짊어지려하며 다함께 임무를 완수
        </ColorStrong>
        했습니다. 저 또한 포기하고 싶었던 순간이 있었지만 옆에서{" "}
        <ColorStrong color={"green"}>함께 한계를 극복하는 팀원</ColorStrong>들을
        보며 이겨낼 수 있었습니다.
      </CareerBody>
      <Box className={"career-body-title"} color={"#089bcc"} ref={uniRef}>
        숭실대학교
      </Box>
      <CareerBody content={"한 가지 결과를 위한 여러 가지 과정"}>
        제가 수학을 좋아했던 이유는 한 가지 정답을 도출하기 위한{" "}
        <ColorStrong color={"#089bcc"}>
          여러 가지 과정 중 가장 효율적인 과정을 찾는다
        </ColorStrong>
        는 점이였습니다. 또한,{" "}
        <ColorStrong color={"#089bcc"}>
          여러 수식을 증명하는 과정에서 오류를 찾아내고 수정해 나아가는 과정이
          개발과 비슷하다고 느꼈습니다.
        </ColorStrong>{" "}
        가장 좋아했던 수학과 비슷한 점이 많은 개발에도 큰 흥미를 느꼈습니다 .
        수학을 학습하던 과정들을{" "}
        <ColorStrong color={"#089bcc"}>
          개발에 접목하여 꾸준히 발전 해 나아가겠습니다.
        </ColorStrong>
      </CareerBody>
      <CareerBody content={"Matlab을 이용한 프로그래밍"}>
        전공 강의 중{" "}
        <ColorStrong color={"#089bcc"}>
          프로그래밍이라는 수업에서 Matlab을 사용
        </ColorStrong>
        했었습니다. 강의를 들으며{" "}
        <ColorStrong color={"#089bcc"}>
          컴퓨터가 내가 의도한데로 실행되는 모습을 보며 개발에 대한 흥미가
          생겼습니다
        </ColorStrong>
        . 중학교 시절{" "}
        <ColorStrong color={"#089bcc"}>
          코딩을 통한 로봇 경주 대회에 출전한 경험이 있는 저는 코딩으로 할 수
          있는 것이 내가 알고 있던 것 보다 훨씬 많다
        </ColorStrong>
        는 것을 깨달았습니다.
      </CareerBody>
    </>
  );
}

export default Career;
