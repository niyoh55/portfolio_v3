import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  console.log(router.asPath);

  const currentPath = router.asPath.toString();

  return (
    <div className=" flex flex-row h-full w-2/4 md:flex-col md:h-3/4 md:w-full flex-initial justify-center items-center gap-x-3 md:gap-x-0 md:gap-y-10 ">
      <div
        onClick={() => router.push("/")}
        className="group before:transition before:delay-0 before:duration-200 before:ease-in hover:before:opacity-100 before:opacity-0 before:flex before:justify-center before:items-center before:text-white before:content-['Home'] before:text-sm before:md:text-md before:w-8 before:h-8 before:absolute"
      >
        <HomeOutlinedIcon
          className={`h-8 w-8 ${
            currentPath === "/" ? "text-yellow-500" : "text-icon"
          } group-hover:opacity-0`}
        />
      </div>

      <div
        onClick={() => router.push("/about")}
        className="group before:transition before:delay-0 before:duration-200 before:ease-in hover:before:opacity-100 before:opacity-0 before:flex before:justify-center before:items-center before:text-white before:content-['About'] before:text-sm before:md:text-md before:w-8 before:h-8 before:absolute"
      >
        <PersonOutlineOutlinedIcon
          className={`h-8 w-8 ${
            currentPath === "/about" ? "text-yellow-500" : "text-icon"
          } group-hover:opacity-0`}
        />
      </div>
      <div
        onClick={() => router.push("/projects")}
        className="group before:transition before:delay-0 before:duration-200 before:ease-in hover:before:opacity-100 before:opacity-0 before:flex before:justify-center before:items-center before:text-white before:content-['Projects'] before:text-sm before:md:text-md before:w-8 before:h-8 before:absolute"
      >
        <WorkOutlineOutlinedIcon
          className={`h-8 w-8 ${
            currentPath === "/projects" ? "text-yellow-500" : "text-icon"
          } group-hover:opacity-0`}
        />
      </div>
      <div
        onClick={() => router.push("/skills")}
        className="group before:transition before:delay-0 before:duration-200 before:ease-in hover:before:opacity-100 before:opacity-0 before:flex before:justify-center before:items-center before:text-white before:content-['Skills'] before:text-sm before:md:text-md before:w-8 before:h-8 before:absolute"
      >
        <EmojiObjectsOutlinedIcon
          className={`h-8 w-8 ${
            currentPath === "/skills" ? "text-yellow-500" : "text-icon"
          } group-hover:opacity-0`}
        />
      </div>
      <div
        onClick={() => router.push("/contact")}
        className="group before:transition before:delay-0 before:duration-200 before:ease-in hover:before:opacity-100 before:opacity-0 before:flex before:justify-center before:items-center before:text-white before:content-['Contact'] before:text-sm before:md:text-md before:w-8 before:h-8 before:absolute"
      >
        <EmailOutlinedIcon
          className={`h-8 w-8 ${
            currentPath === "/contact" ? "text-yellow-500" : "text-icon"
          } group-hover:opacity-0`}
        />
      </div>
    </div>
  );
};

export default Navigation;
