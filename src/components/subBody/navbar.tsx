import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import "./navbar.css";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (lastest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (lastest > previous) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });
  return (
    <div className=" w-full ">
      <header className="navbar flex w-full h-11 justify-between items-center px-[80px] pt-5 font-poppins">
        <div className="logo text-[28px] tracking-widest font-space font-semibold ">
          akto
        </div>
        <div className="menu">
          <Menu onClick={() => setShow(true)} />
        </div>

        <motion.ul
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`main-nav flex list-none gap-8 text-lg ${show ? "block" : "hidden "} md:flex`}
        >
          <div>
            <X size={35} onClick={() => setShow(false)} className="sup" />
          </div>
          <li>
            <a href="#Home" className="one text-[#fff] md:text-[#1FA2C6]">
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="hover:text-[#1FA2C6]  transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-[#1FA2C6] transition duration-300 ease-in-out"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Services"
              className="hover:text-[#1FA2C6] transition duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-[#1FA2C6] transition duration-300 ease-in-out"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-[#1FA2C6] transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </motion.ul>
      </header>
    </div>
  );
}
