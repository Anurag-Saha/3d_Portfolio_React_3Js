import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2,ease:"easeOut"}}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hi i am a Frontend Devloper, 3D Artist and App Devloper",
            1000,
            "Highly motivated in 3d Animation and Frontend devlopment",
            1000,
            "Committed to continuous learning",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/profile_pic-removebg-preview.png"></img>
    </motion.div>
  );
};
export default Speech;
