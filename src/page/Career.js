import { Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CareerContent from "../util/CareerContent";

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
        <Box className={"career-header-box-placing"} />
      </Box>
    </>
  );
}

export default Career;
