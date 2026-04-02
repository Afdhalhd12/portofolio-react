import { RxOpenInNewWindow } from "react-icons/rx";
export default function ProjectComp({ project, judul, deskripsi }) {
    return (
        <>
            <div class="w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div class="relative">
                    <img
                        src={project}
                        className="w-full h-32 object-cover"
                    />

                    <span className="absolute top-2 left-2 bg-white/80 backdrop-blur px-2 py-0.5 rounded-full text-[10px] font-semibold">
                        WEB
                    </span>

                    <span className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Done
                    </span>
                </div>


                <div className="p-4">
                    <h2 className="text-base font-semibold mb-1">
                        {judul}
                    </h2>
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                        {deskripsi}
                    </p>


                    <div className="flex flex-wrap gap-1 mb-3">
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px]">React</span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px]">Tailwind</span>
                    </div>


                    <div className="flex items-center justify-end border-t pt-2">
                        <a className="text-gray-500 hover:text-amber-500" href="https://github.com/Afdhalhd12/Ar-Rahmah">
                            <RxOpenInNewWindow className="text-2xl  " />
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}