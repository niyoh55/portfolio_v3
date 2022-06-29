import Head from "next/head";
import React from "react";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
const index = () => {
  return (
    <div className="flex justify-center items-center w-screen font-nunito">
      <Head>
        <title>Projects</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <EngineeringOutlinedIcon className="text-[40em] text-white" />
        <p className="text-9xl text-white">Currenty under work.</p>
      </div>
    </div>
  );
};

export default index;
