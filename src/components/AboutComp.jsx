import { MdOutlinePerson } from "react-icons/md";

export default function AboutComp() {
    return (
        <>
            <div className="hidden lg:flex absolute left-1 top-212.5 -translate-y-1/2 items-center gap-2">
                <div className="rotate-90 font-bold text-xl lg:text-2xl">
                    About <span className="text-gray-400">-</span>{" "}
                    <span className="text-amber-500">02</span>
                </div>
            </div>

            <div data-aos="fade-up" className=" px-6 md:px-12 lg:px-35 py-20">
                <div className="flex gap-1">
                    <MdOutlinePerson className="text-5xl text-amber-500" />
                    <h2 className="md:text-5xl text-4xl font-serif">About Me</h2>
                </div>
                <h2 className="md:text-3xl text-3xl font-serif mt-5">Hello, I'm Afdhal Hadi Solahudin!</h2>
                <p className="text-gray-600 text-sm text-justify max-w-200 mt-5">I am a vocational high school student passionate about programming and web development. What started as curiosity about how websites work has evolved into a strong interest in building scalable digital solutions. On the frontend, I work with HTML, CSS, and JavaScript to build clean and interactive interfaces. I am exploring modern frameworks such as React and Next.js while leveraging TypeScript to write safer and maintainable code.</p>

                <p className="text-gray-600 text-sm text-justify max-w-200 mt-5">As a student, I actively develop personal projects to apply my knowledge in real-world scenarios. I continuously improve my skills by exploring new technologies, writing clean and maintainable code, and focusing on user experience. I am committed to growing as a developer and building meaningful digital solutions.</p>
            </div>
        </>
    )
}