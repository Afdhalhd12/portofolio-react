import { MdLaptopWindows } from "react-icons/md";
import { Button } from "flowbite-react";
import { FiDownload } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import orang from "../assets/wee.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function LandingPage() {
    useEffect(() => {
        AOS.init({
          duration: 1000,   
          once: true       
        });
      }, []);
    return (
        <>

            <div className="hidden lg:flex absolute left-1 top-1/2 -translate-y-1/2 items-center gap-2">
                <div className="rotate-90 font-bold text-xl lg:text-2xl">
                    Hero <span className="text-gray-400">-</span>{" "}
                    <span className="text-amber-500">01</span>
                </div>
            </div>
            <header data-aos="fade-up" className=" px-6 md:px-12 lg:px-35 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7">
                        <div className="flex items-center mb-3 gap-3">
                            <MdLaptopWindows className="text-amber-500 text-xl md:text-2xl" />
                            <span className="text-amber-500 text-sm md:text-base font-medium tracking-wide">
                                Web Developer Enthusiast
                            </span>
                        </div>

                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Afdhal <br />
                            Hadi <br />
                            Solahudin
                        </h1>

                        <p className="text-gray-600 text-sm md:text-base max-w-md mt-5 leading-relaxed">
                            Hi! I'm Afdhal, a Web Developer passionate about building modern web applications. Feel free to reach out via email or connect with me on LinkedIn and GitHub!
                        </p>

                        <div className="flex flex-wrap mt-6 gap-3">
                            <Button color="dark" className="gap-1">
                                <MdArrowOutward /> Explore
                            </Button>
                            <Button color="alternative" className="gap-1">
                                <FiDownload /> Download CV
                            </Button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <img
                            alt="Afdhal"
                            src={orang}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-xl object-cover"
                            style={{ transform: "scale(1.03)" }}
                        />
                    </div>
                </div>
            </header>


        </>
    );
}