import { IoLibraryOutline } from "react-icons/io5";
import CardComp from "./CardComp";

export default function TechStack() {
    const items = [
        { foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript", text: "Programming Language" },
        { foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React", text: "Javascript", sub: "Library" },
        { foto: "https://laravel.com/img/logotype.min.svg", title: "Laravel", text: "Framework", sub: "PHP" },
        { foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind", text: "CSS", sub: "Framework" },
        { foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", title: "Bootstrap", text: "CSS", sub: "Framework" },
        { foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", title: "GitHub", text: "Git Hosting", sub: "Platform" },
        { foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git", text: "Version", sub: "Control" },
        { foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", title: "Postman", text: "API", sub: "Development" },
    ];

    const doubledItems = [...items, ...items];

    return (
        <>
            <style>
                {`
                /* Animasi Ke Kiri */
                @keyframes marqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                /* Animasi Ke Kanan */
                @keyframes marqueeRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                .marquee-container {
                    display: flex;
                    width: max-content;
                    gap: 1.5rem;
                }

                .animate-left {
                    animation: marqueeLeft 35s linear infinite;
                }

                .animate-right {
                    animation: marqueeRight 35s linear infinite;
                }

                .marquee-wrapper:hover .marquee-container {
                    animation-play-state: paused;
                }
                `}
            </style>

            <section
                className="w-full py-20 overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), 
                                     linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
                    backgroundSize: "40px 40px"
                }}
            >
                <div className="px-6 md:px-12 lg:px-35">
           
                    <div className="flex items-center gap-1 mb-16 ">
                        <IoLibraryOutline className="text-5xl text-amber-500" />
                        <h2 className="md:text-5xl text-2xl font-anton">My Tech Stacks</h2>
                    </div>

                    <div className="flex flex-col gap-1 relative">
                        
                
                        <div className="marquee-wrapper relative overflow-hidden">
                            <div className="marquee-container animate-right">
                                {doubledItems.map((item, i) => (
                                    <div key={`right-${i}`} className="w-70 shrink-0">
                                        <CardComp {...item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="marquee-wrapper relative overflow-hidden">
                            <div className="marquee-container animate-left">
                                {doubledItems.map((item, i) => (
                                    <div key={`left-${i}`} className="w-70 shrink-0">
                                        <CardComp {...item} />
                                    </div>
                                ))}
                            </div>
                        </div>

                       

                        
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white via-white/40 to-transparent z-10"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white via-white/40 to-transparent z-10"></div>
                    </div>
                </div>
            </section>
        </>
    );
}