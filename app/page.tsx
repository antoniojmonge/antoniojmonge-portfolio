"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
  },
  viewport: {
    once: true,
  },
};

const books = [
  {
    title: "Sed Ósea",
    year: "2023",
    description:
      "Una exploración del hambre, la carne y la obsesión humana.",
  },
  {
    title: "Quién yace en la habitación del sótano",
    year: "2024",
    description:
      "El horror de descubrir que algunas puertas jamás debieron abrirse.",
  },
    {
    title: "1.5km de subsuelo",
    year: "2024",
    description:
      "El terror se construye desde las profundidades del Perú.",
  },
  {
    title: "Gula de Demonio",
    year: "2024",
    description:
      "Una historia donde el deseo consume más que el cuerpo.",
  },
  {
    title: "Del egoísmo su estirpe",
    year: "2024",
    description:
      "El precio de la salvación puede llevarte a cometer actos impuros.",
  },
  {
    title: "Gula de Dios",
    year: "2024",
    description:
      "Fanatismo, fe y degradación humana llevados al extremo.",
  },
  {
    title: "La confesión del mal/Lena",
    year: "2025",
    description:
      "Un relato donde la culpa tiene voz propia.",
  },
  {
    title: "La señal",
    year: "2025",
    description:
      "Ansiábamos conocerlos, pero ellos no tenían los mismos planes.",
  },
  {
    title: "Cántico de putrefacción",
    year: "2025",
    description:
      "Nunca se debe traer la mitología a la realidad.",
  },
  {
    title: "Anthuanet",
    year: "2026",
    description:
      "El terror psicológico nace dentro de la mente.",
  },
  {
    title: "El artista del diablo",
    year: "2026",
    description:
      "¿Culpable o no? La condena siempre es cíclica.",
  },
  {
    title: "Estirpe Impura",
    year: "2026",
    description:
      "Diez historias sobre egoísmo, horror corporal y degradación humana.",
  },
];

