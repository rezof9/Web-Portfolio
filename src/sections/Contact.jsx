import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arelmuhammad45@gmail.com",
    href: "mailto:arelmuhammad45@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 882-2186-4385",
    href: "https://wa.me/6288221864385",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bogor, Jawa Barat, Indonesia",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Konfigurasi EmailJS belum tersedia. Silakan periksa file .env."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message:
          "Pesan berhasil dikirim. Terima kasih sudah menghubungi saya!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
          err?.text ||
          err?.message ||
          "Pesan gagal dikirim. Silakan coba lagi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase animate-fade-in">
            Hubungi Saya
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Mari buat sesuatu{" "}
            <span className="font-serif italic font-normal text-primary">
              yang keren.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Punya ide project atau ingin berdiskusi mengenai peluang kerja?
            Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary/20 animate-fade-in animation-delay-300">
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nama
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Masukkan nama kamu..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Pesan
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tulis pesan kamu..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Mengirim...</>
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {/* Status */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}

                  <p className="text-sm">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in animation-delay-400">

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={
                      item.label === "WhatsApp"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>

                      <div className="font-medium">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-3xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                <span className="font-medium">
                  Terbuka untuk Peluang
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Saya terbuka untuk kesempatan kerja, project web,
                freelance, maupun kolaborasi. Jika kamu memiliki
                project atau peluang yang menarik, mari berdiskusi.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};