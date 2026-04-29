import Anime from '../../assets/animea.png'
import imageFront from "../../assets/animeFacingme.png";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import { easeInOut, motion } from "motion/react";

export default function LandingPage() {
  return (
    <section
      id="Home"
      className="w-full h-auto mt-[100px] flex justify-between relative px-[80px] pb-20"
    >
      <div className="main-text w-[50%]  pt-12">
        <h1 className="main text-[4rem] font-bold ">Hello, I’m Akto</h1>

        <h2 className="main2 text-[2.3rem] font-medium mb-3">
          {" "}
          I’m a
          <span className="ml-3 font-medium ">
            <Typewriter
              words={[
                "Front-End Developer",
                "AI Automation Engineer",
                "Creative Web Builder",
              ]}
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={100}
              cursor={true}
              cursorBlinking={true}
              cursorStyle="|"
            />
          </span>
        </h2>
        <p className="first text-[1rem] font-medium max-w-[570px] leading-normal mb-4 font-cursive text-[#C7D6DF]">
          I build modern, responsive, and high-performance web applications with
          a focus on clean design and smooth user experiences. I also automate
          workflows using AI to help businesses save time and scale faster.
        </p>

        <div className="button flex gap-5 mt-8">
          <motion.button
            className="buttons bg-[#1FA2C6] w-[150px] h-[40px] rounded-[30px] text-[#C7D6DF] flex justify-center items-center"
            whileTap={{ scale: 1.1 }}
            whileHover={{
              background: "#1580a2",
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <a href="#projects" className="text-[15px]">
              View My Work
            </a>
          </motion.button>
          <motion.button
            className="buttons bg-[#1FA2C6] w-[150px] h-[40px] rounded-[30px] text-[#C7D6DF] flex justify-center items-center"
            whileTap={{ scale: 1.1 }}
            whileHover={{
              background: "#1580a2",
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <a href="#Contact " className="text-[15px]">
              Hire Me
            </a>
          </motion.button>
        </div>
      </div>
      <div className="image w-[45%] mt-[-50px] mb-3">
        <motion.img
          src={Anime}
          alt="Anime-style illustration of a character"
          className="hidden w-[400px] md:block object-contain"
          whileHover={{
            scale: 1.05,
            transition: { duration: 1, ease: easeInOut },
          }}
        />{" "}
        <motion.img
          src={imageFront}
          alt="Anime-style illustration of a character"
          className=" md:hidden  object-contain"
          whileHover={{
            scale: 1.05,
            transition: { duration: 1, ease: easeInOut },
          }}
        />
      </div>
    </section>
  );
}
