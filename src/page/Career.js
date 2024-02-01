import { Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CareerContent from "../util/CareerContent";
import CareerBody from "../util/CareerBody";

function Career({ handleScroll }) {
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
        🪪 저는 이런 경험이 있습니다.
      </motion.div>
      <Box borderLeft={"3px solid"} className={"career-header-box"}>
        <Box className={"career-header-box-placing"} />
        <CareerContent
          content={"백엔드 개발자(공부 중)"}
          duration={"2023.07 ~ "}
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
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Divider />
        </motion.div>
        <CareerContent
          content={"7공수특전여단(부중대장, 정작장교)"}
          duration={"2018.06 ~ 2020.06"}
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
        />
        <Box className={"career-header-box-placing"} />
      </Box>
      <Box className={"career-body-title"}>파운드짐(헬스 트레이너)</Box>
      <CareerBody content={"기존의 센터와 달리 팀으로 운영"}>
        기존의 센터들은 개인의 성과에 따라 월급이 주어집니다. 그러나 파운드짐은
        3명이 한팀으로 구성되어 개인의 성과와 팀 전체의 성과가 모두 평가
        됐습니다. 이를 통해 개인의 발전뿐만 아니라 팀 전체의 성과를 이끌어내기
        위해 다같이 노력했고 한 팀이라는 소속감을 갖게 됐습니다.
      </CareerBody>
    </>
  );
}

export default Career;
