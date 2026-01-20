interface ProjectModalProps {
    project: {
        title: string;
        category: string;
        image: string;
        description: string;
        technologies: string[];
        link: string;
    };
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white">

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow hover:bg-neutral-100"
                >
                    ✕
                </button>

                <div className="grid gap-10 p-8 md:grid-cols-3 pt-16">

                    <div className="space-y-6">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-neutral-400">
                                Rol
                            </p>
                            <p className="text-sm font-medium text-neutral-800">
                                {project.category}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-widest text-neutral-400">
                                Tecnologías
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm font-medium text-black underline"
                        >
                            Ver proyecto externo →
                        </a>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-3xl font-bold text-neutral-900">
                            {project.title}
                        </h2>
                        <p className="text-neutral-600 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
