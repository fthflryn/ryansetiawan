import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Menulis kode yang terstruktur dan mudah dipahami, baik di sisi frontend maupun backend, sehingga lebih mudah dikembangkan dan dipelihara.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Mengutamakan aplikasi yang responsif dan efisien dengan mengoptimalkan antarmuka pengguna serta logika backend agar berjalan cepat dan stabil.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Terbiasa bekerja dalam tim, berkomunikasi dengan jelas, serta berkontribusi secara bertanggung jawab untuk mencapai tujuan bersama.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Selalu belajar teknologi baru dan mencoba pendekatan yang lebih baik untuk meningkatkan kualitas solusi yang dibangun.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative scroll-mt-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Tentang Saya
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Mengubah ide menjadi aplikasi web yang utuh,
              <span className="font-serif italic font-normal text-white">
                {" "}
                dan siap digunakan di dunia nyata.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Saya adalah seorang full-stack web developer yang tertarik membangun aplikasi web dari sisi frontend hingga backend. 
                Saya terbiasa mengembangkan antarmuka menggunakan React, Vue.js dan Next.js, serta membangun logika server, API, dan pengolahan data menggunakan Laravel dan PHP.
              </p>
              <p>
                Saya senang memecahkan masalah melalui kode dan selalu berusaha membuat aplikasi yang rapi, efisien, serta mudah dikembangkan dalam jangka panjang. 
                Bagi saya, aplikasi yang baik bukan hanya berfungsi dengan baik, tetapi juga memiliki struktur yang jelas dan dapat dipelihara dengan mudah.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “Saya membangun aplikasi yang tidak hanya berjalan dengan baik, tetapi juga memiliki struktur yang jelas, mudah dikembangkan, dan efisien dari sisi sistem.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};  