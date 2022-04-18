import React from "react";
import { useRouter } from "next/router";
import Head from 'next/head'


const Home = () => {
  const router = useRouter();

  console.log(router.asPath);


  const currentPath = router.asPath.toString();
  return (
    <div className="">
      <Head>
        <title>About</title>
      </Head>
      <p className="text-9xl text-black">About ito</p>
    </div>
  );
};

export default Home;
