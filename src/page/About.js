import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{ width: "100%", textAlign: "center", marginTop: "300px" }}
      >
        asdf
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{ width: "100%", textAlign: "center" }}
      >
        asdf
      </motion.div>
    </>
  );
}

export default About;
