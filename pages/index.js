import React from "react";

import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const mainPage = useAnimation();
  const router = useRouter();

  const arrHi = "Hi,".split("");
  const arrName = `I'm Niyoh Edwyn`.split("");
  const arrDesc = "Full Stack Developer / Freelancer".split(" ");

  const redirectPage = (path) => {
    mainPage.start(() => ({
      scale: 0.5,
      transition: { duration: 0.5 },
    }));
    setTimeout(() => router.push(path), 500);
  };

  const currentPath = router.asPath.toString();
  return (
    <motion.div className="flex w-full overflow-auto" animate={mainPage}>
      <div className="flex flex-col justify-center w-auto ">
        <div className="px-40 flex flex-col gap-y-5 font-nunito tracking-widest text-white">
          <h1 className="text-7xl font-extrabold">
            {arrHi.map((letter, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <div className="flex justify-start items-start text-7xl font-extrabold">
            {arrName.map((letter, index) => (
              <motion.h1
                whileHover={{
                  scale: 1.1,
                  // transform: 1.5,
                }}
                transition={{ duration: 0.2 }}
              >
                {letter === " " ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: (index + 1) * 0.2 + 0.5,
                    }}
                  >
                    &nbsp;
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      color: "#ffd700",
                      fontSize: ["5rem", "7rem", "9rem"],
                    }}
                    transition={{
                      duration: 0.2,
                      delay: (index + 1) * 0.2 + 0.5,
                    }}
                  >
                    {letter}
                  </motion.span>
                )}
              </motion.h1>
            ))}
          </div>

          <h1>
            {arrDesc.map((letter, index) => (
              <motion.span
                className=" text-2xl tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: (index + 1) * 0.2 + arrName.length * 0.2 + 0.5,
                }}
              >
                {letter + " "}
              </motion.span>
            ))}
          </h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: (arrName.length + arrHi.length + arrDesc.length) * 0.2,
            }}
            onClick={() => redirectPage("/contact")}
            className="border-2 border-yellowMain text-yellowMain hover:bg-yellowMain hover:text-black w-auto px-5 py-3 mt-5 self-start tracking-widest font-nunito text-xl"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Home;
