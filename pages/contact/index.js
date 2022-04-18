import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";

const Home = () => {
  const router = useRouter();

  console.log(router.asPath);
  const mainPage = useAnimation();
  const gridItem = useAnimation();

  useEffect(() => {
    mainPage.start(() => ({
      scale: 1,
      transition: { duration: 0.6 },
    }));
  }, []);

  const currentPath = router.asPath.toString();
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={mainPage}
      className="text-white flex flex-col justify-center font-nunito 2xl:mx-40 md:mx-10 md:my-0 my-20 mx-5"
    >
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className="2xl:text-[17rem] xl:text-[16rem] lg:text-[15rem] md:text-[13rem] sm:text-[10rem] text-9xl text-yellowMain">
        Hello.
      </h1>
      <h2 className="2xl:text-[3rem] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
        Just keeping this simple.
      </h2>
      <br></br>
      <div>
        <p>
          Email:{" "}
          <a className="underline" href="mailto:niyohedwyn21@gmail.com">
            niyohedwyn21@gmail.com
          </a>
        </p>

        <p>
          Contact Number: <span className="underline">+63995922380</span>
        </p>

        <p>
          On the Internet:{" "}
          <a className="underline" href="https://www.youtube.com/">
            Linkedin
          </a>{" "}
          /{" "}
          <a className="underline" href="https://www.youtube.com/">
            Facebook
          </a>{" "}
          /{" "}
          <a className="underline" href="https://www.youtube.com/">
            Twitter
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
