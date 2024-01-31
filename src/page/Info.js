import { motion } from "framer-motion";
import "../css/Media.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Info({ handleScroll }) {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) handleScroll("info");
  }, [inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={"info-header"}
      >
        안녕하십니까!
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2 }}
        style={{
          color: "#737272",
        }}
        className={"info-body"}
      >
        신입 개발자
        <strong style={{ color: "black" }}>김수완</strong>
        입니다.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 2 }}
        style={{
          color: "#737272",
        }}
        className={"info-footer"}
      >
        기업의 발전을 위해 저의{" "}
        <motion.div
          style={{
            width: "fit-content",
            display: "inline-block",
            color: "red",
            margin: "0 5px",
          }}
          animate={{ scale: [1, 1.2, 1, 1.1, 1, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          열정
        </motion.div>
        을 바치고 싶습니다.
      </motion.div>
    </>
  );
}

export default Info;
