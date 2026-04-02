export default function CardComp({title, text, foto, sub}) {
    return (
        <>
            <div className="shadow-2xl bg-white p-4 rounded-2xl md:w-50 h-25 mt-5">
                <div className="flex gap-2">
                    <img src={foto} className="w-10" />
                    <div>
                        <h5 className="font-bold">{title}</h5>
                        <p className="text-gray-400">{text} <br/> {sub}</p>
                    </div>
                </div>
            </div>
        </>
    )
}