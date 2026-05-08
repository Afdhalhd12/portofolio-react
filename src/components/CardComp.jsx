export default function CardComp({ title, text, foto, sub }) {
  return (
    <div className="shadow hover:shadow-3xl bg-white p-4 rounded-2xl md:w-50 h-25 mt-5 
                    transition-transform duration-300 hover:scale-105">
      <div className="flex gap-2">
        <img src={foto} className="w-10" />
        <div>
          <h5 className="font-bold font-anton">{title}</h5>
          <p className="text-gray-400 font-roboto">
            {text} <br /> {sub}
          </p>
        </div>
      </div>
    </div>
  );
}