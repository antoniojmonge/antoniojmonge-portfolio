"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import DarkVeil from "@/components/DarkVeil";
import SplitText from "@/components/SplitText";
import SpotlightCard from "@/components/SpotlightCard";
import TiltedCard from "@/components/TiltedCard";
import GhostCursor from "@/components/GhostCursor";
import ScrollFloat from "@/components/ScrollFloat";
import LetterGlitch from "@/components/LetterGlitch";
import AnimatedContent from "@/components/AnimatedContent";

const estirpeStories = [
  { title: "Sed Ósea", year: "2023" },
  { title: "Quién yace en la habitación del sótano", year: "2024" },
  { title: "1.5km de subsuelo", year: "2024" },
  { title: "Gula de Demonio", year: "2024" },
  { title: "Del egoísmo su estirpe", year: "2024" },
  { title: "Gula de Dios", year: "2024" },
  { title: "La confesión del mal / Lena", year: "2025" },
  { title: "La señal", year: "2025" },
  { title: "Anthuanet", year: "2026" },
  { title: "El artista del diablo", year: "2026" },
];

const standaloneWorks = [
  {
    title: "Cántico de putrefacción",
    year: "2025",
    description:
      "Nunca se debe traer la mitología a la realidad.",
  },
];

export default function HorrorWriterLanding() {
    const [lightMode, setLightMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [indexOpen, setIndexOpen] = useState(false);

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
      <GhostCursor
        color={lightMode ? "#7c1d1d" : "#8c1a1a"}
        mixBlendMode={lightMode ? "multiply" : "screen"}
        brightness={0.45}
        trailLength={28}
        inertia={0.5}
        grainIntensity={0.03}
        bloomStrength={0.05}
        bloomRadius={0.8}
        edgeIntensity={0.35}
        zIndex={15}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-70">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.03}
            scanlineIntensity={0.12}
            speed={0.5}
            scanlineFrequency={2}
            warpAmount={0.5}
            resolutionScale={1}
            lightMode={lightMode}
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            lightMode
              ? "from-[#f4ecde]/80 via-[#f4ecde]/55 to-[#f4ecde]/90"
              : "from-black/60 via-black/40 to-black/85"
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,.15),transparent_70%)]" />
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${
          lightMode
            ? "bg-[#f4ecde]/80 border-black/10"
            : "bg-black/40 border-theme"
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
          <p className="uppercase tracking-[0.5em] text-muted mb-6">
            Escritor
          </p>

          <SplitText
            text="Hay puertas que jamás deberían abrirse"
            tag="h2"
            className="font-title text-6xl md:text-8xl leading-none font-bold max-w-[15ch] md:max-w-[17ch] mx-auto mb-8"
            textAlign="center"
            delay={55}
            duration={1.1}
            ease="power3.out"
            threshold={0.15}
          />

          <p className="max-w-xl mx-auto text-body mb-10 text-lg">
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
      <AnimatedContent
        className="max-w-6xl mx-auto px-8 py-32"
        distance={60}
        duration={0.8}
        ease="power3.out"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center">


        <div className="flex justify-center">
          <TiltedCard
            imageSrc="/images/estirpe-impura.webp"
            altText="Portada Estirpe Impura"
            captionText="Estirpe Impura"
            containerHeight="440px"
            containerWidth="320px"
            imageHeight="420px"
            imageWidth="280px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
          />
        </div>
          

          <div>
            <span className="uppercase tracking-[0.3em] text-red-800">
              Último lanzamiento
            </span>

            <h3 className="font-title text-5xl mt-4 mb-3">
              Estirpe Impura
            </h3>

            <p className="font-nav uppercase tracking-[0.3em] text-muted text-xs mb-6">
              Relatos: carne y olvido
            </p>

            <p className="text-body leading-relaxed mb-8 text-lg">
              Diez relatos escritos y publicados entre 2023 y 2026 en
              distintas editoriales de Colombia, reunidos por primera
              vez en un solo volumen: degradación humana, egoísmo,
              obsesión y horror corporal.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-red-900 hover:bg-red-800 text-white transition px-6 py-3 rounded-lg">
                Comprar
              </button>

              <button className="border border-theme px-6 py-3 rounded-lg hover:border-red-900 transition">
                Leer extracto
              </button>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setIndexOpen(!indexOpen)}
                aria-expanded={indexOpen}
                className="inline-flex items-center gap-3 border border-theme hover:border-red-900 px-6 py-3 rounded-lg uppercase tracking-widest text-xs transition"
              >
                {indexOpen ? "Ocultar índice" : "Ver índice · 10 relatos"}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    indexOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {indexOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="pt-6">
                      {estirpeStories.map((story, i) => (
                        <li
                          key={story.title}
                          className="flex items-baseline gap-4 py-3 border-b border-theme last:border-b-0"
                        >
                          <span className="text-faint text-xs w-8 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          <span className="font-title text-lg md:text-xl flex-1">
                            {story.title}
                          </span>

                          <span className="text-faint text-xs tabular-nums">
                            {story.year}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* OBRAS PUBLICADAS */}
      <AnimatedContent
        id="libros"
        className="py-24 border-t border-theme border-b border-theme"
        distance={60}
        duration={0.8}
        ease="power3.out"
      >
        <div className="max-w-6xl mx-auto px-8">
          <ScrollFloat
            containerClassName="font-title text-5xl mb-4 text-center"
            ease="power2.out"
          >
            Obras Publicadas
          </ScrollFloat>

          <p className="text-center text-muted mb-14">
            Relatos y proyectos de ficción oscura publicados de forma
            independiente.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {standaloneWorks.map((work) => (
              <SpotlightCard
                key={work.title}
                spotlightColor={
                  lightMode
                    ? "rgba(120, 0, 0, 0.15)"
                    : "rgba(140, 26, 26, 0.35)"
                }
                className="w-full sm:w-[380px] p-6 group cursor-pointer"
              >
                <div className="flex gap-5">
                  {/* Mini portada */}
                  <div className="book-cover flex-shrink-0" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-red-800 mb-2">
                      {work.year}
                    </p>

                    <h5 className="font-title text-2xl mb-3 group-hover:text-red-700 transition">
                      {work.title}
                    </h5>

                    <p className="text-sm text-muted leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </AnimatedContent>
            {/* BIOGRAFÍA */}
      <AnimatedContent
        id="biografia"
        className="max-w-7xl mx-auto px-8 py-32"
        direction="horizontal"
        distance={80}
        duration={0.9}
        ease="power3.out"
      >
        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          {/* Foto autor */}
          <div className="flex justify-center">
            <div className="author-photo relative overflow-hidden">
              <Image
                src="/images/me.jpg"
                alt="Antonio J. Monge"
                fill
                sizes="280px"
                className="object-cover grayscale-[60%]"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <ScrollFloat
              containerClassName="font-title text-5xl mb-10"
              ease="power2.out"
            >
              Sobre mí
            </ScrollFloat>

            <div className=" text-lg leading-8 text-body">
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

              <blockquote className="border-l-2 border-red-900 pl-6 italic text-muted">
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
                  className="text-body hover:text-red-500 transition-colors"
                >
                  <FaInstagram size={28} />
                </a>

                <a
                  href="https://tiktok.com/@antoniojmonge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body hover:text-red-500 transition-colors"
                >
                  <FaTiktok size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* PRÓXIMA PUBLICACIÓN */}
      <AnimatedContent
        id="proximamente"
        className="relative py-32 border-t border-theme overflow-hidden"
        distance={60}
        duration={0.8}
        ease="power3.out"
      >
        <div className="absolute inset-0">
          <LetterGlitch
            glitchColors={
              lightMode
                ? ["#c9b8a0", "#7c1d1d", "#9ca3af"]
                : ["#3a0a0a", "#8c1a1a", "#6b7280"]
            }
            glitchSpeed={70}
            centerVignette={false}
            outerVignette
            smooth
            lightMode={lightMode}
            characters="SENSELESSABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*()-_+=/[]{};:<>.,"
          />
        </div>
        <div
          className={`absolute inset-0 ${
            lightMode ? "bg-[#f4ecde]/85" : "bg-black/75"
          }`}
        />
        <div className="relative max-w-5xl mx-auto px-8 text-center">
          <span className="uppercase tracking-[0.4em] text-red-800 text-sm">
            Próxima publicación
          </span>

          <h3 className="font-title text-6xl md:text-7xl mt-6 mb-8">
            Senseless
          </h3>

          <p className="max-w-3xl mx-auto text-body text-lg leading-8">
            Una novela sobre la pérdida gradual de los sentidos,
            la obsesión por comprender la realidad y el horror
            que surge cuando la mente comienza a llenar los
            espacios vacíos.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-[240px] aspect-[2/3] rounded-2xl border border-theme overflow-hidden relative shadow-2xl">
              <Image
                src="/images/senseless-portada.png"
                alt="Portada provisional de Senseless"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-10 uppercase tracking-[0.3em] text-faint text-sm">
            Próximamente
          </p>
        </div>
      </AnimatedContent>
{/*RESPALDO*/}
      <AnimatedContent
        className="py-24 border-t border-theme"
        distance={60}
        duration={0.8}
        ease="power3.out"
      >
        <div className="max-w-5xl mx-auto px-8 text-center">
          <ScrollFloat
            containerClassName="font-title text-4xl mb-4"
            ease="power2.out"
          >
            Editoriales
          </ScrollFloat>

          <p className="text-muted mb-12">
            Sellos editoriales y proyectos con los que colaboro actualmente.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* SpeedWagon */}

            <SpotlightCard
              spotlightColor={
                lightMode
                  ? "rgba(120, 0, 0, 0.15)"
                  : "rgba(140, 26, 26, 0.35)"
              }
              className="p-8 flex flex-col items-center"
            >
              <img
                src="/editoriales/speedwagon.svg"
                alt="SpeedWagon Media Works"
                className="h-20 object-contain mb-6"
              />

              <h5 className="font-title text-2xl mb-2">
                SpeedWagon Media Works
              </h5>

              <p className="text-muted text-sm">
                Perú
              </p>
            </SpotlightCard>

            {/* Alas de Cuervo */}

            <SpotlightCard
              spotlightColor={
                lightMode
                  ? "rgba(120, 0, 0, 0.15)"
                  : "rgba(140, 26, 26, 0.35)"
              }
              className="p-8 flex flex-col items-center"
            >
              <img
                src="/editoriales/alas-de-cuervo.png"
                alt="Alas de Cuervo"
                className="h-20 object-contain mb-6"
              />

              <h5 className="font-title text-2xl mb-2">
                Alas de Cuervo
              </h5>

              <p className="text-muted text-sm">
                Grupo Editorial Letras Negras · Colombia
              </p>
            </SpotlightCard>

          </div>
        </div>
      </AnimatedContent>

      {/* CITA */}
      <AnimatedContent
        className="py-32 text-center max-w-5xl mx-auto px-8"
        distance={40}
        scale={0.92}
        duration={0.9}
        ease="power3.out"
      >
        <ScrollFloat
          containerClassName="font-title italic text-quote"
          textClassName="text-[clamp(1.8rem,5vw,3.5rem)] leading-tight"
          ease="power2.out"
          stagger={0.015}
        >
          “Cuando la puerta volvió a abrirse, nadie recordaba haberla cerrado.”
        </ScrollFloat>
      </AnimatedContent>

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