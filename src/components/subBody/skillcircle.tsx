import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './skills.css'

type SkillCircleProps = {
  percentage: number;
  language: string;
  animate?: boolean; // optional, to trigger animation
  size?: number; // optional default size of circle
};

export default function SkillCircle({
  percentage,
  language,
  animate = false,
  size = 200,
}: SkillCircleProps) {
  const [value, setValue] = useState(0);
  const [circleSize, setCircleSize] = useState(size);

  // Animate progress
  useEffect(() => {
    if (!animate) return;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > percentage) {
        clearInterval(interval);
      } else {
        setValue(current);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [animate, percentage]);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 420) {
        setCircleSize(size * 0.6); // reduce size to 60% on small screens
      } else {
        setCircleSize(size);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return (
    <div className="main" style={{ width: circleSize, height: circleSize, }}>
      <CircularProgressbar className="main1" value={value} text={`${value}%`} />
      <p className="para text-center text-lg pt-3">{language}</p>
    </div>
  );
}
