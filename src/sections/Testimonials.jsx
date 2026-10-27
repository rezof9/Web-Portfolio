import { useState } from "react";
import { CheckCheck, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    senderName: "Sarah Chen",
    senderRole: "CTO @ Tech Innovators",
    message:
      "Farel is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable!",
    farelReply:
      "Thank you so much Sarah! It was an absolute pleasure building the core architecture with your team. 🚀",
    time: "10:42 AM",
  },
  {
    id: 2,
    senderName: "Michael Rodriguez",
    senderRole: "Product Manager @ Digital Solutions",
    message:
      "Working with Farel was a game-changer for our project. He delivered ahead of schedule with top-notch React code quality!",
    farelReply:
      "Appreciate it Michael! Glad we managed to ship the MVP earlier than planned. 🔥",
    time: "02:15 PM",
  },
  {
    id: 3,
    senderName: "Emily Watson",
    senderRole: "Engineering Lead @ StartUp Labs",
    message:
      "Farel's expertise in React and Tailwind CSS helped us rebuild our entire frontend in record time. Excellent architectural choices!",
    farelReply:
      "Tailwind & React make a deadly combination! Thanks for the trust Emily. 🙌",
    time: "04:05 PM",
  },
  {
    id: 4,
    senderName: "David Kim",
    senderRole: "CEO @ Innovation Hub",
    message:
      "Not only is Farel technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    farelReply:
      "Thanks David! Collaboration is key to building great software. 💡",
    time: "05:30 PM",
  },
];

// Helper aman untuk JS maupun TS
const getInitials = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" /> Direct Messages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            Endorsements for{" "}
            <span className="font-serif italic font-normal text-primary">
              Farel
            </span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Pilih pesan di bawah untuk melihat rekomendasi & balasan
          </p>
        </div>

        {/* Chat App Window Container */}
        <div className="glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Header Chat */}
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Avatar Inisial Header */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary shadow-sm">
                  {getInitials(current.senderName)}
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-background" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base leading-tight">
                  {current.senderName}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {current.senderRole}
                </p>
              </div>
            </div>

            <div className="text-right hidden sm:block">
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-medium">
                Verified Connection
              </span>
            </div>
          </div>

          {/* Body Chat Container */}
          <div className="p-6 md:p-8 space-y-6 bg-black/20 min-h-[300px] flex flex-col justify-center">
            {/* 1. PESAN MASUK */}
            <div
              key={`msg-${activeIdx}`}
              className="flex gap-3 max-w-[88%] md:max-w-[80%] animate-fade-in"
            >
              {/* Avatar Inisial Pesan Masuk */}
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-semibold text-white shrink-0 mt-1">
                {getInitials(current.senderName)}
              </div>
              <div className="bg-white/10 p-4 md:p-5 rounded-2xl rounded-tl-none border border-white/10 text-white shadow-md">
                <div className="text-xs text-primary/80 font-medium mb-1">
                  To: <span className="text-white font-semibold">Farel</span>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-slate-100">
                  "{current.message}"
                </p>
                <span className="text-[10px] text-muted-foreground mt-2 block text-right">
                  {current.time}
                </span>
              </div>
            </div>

            {/* 2. PESAN BALASAN (Farel) */}
            <div
              key={`reply-${activeIdx}`}
              className="flex gap-3 max-w-[88%] md:max-w-[80%] ml-auto justify-end animate-fade-in"
            >
              <div className="bg-primary/20 p-4 md:p-5 rounded-2xl rounded-tr-none border border-primary/30 text-white shadow-md">
                <div className="text-xs text-primary/90 font-medium mb-1 text-right">
                  <span className="font-semibold text-white">Farel</span> (You)
                </div>
                <p className="text-sm md:text-base leading-relaxed text-slate-100">
                  {current.farelReply}
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-primary/80 mt-2">
                  <span>Read</span>
                  <CheckCheck className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Selector Contact Tabs */}
          <div className="p-4 bg-white/5 border-t border-white/10">
            <div className="text-xs text-muted-foreground mb-2 font-medium px-1">
              Select Message:
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs transition-all shrink-0 cursor-pointer ${
                    idx === activeIdx
                      ? "bg-primary text-primary-foreground font-semibold shadow-md scale-105"
                      : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      idx === activeIdx
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {getInitials(item.senderName)}
                  </div>
                  <span>{item.senderName.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};