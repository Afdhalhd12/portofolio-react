import { RxOpenInNewWindow } from "react-icons/rx";

export default function ProjectComp({ project, judul, deskripsi, tech, subTech, link }) {
    return (
        <div className="group w-full bg-white rounded-2xl border border-gray-200 
                        overflow-hidden transition-all duration-300 
                        hover:shadow-xl hover:-translate-y-1
                        h-full flex flex-col"> {/* ⬅️ penting */}


            {/* IMAGE */}
            <div className="relative overflow-hidden">
                <img
                    src={project}
                    alt={judul}
                    className="w-full h-40 object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-[11px] font-roboto font-medium shadow-sm">
                    WEB
                </span>

                <span className="absolute top-3 right-3 bg-black/80 text-white px-2 py-0.5 rounded-full text-[11px] flex items-center gap-1 shadow">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Done
                </span>
            </div>


         
            <div className="p-5 flex flex-col flex-grow">
                
                <h2 className="text-lg font-anton font-semibold text-gray-800 group-hover:text-amber-500 transition">
                    {judul}
                </h2>

                <p className="font-roboto text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                    {deskripsi}
                </p>

                <div className="flex font-roboto flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                        {tech}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                        {subTech}
                    </span>
                </div>

               
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="font-roboto text-xs text-gray-400">
                        View Project
                    </span>

                    <a
                        href={link}
                        target="_blank"
                        className="text-gray-500 hover:text-amber-500 transition"
                    >
                        <RxOpenInNewWindow className="text-xl" />
                    </a>
                </div>

            </div>
        </div>
    );
}