import React from "react";

import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  console.log(router.asPath);

  const currentPath = router.asPath.toString();
  return (
    <div className="">
      <p className="text-9xl text-black">About ito</p>
    </div>
  );
};

export default Home;
