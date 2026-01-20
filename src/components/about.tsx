const About = () => {
    return (
        <section className="w-full bg-gray-50">
            <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

                    <h2 className="text-3xl font-bold text-black md:text-4xl md:col-span-1">
                        Acerca de mi
                    </h2>

                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed sm:text-base md:col-span-2">
                        <p>
                            Soy Miguel Angel Zambrano Peña, estudiante de Ingeniería de Software, actualmente cursando el séptimo semestre. Me considero una persona responsable, metódica y orientada a resultados, con una fuerte motivación por aprender y enfrentar nuevos retos tecnológicos.
                        </p>

                        <p>
                            Aunque no cuento aún con experiencia laboral formal bajo contrato, he desarrollado proyectos freelance y personales, lo que me ha permitido adquirir experiencia práctica, fortalecer mi aprendizaje autónomo y aplicar buenas prácticas de desarrollo de software.

                            Me interesa formar parte de equipos de trabajo donde pueda aportar soluciones reales, crecer profesionalmente y contribuir en el desarrollo de proyectos innovadores, especialmente en áreas como desarrollo web, backend y tecnologías modernas.
                        </p>

                        <div className="pt-6">
                            <p className="mb-3 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                                Tecnologías
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Java",
                                    "Python",
                                    "JavaScript",
                                    "TypeScript",
                                    "React",
                                    "Vue.js",
                                    "Tailwind CSS",
                                    "Bootstrap",
                                    "Django",
                                    "FastAPI",
                                    "MySQL",
                                    "MongoDB",
                                    "Azure",
                                    "Unity",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded-full
                           hover:bg-black hover:text-white hover:border-black transition-colors"
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

export default About;
