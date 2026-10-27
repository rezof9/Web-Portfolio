const experiences = [
  {
    period: "17 Des 2024 — 28 Mar 2025",
    role: "Peserta Praktik Kerja Lapangan (PKL)",
    company: "PT Belanja Bulanan",
    description:
      "Melaksanakan Praktik Kerja Lapangan untuk mendapatkan pengalaman langsung di lingkungan kerja profesional. Selama PKL, saya belajar memahami alur kerja perusahaan, bekerja secara disiplin, berkomunikasi dengan tim, serta mengembangkan kemampuan di bidang teknologi informasi.",
    technologies: ["IT", "Microsoft Office", "Communication", "Teamwork"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/4
          w-96
          h-96
          bg-primary/10
          rounded-full
          blur-3xl
          -translate-y-1/2
          pointer-events-none
        "
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">

          <span
            className="
              text-primary
              text-sm
              font-semibold
              tracking-[0.2em]
              uppercase
              animate-fade-in
            "
          >
            Pengalaman
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              mb-6
              animate-fade-in
              animation-delay-100
            "
          >
            My First{" "}
            <span className="font-serif italic font-normal text-primary">
              Experience.
            </span>
          </h2>

          <p
            className="
              text-muted-foreground
              leading-relaxed
              animate-fade-in
              animation-delay-200
            "
          >
            Pengalaman saya mendapatkan kesempatan untuk belajar dan
            mengenal dunia kerja secara langsung melalui program
            Praktik Kerja Lapangan.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl">

          {/* Timeline Line */}
          <div
            className="
              timeline-glow
              absolute
              left-0
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-primary
              via-primary/40
              to-transparent
            "
          />

          {/* Experience */}
          <div className="relative pl-8">

            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-0
                top-6
                w-4
                h-4
                bg-primary
                rounded-full
                -translate-x-1/2
                ring-4
                ring-background
                z-10
                shadow-[0_0_20px_rgba(249,115,22,0.7)]
              "
            />

            <div
              className="
                glass
                p-7
                rounded-2xl
                border
                border-border
                hover:border-primary/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Period */}
              <span className="text-sm text-primary font-semibold">
                {experiences[0].period}
              </span>

              {/* Role */}
              <h3 className="text-2xl font-semibold mt-2">
                {experiences[0].role}
              </h3>

              {/* Company */}
              <p className="text-muted-foreground mt-1">
                {experiences[0].company}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mt-5 leading-relaxed max-w-3xl">
                {experiences[0].description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {experiences[0].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      px-3
                      py-1.5
                      bg-primary/5
                      border
                      border-primary/10
                      text-xs
                      rounded-full
                      text-muted-foreground
                      hover:text-primary
                      hover:border-primary/30
                      transition-colors
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};