import { useMemo, useState } from "react";
import { Download, X, ExternalLink, Calendar, Building2 } from "lucide-react";


const certificates = [
  {
    id: 1,
    title: "TANTANGAN DAN SOLUSI LOCAL BRAND UNTUK BERSAING DI PASAR DIGITAL",
    issuer: "Kominfo, Siber Kreasi",
    date: "November 2021",
    file: "/certificate/ANAK AGUNG PUTU ARYA PRANA JAYA.pdf",
    preview: "/images/cert1.png",
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

  const selectedCert = useMemo(() => {
    if (!selectedPDF) return null;
    return certificates.find((c) => c.file === selectedPDF) ?? null;
  }, [selectedPDF]);

  return (
    <section id="certificate" className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-foreground mb-4 tracking-tight">
          Sertifikat<span className="text-primary"> Saya</span>
        </h1>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Berikut Adalah Beberapa Sertifikat Saya Yang Saya Kembangkan Mulai Dari Tahun Ke Tahun
        </p>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl border border-border bg-card hover:bg-card/95 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              onClick={() => setSelectedPDF(cert.file)}
            >
              {/* Preview */}
              <div className="relative">
                <img
                  src={cert.preview}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h2 className="text-base sm:text-lg font-semibold text-white line-clamp-2 drop-shadow">
                    {cert.title}
                  </h2>
                </div>
              </div>

              <div className="p-4 text-left">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span className="line-clamp-1">{cert.issuer}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    Click to preview
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-background rounded-2xl shadow-2xl max-w-5xl w-full relative overflow-hidden border border-border">
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <h2 className="text-white font-semibold flex items-center gap-2">
                <ExternalLink size={18} /> {selectedCert?.title ?? "Certificate Preview"}
              </h2>
              <button
                onClick={() => setSelectedPDF(null)}
                className="text-white hover:text-red-300 transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* PDF Viewer using iframe for better compatibility */}
            <div className="w-full h-[70vh] bg-muted">
              <iframe
                src={`${selectedPDF}#toolbar=0`}
                className="w-full h-full border-none"
                title="Certificate Viewer"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-4 p-4 border-t bg-muted/50">
              <a
                href={selectedPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} /> Open Full View
              </a>
              <a
                href={selectedPDF}
                download
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors"
              >
                <Download size={18} /> Download
              </a>
              <button
                onClick={() => setSelectedPDF(null)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors"
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
