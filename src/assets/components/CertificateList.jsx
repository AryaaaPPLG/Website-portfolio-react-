import { useState } from "react";
import { Download, X } from "lucide-react";


const certificates = [
  {
    id: 1,
    title: "TANTANGAN DAN SOLUSI LOCAL BRAND UNTUK BERSAING DI PASAR DIGITAL",
    issuer: "Kominfo, Siber Kreasi",
    date: "November 2021",
    file: "./certificate/ANAK AGUNG PUTU ARYA PRANA JAYA.pdf",
    preview: "./images/cert1.png", // tambahin gambar preview
  },
  {
    id: 2,
    title: "Intro To Software Engineer",
    issuer: "RevoU",
    date: "Maret 2024",
    file: "/certificate/arya-prana-jaya-certificate-attendance-sefc.pdf",
    preview: "/images/cert2.png",
  },
  {
    id: 3,
    title: "Cyber Cast",
    issuer: "CyberAcademy",
    date: "Agustus 2025",
    file: "/certificate/cyberacademy.pdf",
    preview: "/images/cert3.png",
  },
  {
    id: 4,
    title: "Lulus Dari Front-End Menggunakan Bootstrap",
    issuer: "PT Hummatech",
    date: "Agustus 2025",
    file: "/certificate/sertifikat-hummatech.pdf",
    preview: "/images/cert4.png",
  },
];

export default function CertificateList() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <section id="certificate" className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-foreground mb-4 tracking-tight">
          🎓 Sertifikat<span className="text-primary"> Saya</span>
        </h1>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Berikut Adalah Beberapa Sertifikat Saya Yang Saya Kembangkan Mulai Dari Tahun Ke Tahun
        </p>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl hover:border-blue-400 transition transform hover:-translate-y-2 cursor-pointer overflow-hidden shadow-lg shadow-sky-600 drop-shadow-md drop-shadow-sky-600"
              onClick={() => setSelectedPDF(cert.file)}
            >
              {/* Gambar preview */}
              <img
                src={cert.preview}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-1">
                  {cert.title}
                </h2>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mt-2">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <h2 className="text-white font-semibold">Certificate Preview</h2>
              <button
                onClick={() => setSelectedPDF(null)}
                className="text-white hover:text-red-300 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* PDF Viewer pakai react-pdf */}
            <div className="w-full h-[75vh] overflow-auto flex justify-center bg-gray-100">
              <Document file={selectedPDF}>
                <Page pageNumber={1} width={800} />
              </Document>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-4 p-4 border-t bg-gray-50">
              <a
                href={selectedPDF}
                download
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                <Download size={18} /> Download PDF
              </a>
              <button
                onClick={() => setSelectedPDF(null)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
