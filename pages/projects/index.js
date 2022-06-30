import Head from "next/head";
import React from "react";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
const index = () => {
  return (
    <div className="flex justify-center items-center w-screen font-nunito min-h-screen">
      <Head>
        <title>Projects</title>
      </Head>
      {/* <div className="flex flex-col justify-center items-center">
        <EngineeringOutlinedIcon className="text-[40em] text-white" />
        <p className="text-9xl text-white">Currenty under work.</p>
      </div> */}

      <div className="flex flex-col w-full h-full pt-10">
        <div className="flex justify-center">
          <p className="text-8xl text-white">Projects</p>
        </div>

        <div className="grid grid-cols-2 gap-4 px-10 mt-10 w-full">
          <div
            className="aspect-video min-w-[30%] bg-contain bg-no-repeat h-auto w-auto bg-center bg-gray-200 group shadow-2xl"
            style={{
              backgroundImage: `url("https://i.ibb.co/k9H0GNS/socmed-next.png")`,
            }}
          >
            <div className="flex flex-col justify-center items-center h-full w-full bg-opacity-70 bg-black transition-all duration-300">
              <p className="text-6xl text-white opacity-100 group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                Simple Social Media Website
              </p>
              <p className="text-6xl text-white hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 px-20">
                Create your own posts. Like or comment on posts from other
                users. Still adding new features.
              </p>
              <button className="mt-5 py-2 px-5 hidden opacity-0 group-hover:opacity-100 group-hover:flex rounded-sm bg-white text-black ">Visit</button>
            </div>
          </div>
{/* 
          <div
            className="aspect-video min-w-[30%] bg-contain bg-no-repeat h-auto w-auto bg-center bg-gray-200 group shadow-2xl"
            style={{
              backgroundImage: `url("https://i.ibb.co/k9H0GNS/socmed-next.png")`,
            }}
          >
            <div className="flex flex-col justify-center items-center h-full w-full bg-opacity-70 bg-black transition-all duration-300">
              <p className="text-6xl text-white opacity-100 group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                Simple Social Media Website
              </p>
              <p className="text-6xl text-white hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 px-20">
                Create your own posts. Like or comment on posts from other
                users. Still adding new features.
              </p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default index;
