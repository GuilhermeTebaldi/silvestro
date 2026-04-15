import { motion, useScroll, useTransform } from "motion/react";
import { ChevronLeft, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Storia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fdfcfb] text-terra font-sans selection:bg-oro selection:text-burro overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://i.pinimg.com/736x/9e/b7/79/9eb7791592a2f6723e4f81abdb7c5045.jpg" 
            alt="Tuscan Hills" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-white/80 block">Un'Eredità di Famiglia</span>
            <h1 className="font-serif text-7xl md:text-[10rem] text-white leading-none tracking-tighter">
              La Nostra <br />
              <span className="italic font-light">Storia</span>
            </h1>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/60"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/60 to-white/0 mx-auto" />
        </motion.div>
      </section>

      {/* Content Section */}
      <main className="relative z-10 bg-[#fdfcfb] pt-32 pb-40 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Intro Paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-40">
            <div className="lg:col-span-4 sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <span className="text-oro font-serif text-5xl italic">01</span>
                <div className="h-px w-12 bg-oro/30" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-terra/40">Le Origini</span>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl md:text-4xl leading-tight text-terra/90"
              >
                Tutto ebbe inizio nel cuore della Val d'Orcia, dove il tempo sembra essersi fermato. La nostra famiglia, da generazioni, custodisce il segreto di un'arte antica: la pastorizia d'eccellenza.
              </motion.p>
            </div>
          </div>

          {/* Image with Quote */}
          <div className="relative mb-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://i.pinimg.com/1200x/35/b8/32/35b832ca3ebbfb7e485496371015baa4.jpg" 
                alt="Pastures" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-6 md:right-12 bg-burro p-8 md:p-12 max-w-md shadow-xl rounded-3xl border border-terra/5"
            >
              <Quote className="text-oro/20 mb-4" size={40} />
              <p className="font-serif text-xl italic leading-relaxed text-terra/80">
                "Non siamo solo produttori; siamo custodi di un ecosistema. Le nostre pecore pascolano libere tra le erbe aromatiche della Toscana."
              </p>
            </motion.div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-40">
            <div className="lg:col-span-4 lg:order-2 sticky top-32 lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:items-end gap-4"
              >
                <span className="text-oro font-serif text-5xl italic">02</span>
                <div className="h-px w-12 bg-oro/30" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-terra/40">La Filosofia</span>
              </motion.div>
            </div>
            <div className="lg:col-span-8 lg:order-1 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-xl md:text-2xl font-light leading-relaxed text-terra/70">
                  Ogni forma di pecorino, ogni salume, ogni goccia di latte è il risultato di un lavoro fatto a mano, con pazienza e rispetto per i cicli naturali. SILVESTRO non è solo un nome, è la nostra promessa di purezza e qualità.
                </p>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-terra/70">
                  Lavoriamo il latte a crudo per preservarne ogni sfumatura organolettica, mantenendo vive le tradizioni che hanno reso celebre la nostra terra in tutto il mondo.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Stats/Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Tradizione", value: "Dal 1954", desc: "Metodi artigianali tramandati di padre in figlio." },
              { label: "Purezza", value: "100%", desc: "Latte di pecora munto e lavorato in giornata." },
              { label: "Passione", value: "Sempre", desc: "Amore per la terra e rispetto per gli animali." }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-white rounded-[32px] border border-terra/5 hover:shadow-xl transition-shadow group text-center"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-oro font-bold block mb-4">{stat.label}</span>
                <span className="font-serif text-4xl text-terra block mb-4 group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
                <p className="text-sm text-terra/50 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
