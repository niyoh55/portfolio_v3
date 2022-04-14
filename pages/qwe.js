import React, { Fragment } from "react";

import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Home = () => {
  const nameKo = `I'm Niyoh Edwyn`;
  const arr3 = nameKo.split("");

  return (
    <div className="flex w-full  justify-center items-center">
      {arr3.map((letter, index) => (
        <motion.div
          className="flex justify-start items-start"
          whileHover={{
            color: `yellow`,
            scale: 1.2,
          }}
          transition={{ duration: 0.5 }}
        >
          {letter === " " ? (
            <motion.span
              initial={{ opacity: 0, fontSize: "5rem" }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              &nbsp;
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0, fontSize: "5rem" }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              {letter}
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
