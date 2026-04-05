import { IoLibraryOutline } from "react-icons/io5";
import CardComp from "./CardComp";

export default function () {
    const items = [
        {
            foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            title: "JavaScript",
            text: "Programming Language",
        },
        {
            foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            title: "React",
            text: "Javascript",
            sub: "Library",
        },
        {
            foto: "https://laravel.com/img/logotype.min.svg",
            title: "Laravel",
            text: "Framework",
            sub: "PHP",
        },
        {
            foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            title: "Tailwind",
            text: "CSS",
            sub: "Framework",
        },
        {
            foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            title: "Bootstrap",
            text: "CSS",
            sub: "Framework",
        },
        {
            foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            title: "GitHub",
            text: "Git Hosting",
            sub: "Platform",
        },
        {
            foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            title: "Git",
            text: "Version",
            sub: "Control",
        },
        {
            foto: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
            title: "Postman",
            text: "API",
            sub: "Development",
        },
    ];
    return (
        <>
            <section
                className="w-full md:h-112.5"
                style={{
                    backgroundImage: ` linear-gradient(to right, #e5e7eb 1px, transparent 1px), 
                                       linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
                    backgroundSize: "40px 40px"
                }}
            >
                <div className="hidden lg:flex absolute left-1 top-327.5 -translate-y-1/2 items-center gap-2">
                    <div className="rotate-90 font-bold text-xl lg:text-2xl">
                        Tech <span className="text-gray-400">-</span>{" "}
                        <span className="text-amber-500">03</span>
                    </div>
                </div>
                <div data-aos="fade-up" className=" px-6 md:px-12 lg:px-35 py-10">
                    <div className="flex gap-1">
                        <IoLibraryOutline className="text-5xl text-amber-500" />
                        <h2 className="md:text-5xl text-4xl font-serif">My Tech Stacks</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-8 gap-4 mt-5">
                        {items.map((item, i) => (
                            <div key={i} className="lg:col-span-2">
                                <CardComp {...item} />
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>
    )
}