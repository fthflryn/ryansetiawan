import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown, Download, Github, Instagram, Link, Linkedin, Twitter, X } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { useEffect, useMemo, useState } from "react";


const skills = [
    "Laravel",
    "React.js",
    "Next.js",
    "Vue.js",
    "React.js",
    "Flutter",
    "PHP",
    "TypeScript",
    "Vercel",
    "JavaScript",
    "Prisma",
    "Tailwind CSS",
    "HTML",
    "MySQL",
    "SQLlite",
    "REST API",
    "GIT",
    "React Native",
];

const roles = [
    'Web Developer',
    'FullStack Developer',
    'Mobile Developer'
  ];

export const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const currentFullText = roles[currentRole];
        const typingSpeed = isDeleting ? 50 : 100;
        
        const timer = setTimeout(() => {
        if (!isDeleting) {
            // Mengetik
            if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
            } else {
            // Selesai mengetik, tunggu sebentar lalu mulai menghapus
            setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            // Menghapus
            if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
            } else {
            // Selesai menghapus, pindah ke role berikutnya
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole]);

    const particles = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img src="/bgv2.jpg" alt="bg hero" className="w-full h-full object-cover opacity-40"/>
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <div
                    key={p.id}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        animation: `slow-drift ${p.duration}s ease-in-out infinite`,
                        animationDelay: `${p.delay}s`,
                    }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* sebelah kiri */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span className="inline-flex items-center">
                                        {displayText}
                                    <span className="animate-blink ml-px">|</span>
                                </span>
                            </span>
                        </div>

                        {/* Judul */}  
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">   
                                Membangun Solusi <span className="text-primary glow-text">Digital</span>
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    Yang Bermanfaat
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                                Hai, saya Naufal Bagaskara Budihutama, seorang Full-Stack Developer 
                                yang membangun aplikasi web modern dari frontend hingga backend.
                                Saya fokus pada kode yang rapi, performa yang baik, dan solusi digital yang dapat digunakan dalam jangka panjang.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-warp gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button size="lg">
                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/cv/CV Naufal Bagaskara Budihutama.pdf" download className="inline-block">
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5"/> 
                                    Download CV
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* Sosial Media */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {[
                                {icon: Github, href: "https://github.com/Chavall315"},
                                {icon: X, href: "https://x.com/NaufalGaskara"},
                                {icon: Linkedin, href: "https://www.linkedin.com/in/naufal-bagaskara-budihutama-555ba7377/"},
                                {icon: Instagram, href: "https://www.instagram.com/naufalgaskara_/"},
                            ].map((sosial, idx) => (
                                <a 
                                    key={idx} 
                                    href={sosial.href} 
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<sosial.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* sebelah kanan */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                    src="/profile.jpg" 
                                    alt="Vall"  
                                    className="w-full aspect-4/5 objeect-cover rounded-2xl"
                                />

                                {/* Overlay */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3 ">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-sm font-medium"> Avaible For Work </span>
                                    </div>
                                </div>
                                {/* stats */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary"> Actively </div>
                                    <div className="text-xs text-muted-foreground">Building & Learning</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center"> Technologies I Work With </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"> {skill} </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    )
}