export default function HorrorWriterLanding() {
    const [lightMode, setLightMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);

    return () => {
      document.body.classList.remove("light-mode");
    };
  }, [lightMode]);

  return (
    <main
      className={`min-h-screen overflow-x-hidden ${
        lightMode ? "light-mode" : ""
      }`}
    >
      {/* Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,.15),transparent_70%)]" />
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${
          lightMode
            ? "bg-[#f4ecde]/80 border-black/10"
            : "bg-black/40 border-white/10"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="font-nav text-lg md:text-xl tracking-[0.3em] uppercase">
            Antonio J. Monge
          </h1>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">

            <nav className="font-nav flex gap-8 text-sm uppercase tracking-widest">
              <a href="#libros">Libros</a>
              <a href="#biografia">Biografía</a>
              <a href="#proximamente">Próximamente</a>
            </nav>

            <button
              onClick={() => setLightMode(!lightMode)}
              className="theme-button"
            >
              {lightMode ? "🌙" : "☀️"}
            </button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      {menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className={`md:hidden fixed top-[72px] left-0 w-full z-40 ${
      lightMode
        ? "bg-[#f4ecde]"
        : "bg-black"
    } border-b`}
  >
    <div className="flex flex-col p-6 gap-6 font-nav uppercase tracking-widest">

      <a
        href="#libros"
        onClick={() => setMenuOpen(false)}
      >
        Libros
      </a>

      <a
        href="#biografia"
        onClick={() => setMenuOpen(false)}
      >
        Biografía
      </a>

      <a
        href="#proximamente"
        onClick={() => setMenuOpen(false)}
      >
        Próximamente
      </a>

      <button
        onClick={() => {
          setLightMode(!lightMode);
          setMenuOpen(false);
        }}
        className="text-left"
      >
        {lightMode
          ? "🌙 Modo Oscuro"
          : "☀️ Modo Claro"}
      </button>

    </div>
  </motion.div>
)}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center px-8"
        >
          <p className="uppercase tracking-[0.5em] text-zinc-500 mb-6">
            Escritor
          </p>

          <h2 className="font-title text-6xl md:text-8xl leading-none mb-8 font-bold">
            Hay puertas
            <br />
            que jamás
            <br />
            deberían abrirse
          </h2>

          <p className="max-w-xl mx-auto text-zinc-400 mb-10 text-lg">
            Novelas de horror psicológico,
            folk horror y pesadillas que permanecen
            mucho después de cerrar el libro.
          </p>

          <a
            href="#libros"
            className="inline-block border border-red-900 px-8 py-4 uppercase tracking-widest hover:bg-red-950 transition"
          >
            Explorar obras
          </a>
        </motion.div>
      </section>
            {/* LIBRO DESTACADO */}
      <motion.section
        {...fadeUp}
        className="max-w-6xl mx-auto px-8 py-32"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center">


        <div className="flex justify-center">
          <div className="w-[280px] aspect-[2/3] relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/estirpe-impura.webp"
              alt="Portada Estirpe Impura"
              fill
              sizes="280px"
              className="object-cover"
              priority
            />
          </div>
        </div>
          

          <div>
            <span className="uppercase tracking-[0.3em] text-red-800">
              Último lanzamiento
            </span>

            <h3 className="font-title text-5xl mt-4 mb-6">
              Estirpe Impura
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
              Diez relatos que exploran la degradación humana,
              el egoísmo, la obsesión y el horror corporal.
              Historias donde la monstruosidad no proviene
              de criaturas imposibles, sino de aquello
              que habita dentro de nosotros.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-red-900 hover:bg-red-800 transition px-6 py-3 rounded-lg">
                Comprar
              </button>

              <button className="border border-white/20 px-6 py-3 rounded-lg hover:border-red-900 transition">
                Leer extracto
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* OBRAS PUBLICADAS */}
      <motion.section
        {...fadeUp}
        id="libros"
        className="py-24 border-t border-white/10 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-8">
          <h4 className="font-title text-5xl mb-4 text-center">
            Obras Publicadas
          </h4>

          <p className="text-center text-zinc-500 mb-14">
            Relatos, novelas cortas y proyectos de ficción oscura.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.title}
                className="book-card rounded-2xl p-6 group cursor-pointer"
              >
                <div className="flex gap-5">
                  {/* Mini portada */}
                  <div className="book-cover flex-shrink-0" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-red-800 mb-2">
                      {book.year}
                    </p>

                    <h5 className="font-title text-2xl mb-3 group-hover:text-red-700 transition">
                      {book.title}
                    </h5>

                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-[1px] bg-white/5" />

                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-zinc-600 group-hover:text-red-800 transition">
                  Ver detalles
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
            {/* BIOGRAFÍA */}
      <motion.section
        {...fadeUp}
        id="biografia"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          {/* Foto autor */}
          <div className="flex justify-center">
            <div className="author-photo flex items-center justify-center">
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
                Fotografía
              </span>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h4 className="font-title text-5xl mb-10">
              Sobre mí
            </h4>

            <div className=" text-lg leading-8 text-zinc-400">
              <p>
                Desde temprana edad, descubrí que las sombras
                también podían contar historias.
              </p>

              <p>
                Mi literatura explora los rincones más íntimos
                del miedo: ese que no grita, sino que obliga a
                contener la respiración.
              </p>

              <p>
                Relatos como <em>La confesión del mal</em> y
                <em> Anthuanet </em>
                reflejan esa búsqueda constante por construir
                atmósferas donde el horror nace dentro de
                nuestra propia mente.
              </p>

              <p>
                He publicado diversos cuentos en el sello
                editorial <strong>Alas de Cuervo</strong>
                (Grupo Editorial Letras Negras - Colombia),
                obteniendo menciones y reconocimientos por el
                manejo del suspense psicológico.
              </p>

              <p>
                Actualmente participo en
                <strong> Carnivale </strong>
                (SpeedWagon Media Works - Perú).
              </p>

              <p>
                Mi obra más reciente,
                <strong> Estirpe Impura</strong>,
                reúne diez historias sobre degradación humana,
                egoísmo y horror corporal como eje central.
              </p>

              <blockquote className="border-l-2 border-red-900 pl-6 italic text-zinc-500">
                “Y cuando estés aquí abajo conmigo,
                tú también flotarás.”
                <br />
                <span className="text-sm not-italic">
                  — Stephen King
                </span>
              </blockquote>
              {/* Redes sociales */}
              <div className="mt-12 flex items-center gap-6">
                <a
                  href="https://instagram.com/antoniojmonge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-red-500 transition-colors"
                >
                  <FaInstagram size={28} />
                </a>

                <a
                  href="https://tiktok.com/@antoniojmonge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-red-500 transition-colors"
                >
                  <FaTiktok size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PRÓXIMA PUBLICACIÓN */}
      <motion.section
        {...fadeUp}
        id="proximamente"
        className="py-32 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="uppercase tracking-[0.4em] text-red-800 text-sm">
            Próxima publicación
          </span>

          <h3 className="font-title text-6xl md:text-7xl mt-6 mb-8">
            Senseless
          </h3>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-8">
            Una novela sobre la pérdida gradual de los sentidos,
            la obsesión por comprender la realidad y el horror
            que surge cuando la mente comienza a llenar los
            espacios vacíos.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-[240px] aspect-[2/3] rounded-2xl border border-white/10 bg-gradient-to-b from-red-950 to-black flex items-center justify-center">
              <span className="uppercase tracking-[0.3em] text-zinc-500 text-xs">
                Próxima portada
              </span>
            </div>
          </div>

          <p className="mt-10 uppercase tracking-[0.3em] text-zinc-600 text-sm">
            Próximamente
          </p>
        </div>
      </motion.section>
{/*RESPALDO*/}
      <motion.section
        {...fadeUp}
        className="py-24 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h4 className="font-title text-4xl mb-4">
            Editoriales
          </h4>

          <p className="text-zinc-500 mb-12">
            Sellos editoriales y proyectos con los que colaboro actualmente.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* SpeedWagon */}

            <div className="book-card rounded-2xl p-8 flex flex-col items-center">
              <img
                src="/editoriales/speedwagon.svg"
                alt="SpeedWagon Media Works"
                className="h-20 object-contain mb-6"
              />

              <h5 className="font-title text-2xl mb-2">
                SpeedWagon Media Works
              </h5>

              <p className="text-zinc-500 text-sm">
                Perú
              </p>
            </div>

            {/* Alas de Cuervo */}

            <div className="book-card rounded-2xl p-8 flex flex-col items-center">
              <img
                src="/editoriales/alas-de-cuervo.png"
                alt="Alas de Cuervo"
                className="h-20 object-contain mb-6"
              />

              <h5 className="font-title text-2xl mb-2">
                Alas de Cuervo
              </h5>

              <p className="text-zinc-500 text-sm">
                Grupo Editorial Letras Negras · Colombia
              </p>
            </div>

          </div>
        </div>
      </motion.section>

      {/* CITA */}
      <motion.section
        {...fadeUp}
        className="py-32 text-center max-w-5xl mx-auto px-8"
      >
        <blockquote className="font-title text-4xl md:text-6xl italic text-zinc-300 leading-tight">
          “Cuando la puerta volvió a abrirse,
          nadie recordaba haberla cerrado.”
        </blockquote>
      </motion.section>

      {/* FOOTER */}
      <footer className="text-center">
        © 2026 Antonio J. Monge.
        <br />
        Todos los derechos reservados.
        <br />
        
      </footer>
    </main>
  );
}