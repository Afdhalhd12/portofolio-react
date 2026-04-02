import { CiFolderOn } from "react-icons/ci";
import ProjectComp from "./ProjectComp";
import mosque from "../assets/mosque.png";

export default function WorkPage() {
    return (
        <>
            <div className="hidden lg:flex absolute left-1 top-420.5 -translate-y-1/2 items-center gap-2">
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

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-5">
                    <div className="lg:col-span-2">
                        <ProjectComp project={mosque} judul={"Ar-Rahmah Quran"} deskripsi={"A digital Qur’an platform to read, understand, and connect with every verse."} />
                    </div>

                    <div className="lg:col-span-2">
                        <ProjectComp project={mosque} judul={"Ar-Rahmah Quran"} deskripsi={"A digital Qur’an platform to read, understand, and connect with every verse."} />
                    </div>

                    <div className="lg:col-span-2">
                        <ProjectComp project={mosque} judul={"Ar-Rahmah Quran"} deskripsi={"A digital Qur’an platform to read, understand, and connect with every verse."} />
                    </div>
                </div>
            </div>
        </>
    )
}