import { CiFolderOn } from "react-icons/ci";
import ProjectComp from "./ProjectComp";
import mosque from "../assets/mosque.png";
import backend from "../assets/backend.png";
import frotend from "../assets/frontend.png";
import basic from "../assets/basic.png";
import violet from "../assets/violet.png";
import CertificateCard from "./CertificateCard";
import { useState } from "react";

export default function WorkPage() {
    const [active, setActive] = useState('tech');
    const projects = [
        {
            project: mosque,
            judul: "Ar-Rahmah Quran",
            deskripsi: "A digital Qur’an platform to read, understand, and connect with every verse.",
            tech: "React",
            subTech: "Tailwind",
            link: "https://github.com/Afdhalhd12/Ar-Rahmah"
        },
        {
            project: violet,
            judul: "Violetta Hospital",
            deskripsi: "A hospital web platform that enables patients to book online consultations, manage appointments, and access healthcare services digitally.",
            tech: "Laravel",
            subTech: "Bootstrap",
            link: "https://github.com/Afdhalhd12/Violetta-Hospital"
        },
    ];

    const certificates = [
        {
            image: frotend,
            title: "Fundamental Frontend Development",
            issuer: "Dicoding Indonesia",
            date: "Issued Mar 2025",
            link: "https://www.dicoding.com/certificates/GRX530MYYZ0M"
        },
        {
            image: backend,
            title: "Belajar Backend Pemula",
            issuer: "Dicoding Indonesia",
            date: "Issued Mar 2025",
            link: "https://www.dicoding.com/certificates/4EXGVOMN9XRL"
        },
        {
            image: basic,
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "Issued Jan 2025",
            link: "https://www.dicoding.com/certificates/KEXL7G070XG2"
        }
    ];
    return (
        <>
            <div className="hidden lg:flex absolute left-1 top-455.5 -translate-y-1/2 items-center gap-2">
                <div className="rotate-90 font-bold text-xl lg:text-2xl">
                    My Work <span className="text-gray-400">-</span>{" "}
                    <span className="text-amber-500">04</span>
                </div>
            </div>

            <div data-aos="fade-up" className=" p-6 md:px-12 lg:px-35 py-10">
                <div className="flex gap-1">
                    <CiFolderOn className="text-5xl text-amber-500" />
                    <h2 className="md:text-5xl text-4xl font-serif">My Works</h2>
                </div>

                <div className="flex gap-8 mt-6 border-b border-gray-300">
                    <button
                        onClick={() => setActive("tech")}
                        className={`relative pb-3 font-semibold transition ${active === "tech" ? "text-black" : "text-gray-400"}`}>
                        My Projects
                        <span
                            className={`absolute left-0 bottom-[-1px] w-full h-[2px] bg-amber-500 origin-left transition-transform duration-300 ${active === "tech" ? "scale-x-100" : "scale-x-0"}`} />
                    </button>

                    <button
                        onClick={() => setActive("sert")}
                        className={`relative pb-3 font-semibold transition ${active === "sert" ? "text-black" : "text-gray-400"}`}>
                        My Certificates
                        <span
                            className={`absolute left-0 bottom-[-1px] w-full h-[2px] bg-amber-500 origin-left transition-transform duration-300 ${active === "sert" ? "scale-x-100" : "scale-x-0"}`} />
                    </button>
                </div>
                {
                    active === "tech" ? <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-5">
                        {
                            projects.map((item, i) => (

                                <div key={i} className="lg:col-span-2">
                                    <ProjectComp {...item} />
                                </div>
                            ))
                        }

                    </div>
                        :
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                            {
                                certificates.map((item) => (
                                    <CertificateCard {...item} />
                                ))
                            }
                        </div>

                }

            </div>
        </>
    )
}