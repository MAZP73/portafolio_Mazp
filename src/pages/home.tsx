import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import About from "../components/about";
import Projects from "../components/projects";
import Contacto from "../components/contact";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        gsap.set(heroRef.current?.children || [], {
            opacity: 0,
            y: 30,
        });

        gsap.to(heroRef.current?.children || [], {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3,
        });

        gsap.set(imageRef.current, {
            opacity: 0,
            scale: 0.9,
        });

        gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.6,
        });

        gsap.set(buttonsRef.current?.children || [], {
            opacity: 0,
            y: 20,
        });

        gsap.to(buttonsRef.current?.children || [], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.9,
        });

        gsap.set(socialsRef.current?.children || [], {
            opacity: 0,
            y: 15,
        });

        gsap.to(socialsRef.current?.children || [], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            delay: 1.2,
        });

        gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
            if (section.id !== "inicio") {
                gsap.set(section, {
                    opacity: 0,
                    y: 50,
                });

                gsap.to(section, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        });
    }, []);

    return (
        <main className="w-full bg-transparent">
            <section
                id="inicio"
                className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pt-28 pb-16 md:grid-cols-2 md:px-12"
            >
                <div ref={heroRef} className="text-center md:text-left">
                    <span className="text-xs font-semibold tracking-widest text-black uppercase">
                        Miguel Angel Zambrano Peña
                    </span>

                    <h1 className="mt-4 text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl">
                        Hola, soy Miguel
                        <br />
                        <span className="mt-4 inline-block rounded-xl bg-black px-5 py-3 text-base text-white shadow-xl sm:text-lg">
                            <TypeAnimation
                                sequence={[
                                    "Estudiante de Ingeniería de Software", 1500,
                                    "Desarrollador Back-end", 1500,
                                    "Desarrollador Front-end", 1500,
                                    "UI Designer", 1500,
                                    "UX Designer", 1500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                cursor
                            />
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-md text-sm text-gray-600 sm:text-base md:mx-0">
                        Especializado en desarrollo Front-end, Back-end y diseño
                        de interfaces enfocadas en experiencia de usuario.
                    </p>

                    <div
                        ref={buttonsRef}
                        className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
                    >
                        <button
                            onClick={() => {
                                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-900"
                        >
                            Ver mi trabajo
                        </button>

                        <a
                            href="/CV.pdf"
                            download="CV.pdf"
                            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-100 text-center"
                        >
                            Descargar CV
                        </a>

                    </div>

                    <div
                        ref={socialsRef}
                        className="mt-12 flex justify-center gap-8 md:justify-start"
                    >
                        {[
                            { Icon: Linkedin, link: "https://www.linkedin.com/in/miguel-angel-zambrano-pe%C3%B1a-336b0a346/" },
                            { Icon: Github, link: "https://github.com/MAZP73/" },
                            { Icon: Instagram, link: "https://www.instagram.com/_ur.m1gzp/" }
                        ].map(({ Icon, link }, i) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-black transition hover:bg-black hover:text-white"
                            >
                                <Icon size={20} className="transition group-hover:scale-110" />
                            </a>
                        ))}
                    </div>
                </div>

                <div ref={imageRef} className="flex justify-center md:justify-end">
                    <div className="relative h-[360px] w-[280px] rounded-2xl bg-gray-200 shadow-lg sm:h-[420px] sm:w-[340px]">
                        <img
                            src="/profile.png"
                            alt="Miguel Angel"
                            className="h-full w-full rounded-2xl object-cover"
                        />

                        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <p className="text-xs font-medium text-black">
                                Disponible para nuevos proyectos
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contacto /></section>
        </main>
    );
};

export default Home;
