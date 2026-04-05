import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function FooterComp() {
    return (
        <div className="mt-25">
            <section className="mb-5">
                <div className="hidden lg:flex absolute left-1 top-555 -translate-y-1/2 items-center gap-2">
                    <div className="rotate-90 font-bold text-xl lg:text-2xl">
                        Contact <span className="text-gray-400">-</span>{" "}
                        <span className="text-amber-500">05</span>
                    </div>
                </div>
                <div data-aos="fade-up" className="text-center">
                    <h1 className="text-5xl">Contacts</h1>
                    <h6>Nice to see you here!</h6>
                    <div className="flex justify-center text-5xl mt-4 gap-5">
                        <a href="mailto:afdhalhadisolahudin@gmail.com?subject=Consultation Request&body=Hello, I would like to book a consultation.">
                            <SiGmail className="text-red-500 hover:rotate-12 transition-transform duration-300 hover:scale-105" />
                        </a>
                        <a href="www.linkedin.com/in/afdhalhd12">
                            <FaLinkedin className="text-blue-600 hover:rotate-12 transition-transform duration-300 hover:scale-105" />
                        </a>
                        <a href="https://github.com/Afdhalhd12">
                            <FaGithub className="hover:rotate-12 transition-transform duration-300 hover:scale-105" />
                        </a>
                    </div>
                </div>
            </section>

            <footer className="mt-10">
                <hr className="text-gray-400" />
                <p className="text-gray-400 mt-5 text-center">© 2026 Afdhal Hadi Solahudin.</p>
            </footer>
        </div>

    )
}