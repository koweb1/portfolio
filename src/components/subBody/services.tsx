import {Bot,Monitor,WandSparkles} from 'lucide-react'
import './services.css'
export default function Services(){
    return (
      <section
        id="Services"
        className=" bg-[#081F2E] min-h-[300px] px-[80px] py-10"
      >
        <h2 className="number-two text-[33px] font-poppins font-[600] mb-10">
          Services
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
          <div className="flex flex-col items-center bg-[#0E3A52] py-5 px-5 rounded-[5px]">
            <Monitor size={28} style={{ marginBottom: 15, color: "#1FA2C6" }} />
            <h3 className="text-[18px] font-semibold mb-2">
              Front-End Development
            </h3>
            <p className="first text-[#C7D6DF] text-[15px] text-center">
              I build fast, responsive, and modern websites using React and
              TypeScript, with a focus on clean and user-friendly UI design.
            </p>
          </div>

          <div className="flex flex-col items-center py-7 px-5 bg-[#0E3A52] rounded-[5px]">
            <WandSparkles
              size={28}
              style={{ marginBottom: 15, color: "#1FA2C6" }}
            />
            <h3 className="text-[18px] font-semibold mb-2">UI Animation</h3>
            <p className="first text-[#C7D6DF] text-[15px] text-center">
              I create smooth animations and micro-interactions that make
              websites feel dynamic and engaging.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#0E3A52] py-5 px-5 rounded-[5px]">
            <Bot size={28} style={{ marginBottom: 15, color: "#1FA2C6" }} />
            <h3 className="text-[18px] font-semibold mb-2">AI Automation</h3>
            <p className="first text-[#C7D6DF] text-[15px] text-center">
              I design smart workflows using AI tools and automation to save
              time and improve productivity.
            </p>
          </div>
        </div>
      </section>
    );
}