import { Linkedin, Github, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-black text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h3 className="text-2xl font-bold text-white">Miguel</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
              Desarrollador Web y estudiante de Ingeniería de Software.
              <br />
              Creando soluciones innovadoras con código.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#inicio">Inicio</FooterLink>
              <FooterLink href="#projects">Proyectos</FooterLink>
              <FooterLink href="#about">Sobre mí</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Sígueme
            </h4>
            <div className="flex gap-5">
              <SocialLink href="https://www.instagram.com/_ur.m1gzp/" label="Instagram">
                <Instagram size={20} />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/miguel-angel-zambrano-pe%C3%B1a-336b0a346/"
                label="LinkedIn"
              >
                <Linkedin size={20} />
              </SocialLink>

              <SocialLink href="https://github.com/MAZP73/" label="GitHub">
                <Github size={20} />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-neutral-800" />

        <p className="text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Miguel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-neutral-400 transition-colors hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-neutral-400 transition hover:text-white hover:scale-110"
    >
      {children}
    </a>
  );
}

export default Footer;
