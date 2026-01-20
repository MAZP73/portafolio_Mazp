import { useState } from "react";
import { ComputerIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("inicio")}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
            <ComputerIcon size={18} />
          </div>
          <span className="text-lg font-semibold text-black">MAZP</span>
        </div>

        {/* LINKS DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li
            onClick={() => scrollToSection("inicio")}
            className="cursor-pointer hover:text-black transition"
          >
            Inicio
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-black transition"
          >
            Sobre mí
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-black transition"
          >
            Proyectos
          </li>
        </ul>

        {/* BOTÓN DESKTOP */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-900 transition"
          >
            Contáctame
          </button>
        </div>

        {/* HAMBURGUESA MOBILE */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-gray-700">
            <li onClick={() => scrollToSection("inicio")} className="cursor-pointer hover:text-black">
              Inicio
            </li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-black">
              Sobre mí
            </li>
            <li onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-black">
              Proyectos
            </li>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-900 transition"
            >
              Contáctame
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
