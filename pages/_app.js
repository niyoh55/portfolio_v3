import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const contentPage = useAnimation();
  const router = useRouter();

  const redirectPage = (path) => {
    mainPage.start(() => ({
      scale: 0.5,
      overflowX: "hidden",
      opacity: [1, 1, 0.8, 0.8, 0.5],
      transition: { duration: 0.5 },
    }));
    setTimeout(() => router.push(path), 500);
  };

  return (
    <div className="flex flex-col md:flex-row h-auto w-auto min-h-screen min-w-sreen bg-blue-bg overflow-hidden">
      <Sidebar redirectAction={redirectPage} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
