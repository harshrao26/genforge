'use client';

export default function TechStackMarquee() {
  const techStack = [
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white', color: '#000000' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white', color: '#000000' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B', color: '#21759B' },
    { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/7AB55C', color: '#7AB55C' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
    { name: 'React Native', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
  ];

  return (
    <div className="relative w-full bg-gradient-to- from-purple-900 via-[#fff0] to-#fff0] py-16 overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-100%); 
          }
        }
        
        .marquee-wrapper {
          display: flex;
          width: fit-content;
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 80s linear infinite;
          width: fit-content;
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        .tech-card {
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .tech-card:hover {
          transform: translateY(-8px);
         }
      `}</style>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {techStack.map((tech, index) => (
            <div
              key={`tech-1-${index}`}
              className="tech-card flex flex-col items-center justify-center mx-8 min-w-[140px]"
            >
              <div className="relative w-24 h-24 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                />
              </div>
              <span className="mt-4 text-gray-300 text-sm font-medium  ">
                {tech.name}
              </span>
            </div>
          ))}
          {techStack.map((tech, index) => (
            <div
              key={`tech-2-${index}`}
              className="tech-card flex flex-col items-center justify-center mx-8 min-w-[140px]"
            >
              <div className="relative w-24 h-24 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-4">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                />
              </div>
              <span className="mt-4 text-gray-300 text-sm ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
