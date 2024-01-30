import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{
          width: "85%",
          marginLeft: "15%",
          marginTop: "300px",
          fontSize: "4rem",
        }}
      >
        안녕하십니까!
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2 }}
        style={{
          width: "85%",
          marginLeft: "15%",
          marginTop: "50px",
          fontSize: "2rem",
          color: "#737272",
        }}
      >
        신입 개발자
        <motion.div
          style={{
            width: "fit-content",
            display: "inline-block",
            color: "black",
            cursor: "pointer",
            margin: "0 5px",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          onClick={() => navigate("/portfolio/about")}
        >
          김수완
        </motion.div>
        입니다.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 2 }}
        style={{
          width: "85%",
          marginLeft: "15%",
          marginTop: "50px",
          fontSize: "1.6rem",
          color: "#737272",
        }}
      >
        기업의 발전을 위해 저의 <strong style={{ color: "red" }}>열정</strong>을{" "}
        바치고 싶습니다.
      </motion.div>
    </>
  );
}

export default Info;
