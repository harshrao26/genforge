import { FaTools, FaPencilRuler, FaCode, FaShieldAlt } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";

const services = [
  {
    id: 1,
    number: "01",
    title: "Product Design",
    description: "SaaS Platform • Web Platform • Mobile App",
    bgColor: "bg-purple-50",
    hoverColor: "group-hover:bg-[#c3dee3]",
    paragraph:
      "By working hand in hand, we’ll turn your ideas into real, market-ready products. With a focus on your unique needs, we’ll blend aesthetics and usability. Let’s chat about how we can bring your ideas to life.",
    button: true,
  },
  {
    id: 2,
    number: "02",
    title: "UX Design",
    description: "UX Audit • Analysis • Research",
    bgColor: "bg-purple-100",
    hoverColor: "group-hover:bg-gray-100",
    paragraph:
      "We evaluate and optimize user experience through research-driven audits.",
  },
  {
    id: 3,
    number: "03",
    title: "Development",
    description: "Net Core • PHP • React • Node.js • Angular",
    bgColor: "bg-purple-200",
    hoverColor: "group-hover:bg-gray-100",
    paragraph:
      "Our development process ensures scalable and high-performance solutions.",
  },
  {
    id: 4,
    number: "04",
    title: "Quality Assurance",
    description: "Testing • Planning, creating following KPI's • Documentation",
    bgColor: "bg-purple-300",
    hoverColor: "group-hover:bg-gray-100",
    paragraph:
      "QA is integral — we test, measure, and document everything thoroughly.",
  },
];

export default function Feature3() {
  return (
    <section className="w-full relative  ">
   
      <div className="z-20 relative ">
        {services.map((service) => (
        <div
          key={service.id}
          className={`group hover:bg-gradient-to-t from-[#833DFA] to-transparent  `}
        >
         <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-20 transition-all duration-500 ease-in-out hover:${service.bgColor}`}>

            {/* Section number */}
          <div className="text-5xl font-semibold text-gray-100/50 w-full md:w-1/6 mb-4 md:mb-0">
            {service.number}
          </div>

          {/* Content */}
          <div className="w-full md:w-5/6">
            <h2 className="md:text-5xl text-4xl hover:text-white font-semibold text-purple-300">
              <span className="text-white">
                {service.title}
              </span>
            </h2>
            <p className="md:text-2xl text-xl mt-1 hover:text-white text-purple-300">{service.description}</p>

            {/* Reveal paragraph on hover */}
            {service.paragraph && (
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="mt-4 md:text-xl text-base text-gray-100">{service.paragraph}</p>
              </div>
            )}

            {/* Optional button */}
            {service.button && (
              <button className="mt-6 border border-gray-100 text-gray-100 px-5 py-2 rounded-full hover:bg-gray-100 transition">
                DISCUSS PROJECT
              </button>
            )}
          </div>
         </div>
        </div>
      ))}
      </div>
            {/* <AnimatedBackground /> */}

    </section>
  );
}
