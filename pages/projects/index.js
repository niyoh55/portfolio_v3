import Head from "next/head";
import React from "react";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
const index = () => {
  return (
    <div className="flex md:justify-center md:items-center w-screen font-nunito min-h-screen">
      <Head>
        <title>Projects</title>
      </Head>
      {/* <div className="flex flex-col justify-center items-center">
        <EngineeringOutlinedIcon className="text-[40em] text-white" />
        <p className="text-9xl text-white">Currenty under work.</p>
      </div> */}

      <div className="flex flex-col w-full h-full pt-10">
        <div className="flex justify-center">
          <p className="text-6xl md:text-8xl text-white">Projects</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-2 md:px-10 mt-10 w-full">
          <div
            className="aspect-video min-w-[30%] bg-contain bg-no-repeat h-auto w-auto bg-center bg-gray-200 group shadow-2xl"
            style={{
              backgroundImage: `url("https://i.ibb.co/k9H0GNS/socmed-next.png")`,
            }}
          >
            <div className="flex flex-col justify-center items-center h-full w-full bg-opacity-70 bg-black transition-all duration-300">
              <p className="text-xl md:text-6xl text-white text-center opacity-100 group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                Simple Social Media Website
              </p>
              <p className="texl-lg md:text-4xl text-white hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 px-20">
                {/* Create your own posts. Like or comment on posts from other
                users. Still adding new features. */}
                Made with NextJS + TailwindCSS and MongoDB + mongoose for
                backend. Still under development.
              </p>
              <a href="https://socmed-next.vercel.app/">
                <button className="mt-5 py-2 px-5 hidden opacity-0 group-hover:opacity-100 group-hover:flex rounded-sm bg-white text-black ">
                  Visit
                </button>
              </a>
            </div>
          </div>
          <div
            className="aspect-video min-w-[30%] bg-contain bg-no-repeat h-auto w-auto bg-center bg-gray-200 group shadow-2xl"
            style={{
              backgroundImage: `url("https://i.ibb.co/tMQktM7/1657532466504.png")`,
            }}
          >
            <div className="flex flex-col justify-center items-center h-full w-full bg-opacity-70 bg-black transition-all duration-300">
              <p className="text-xl md:text-6xl text-white text-center opacity-100 group-hover:opacity-0 group-hover:hidden transition-all duration-300">
                3D Printing Shop(E-Commerce Sample)
              </p>
              <p className="texl-lg md:text-4xl text-white hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-300 px-20">
                {/* Create your own posts. Like or comment on posts from other
                users. Still adding new features. */}
                Made with NextJS + TailwindCSS. Still under development.
              </p>
              <a href="https://we-printz.vercel.app/">
                <button className="mt-5 py-2 px-5 hidden opacity-0 group-hover:opacity-100 group-hover:flex rounded-sm bg-white text-black ">
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

{
  /* 
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
          </div> */
}
