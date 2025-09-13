import { useState } from "react";
import { Download, X } from "lucide-react"; // icon modern

const certificates = [
  {
    id: 1,
    title: "TANTANGAN DAN SOLUSI LOCAL BRAND UNTUK BERSAING DI PASAR DIGITAL",
    issuer: "Kominfo, Siber Kreasi",
    date: "November 2021",
    file: "/certificate/ANAK AGUNG PUTU ARYA PRANA JAYA.pdf",
  },
  {
    id: 2,
    title: "Intro To Software Engineer",
    issuer: "RevoU",
    date: "Maret 2024",
    file: "/certificate/arya-prana-jaya-certificate-attendance-sefc.pdf",
  },
  {
    id: 3,
    title: "Cyber Cast",
    issuer: "CyberAcademy",
    date: "Agustus 2025",
    file: "/certificate/cyberacademy.pdf",
  },
   {
    id: 4,
    title: "Cyber Cast",
    issuer: "CyberAcademy",
    date: "Agustus 2025",
    file: "/certificate/Certificate-of-Completion-Introduction-to-Information-Security.pdf",
  },
     {
    id: 5,
    title: "Lulus Dari Kelas Industri Hummatech Sebagai Front-end Dev",
    issuer: "PT Hummatech",
    date: "Juli 2025",
    file: "/certificate/sertifikat-hummatech.pdf",
  }
];

export default function CertificateList() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <section id="certificate" className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
              className="backdrop-blur-xs blur-sm hover:blur-none  rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-2xl hover:border-blue-400 transition transform hover:-translate-y-2 cursor-target"
            >
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  {cert.title}
                </h2>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mt-2">{cert.date}</p>
              </div>

              {/* Button */}
              <button
                onClick={() => setSelectedPDF(cert.file)}
                className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition"
              >
                View PDF
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full relative overflow-hidden">
            {/* Header Modal */}
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <h2 className="text-white font-semibold">Certificate Preview</h2>
              <button
                onClick={() => setSelectedPDF(null)}
                className="text-white hover:text-red-300 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* PDF Preview */}
            <iframe
              src={selectedPDF}
              title="Certificate PDF"
              className="w-full h-[75vh]"
            ></iframe>

            {/* Footer Modal */}
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
