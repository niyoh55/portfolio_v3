import React from "react";
import { useRouter } from "next/router";

import Socials from "./Socials";
import Navigation from "./Navigation";

const Sidebar = () => {
  const router = useRouter();

  console.log(router.asPath);

  const currentPath = router.asPath.toString();

  const redirectTo = (path) => {
    router.push(path);
  };

  return (
    <div className="md:w-14 w-full shadow-xl h-14 md:h-full flex flex-row flex-none md:flex-col items justify-center py-4 bg-sidebar dark:bg-gray-800">
      <div className="h-full w-1/4 md:w-full md:h-1/4"></div>
      <Navigation />
      <div className="h-full md:h-1/4 w-1/4 md:w-full flex flex-row md:flex-col justify-center md:justify-end items-center gap-x-2 md:gap-y-5">
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
