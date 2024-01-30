import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function UnderLine({ pathname }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === pathname && (
        <motion.div
          style={{ border: "1px solid black", margin: "0 auto" }}
          initial={{ width: 0 }}
          animate={{ width: "70px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
    </>
  );
}

export default UnderLine;
