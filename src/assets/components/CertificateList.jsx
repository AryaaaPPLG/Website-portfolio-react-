import { useMemo, useState } from "react";
import { Download, X, ExternalLink, Calendar, Building2 } from "lucide-react";
import { useMediaQuery } from "../../lib/useMediaQuery";


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
  const isMobile = useMediaQuery("(max-width: 768px)");

  const selectedCert = useMemo(() => {
    if (!selectedPDF) return null;
    return certificates.find((c) => c.file === selectedPDF) ?? null;
  }, [selectedPDF]);

  return (
    <section id="certificate" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-foreground mb-4 tracking-tight">
          Sertifikat<span className="text-primary"> Saya</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 text-sm sm:text-base md:text-lg">
          Berikut Adalah Beberapa Sertifikat Saya Yang Saya Kembangkan Mulai Dari Tahun Ke Tahun
        </p>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
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
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white line-clamp-2 drop-shadow">
                    {cert.title}
                  </h2>
                </div>
              </div>

              <div className="p-4 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="line-clamp-1">{cert.issuer}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{cert.date}</span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-2 sm:p-4 animate-in fade-in duration-300">
          <div className="bg-background rounded-xl sm:rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] relative overflow-hidden border border-border flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 p-3 sm:p-4">
              <h2 className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base truncate pr-4">
                <ExternalLink size={16} /> {selectedCert?.title ?? "Certificate Preview"}
              </h2>
              <button
                onClick={() => setSelectedPDF(null)}
                className="text-white hover:text-red-300 transition-colors p-1 flex-shrink-0"
              >
                <X size={20} sm:size={24} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-grow bg-muted overflow-auto">
              {isMobile ? (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                   <p className="text-muted-foreground text-sm">Preview PDF tidak didukung di beberapa perangkat mobile.</p>
                   <a
                    href={selectedPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold"
                  >
                    Buka Sertifikat (PDF)
                  </a>
                </div>
              ) : (
                <iframe
                  src={`${selectedPDF}#toolbar=0`}
                  className="w-full h-full min-h-[50vh] border-none"
                  title="Certificate Viewer"
                />
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap justify-end gap-2 p-3 sm:p-4 border-t bg-muted/50">
              <a
                href={selectedPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors text-xs sm:text-sm"
              >
                <ExternalLink size={14} sm:size={18} /> Open
              </a>
              <a
                href={selectedPDF}
                download
                className="flex items-center gap-2 bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors text-xs sm:text-sm"
              >
                <Download size={14} sm:size={18} /> Save
              </a>
              <button
                onClick={() => setSelectedPDF(null)}
                className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors text-xs sm:text-sm"
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
