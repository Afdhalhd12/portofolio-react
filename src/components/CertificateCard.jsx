export default function CertificateCard({ image, title, issuer, date, link }) {
    return (
        <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-semibold text-lg font-anton">{title}</h3>
                <p className="text-sm text-gray-500 mt-1 font-roboto">{issuer}</p>
                <p className="text-xs text-gray-400 mt-2 font-roboto">{date}</p>

                <a href={link} className="font-roboto mt-4 text-sm font-medium text-amber-500 hover:underline">
                    View Certificate → 
                </a>
            </div>
        </div>
    );
}