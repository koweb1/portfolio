import SkillCircle from './skillcircle.jsx'
import './skills.css'


export default function Skills(){
  return(
  <section id='Skills' className='px-[80px] py-10' >
    <h2 className="number-two text-[33px] font-poppins font-[600] mb-10">My Skills</h2>
    <div className="skills">
    <SkillCircle percentage={90} language='HTML' animate={true} />
    <SkillCircle percentage={80} language='CSS' animate={true} />
    <SkillCircle percentage={70} language='JavaScript' animate={true} />
    <SkillCircle percentage={75} language='React & TypeScript' animate={true} />
    <SkillCircle percentage={70} language='AI Automation' animate={true} />
    </div>


  </section>
  );

}