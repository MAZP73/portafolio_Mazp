import { useState} from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  date: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Calculadora de huella de carbono – Frontend",
    category: "Desarrollo",
    image: "/projects/calculadora.png",
    description:
      "Se desarrolló una calculadora de huella de carbono orientada a servicios, enfocada en el frontend de una aplicación web, implementada con Vue.js y Tailwind CSS, en la cual se diseñó y construyó toda la interfaz de usuario junto con sus elementos interactivos. El proyecto incorporó funcionalidades como la exportación de reportes en formato PDF, el consumo de APIs REST mediante Axios y la implementación de una arquitectura modular para componentes y archivos, garantizando un diseño limpio, escalable y mantenible.",
    technologies: ["Vue", "API REST", "Tailwind CSS", "Vite"],
    link: "https://github.com/ncastellanosort/carbon_footprint_frontend",
    date: "2025-10-15",
  },
  {
    id: 2,
    title: "Datos de la calculadora de huella de carbono – Backend",
    category: "Desarrollo",
    image: "/projects/data.png",
    description:
      "Esta sección describe el desarrollo de un servicio para la calculadora de huella de carbono, el cual es responsable de recibir datos desde el frontend mediante solicitudes HTTP POST, procesar la información y formatearla en JSON, incluir el token de autenticación mediante JWT (JSON Web Token) en los encabezados de las solicitudes y comunicarse con el endpoint encargado de realizar el cálculo real de la huella de carbono, garantizando en todo el proceso una transferencia de datos segura, confiable y alineada con los principios de las APIs RESTful.",
    technologies: ["FastAPI", "Python"],
    link: "https://github.com/umb-mazp73/carbon_footprint_data",
    date: "2025-06-02",
  },
  {
    id: 3,
    title: "Manteminiento y Remodelacion sitio web para Duzam S.A.S",
    category: "Mantenimiento",
    image: "/projects/duzam.png",
    description:
      "Se realizaron mejoras visuales en el sitio web de la empresa, enfocándose principalmente en la sección de proyectos. La organización de esta sección fue completamente reestructurada, logrando una presentación más clara, consistente y fácil de usar para el usuario.",
    technologies: ["WordPress", "Hosting", "MySQL", "Elementor"],
    link: "https://duzam.com.co/",
    date: "2025-11-20",
  },
  {
    id: 4,
    title: "Manteminiento y Remodelacion sitio web para Asistemi S.A.S",
    category: "Mantenimiento",
    image: "/projects/asistemi.png",
    description:
      "Se implementaron mejoras visuales y una reestructuración completa del área de manufactura. Además, se agregó una nueva sección de servicios y se realizaron mejoras de usabilidad en el sitio web, haciéndolo más práctico, accesible y fácil de navegar.",
    technologies: ["WordPress", "Hosting", "MySQL"],
    link: "https://asistemi.com.co/",
    date: "2025-11-20",
  },
  {
    id: 5,
    title: "Desarrollo sitio web para Singulart Diseño S.A.S",
    category: "Mantenimiento",
    image: "/projects/singulart.png",
    description:
      "Se implementaron mejoras visuales y una reestructuración completa del área de manufactura. Además, se agregó una nueva sección de servicios y se realizaron mejoras de usabilidad en el sitio web, haciéndolo más práctico, accesible y fácil de navegar.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "ReactMotion",
      "supabase",
    ],
    link: "https://www.singulartdiseno.com/",
    date: "2025-12-20",
  },
];

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [page, setPage] = useState(1);

  

  const sortedProjects = [...PROJECTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleProjects = sortedProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl font-bold text-neutral-900">
            Proyectos Seleccionados
          </h2>
          <p className="mt-3 text-neutral-500">
            Haz clic en un proyecto para ver el detalle completo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group text-left overflow-hidden rounded-2xl bg-neutral-100 transition hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-500">
                  {new Date(project.date).getFullYear()}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-10 w-10 rounded-full text-sm font-medium transition
                  ${
                    page === i + 1
                      ? "bg-black text-white"
                      : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
