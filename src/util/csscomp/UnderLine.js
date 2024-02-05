import { motion } from "framer-motion";

function UnderLine({ comp }) {
  return (
    <>
      {sessionStorage.getItem("comp") === comp && (
        <motion.div
          style={{
            borderBottom: "1px solid rgba(74,88,225,0.66)",
            margin: "0 auto",
          }}
          initial={{ width: 0 }}
          animate={{ width: "70px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
      {sessionStorage.getItem("onComp") &&
        sessionStorage.getItem("onComp").includes(comp) &&
        sessionStorage.getItem("comp") !== comp && (
          <motion.div
            style={{
              borderBottom: "1px solid rgb(126,217,217)",
              margin: "0 auto",
            }}
            initial={{ width: 0 }}
            animate={{ width: "70px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
    </>
  );
}

export default UnderLine;
