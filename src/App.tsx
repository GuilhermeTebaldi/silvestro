/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Instagram, Mail, MapPin, Phone, ChevronDown, Menu, X, Milk, Utensils, Beef, ShoppingBag, Droplets, Search, Star, Thermometer, Sun } from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Storia from "./pages/Storia";
import Prodotti from "./pages/Prodotti";

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    "https://i.pinimg.com/736x/9e/b7/79/9eb7791592a2f6723e4f81abdb7c5045.jpg",
    "https://i.pinimg.com/736x/9d/a6/8a/9da68ab20d00a103e97af11bce9c39e4.jpg"
  ];

  const slides = [
    {
      subtitle: "FORMAGGIO TIPO",
      title: "PECORINO TOSCANO",
      image: "https://picsum.photos/seed/pecorino/800/800",
      rightText: "VARIE MATURAZIONI,",
      rightHighlight: "MOLTO SAPORE!"
    },
    {
      subtitle: "ECCELLENZA",
      title: "RICOTTA FRESCA",
      image: "https://picsum.photos/seed/ricotta/800/800",
      rightText: "TRADIZIONE TOSCANA,",
      rightHighlight: "PURO LATTE!"
    },
    {
      subtitle: "SPECIALITÀ",
      title: "SALAME DI PECO",
      image: "https://picsum.photos/seed/salami/800/800",
      rightText: "GUSTO DECISO,",
      rightHighlight: "AROMA UNICO!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: "01",
      title: "Latte di Pecora Crudo",
      description: "Munto ogni mattina e lavorato immediatamente per preservare la purezza e i profumi dei pascoli toscani. Un nettare bianco, ricco di nutrienti e sapore.",
      icon: <Milk className="text-oro" size={24} />
    },
    {
      id: "02",
      title: "Formaggi Stagionati in Grotta",
      description: "Dal pecorino fresco al riserva stagionato oltre 12 mesi. Ogni forma riposa in grotte naturali, sviluppando aromi complessi e una consistenza inimitabile.",
      icon: <Utensils className="text-oro" size={24} />
    },
    {
      id: "03",
      title: "Salumi Artigianali",
      description: "Specialità norcine preparate secondo antiche ricette. Salumi di pecora dal gusto deciso e speziato, perfetti per accompagnare i nostri formaggi.",
      icon: <Beef className="text-oro" size={24} />
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* --- HERO SECTION (Slim Green Banner) --- */}
      <section className="relative pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden bg-[#4A6741] rounded-b-[40px] md:rounded-b-[60px] shadow-lg z-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-end justify-center px-8 pb-10 md:pb-14"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-20">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 text-center">
              <motion.h2 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] opacity-40"
              >
                {slides[currentSlide].title} • {slides[currentSlide].subtitle}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
           {slides.map((_, i) => (
             <button 
               key={i} 
               onClick={() => setCurrentSlide(i)}
               className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'bg-[#ffcc00] w-8' : 'bg-white/30 w-2'}`} 
             />
           ))}
        </div>
      </section>

      {/* --- WAVY IMAGE SLIVER --- */}
      <section className="relative h-[220px] md:h-[320px] overflow-hidden -mt-16 md:-mt-24 z-10">
        <AnimatePresence>
          <motion.div
            key={bannerIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img 
              src={bannerImages[bannerIndex]} 
              className="w-full h-full object-cover"
              alt="Local"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </AnimatePresence>

        {/* Wavy Bottom Divider - Corrected to create a smooth wave at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[40px] md:h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120L1200,120L1200,40Q900,100 600,40Q300,-20 0,40Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* --- 3D PRODUCT GALLERY --- */}
      <section className="bg-white py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-8 text-center">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-oro font-bold mb-2"
          >
            La Selezione
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl text-terra"
          >
            I Nostri Capolavori
          </motion.h2>
        </div>

        <ProductCarousel />
      </section>

      {/* --- TOP PICKS SECTION (Inspired by Reference) --- */}
      <TopPicks />

      {/* --- PRODUCTS SECTION --- */}
      <section id="prodotti" className="bg-white py-16 md:py-32 px-4 md:px-8 border-t border-terra/5 relative overflow-hidden">
        {/* Mobile Blurred Background */}
        <div className="absolute inset-0 md:hidden opacity-[0.05] pointer-events-none">
          <img 
            src="https://i.pinimg.com/1200x/35/b8/32/35b832ca3ebbfb7e485496371015baa4.jpg" 
            className="w-full h-full object-cover blur-3xl scale-150"
            alt=""
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-[100px_1fr] md:grid-cols-2 gap-6 md:gap-24 items-start relative z-10">
          {/* Left: Sheep Image */}
          <div className="relative flex items-center justify-center sticky top-24 md:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <img 
                src="https://i.pinimg.com/1200x/35/b8/32/35b832ca3ebbfb7e485496371015baa4.jpg" 
                alt="Eccellenza Ovina" 
                className="w-full h-auto object-cover rounded-2xl md:rounded-3xl shadow-lg md:shadow-none"
                style={{ 
                  maskImage: window.innerWidth > 768 ? 'linear-gradient(to bottom, black 80%, transparent 100%)' : 'none',
                  WebkitMaskImage: window.innerWidth > 768 ? 'linear-gradient(to bottom, black 80%, transparent 100%)' : 'none'
                }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right: Product Descriptions */}
          <div className="space-y-10 md:space-y-20">
            <div className="space-y-4 md:space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[8px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-oro font-bold"
              >
                I Nostri Tesori
              </motion.h3>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-serif text-2xl md:text-6xl lg:text-7xl text-terra leading-[1.1] md:leading-[0.9]"
              >
                L'Arte del Latte <br />
                <span className="italic text-oro/80">& del Tempo</span>
              </motion.h2>
            </div>
            
            <div className="relative space-y-8 md:space-y-16 pl-6 md:pl-12">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-terra/10" />
              
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Dot on the line */}
                  <div className="absolute -left-[25px] md:-left-[49px] top-1.5 md:top-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-oro scale-0 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="font-serif text-lg md:text-4xl text-oro/30 group-hover:text-oro transition-colors duration-500">
                        {product.id}
                      </span>
                      <div className="p-1.5 md:p-2 bg-burro/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {product.icon}
                      </div>
                    </div>
                    
                    <h4 className="font-serif text-lg md:text-4xl text-terra group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                      {product.title}
                    </h4>
                    <p className="text-terra/60 font-light leading-relaxed max-w-lg text-xs md:text-lg">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECOND WAVY SECTION (Before Footer) --- */}
      <section className="relative h-[200px] md:h-[350px] overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img 
            src="https://i.pinimg.com/736x/9d/a6/8a/9da68ab20d00a103e97af11bce9c39e4.jpg" 
            className="w-full h-full object-cover"
            alt="Paesaggio"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        {/* Wavy Top Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[40px] md:h-[70px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120L1200,120L1200,40Q900,100 600,40Q300,-20 0,40Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        {/* Wavy Bottom Divider to Footer (Green) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[40px] md:h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120L1200,120L1200,40Q900,100 600,40Q300,-20 0,40Z" fill="#4A6741"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

const galleryProducts = [
  {
    id: "1",
    name: "Pecorino Riserva",
    price: "€ 24.00",
    description: "Stagionato 18 mesi in grotta, dal sapore intenso e piccante. Un'eccellenza della nostra produzione.",
    image: "https://picsum.photos/seed/cheese1/800/1000"
  },
  {
    id: "2",
    name: "Ricotta di Pienza",
    price: "€ 12.00",
    description: "Freschissima e vellutata, prodotta solo con latte di pecora selezionato dei nostri pascoli.",
    image: "https://picsum.photos/seed/cheese2/800/1000"
  },
  {
    id: "3",
    name: "Salame di Pecora",
    price: "€ 18.00",
    description: "Un'eccellenza norcina dal gusto deciso e speziato, preparata secondo l'antica ricetta Silvestro.",
    image: "https://picsum.photos/seed/salami1/800/1000"
  },
  {
    id: "4",
    name: "Caciotta al Tartufo",
    price: "€ 21.00",
    description: "L'incontro perfetto tra il latte dolce delle nostre pecore e il pregiato tartufo nero toscano.",
    image: "https://picsum.photos/seed/cheese3/800/1000"
  }
];

const capolavoriProducts = [
  {
    id: "c1",
    name: "Pecorino Toscano",
    description: "Selezione speciale della casa.",
    image: "https://i.pinimg.com/736x/23/5d/ed/235deda4b82c2cea4c4674aa302ac07f.jpg"
  },
  {
    id: "c2",
    name: "Ricotta Fresca",
    description: "Lavorazione artigianale quotidiana.",
    image: "https://i.pinimg.com/736x/50/0b/7d/500b7d1969f3229c9a87bfd59058d0c0.jpg"
  },
  {
    id: "c3",
    name: "Formaggio Stagionato",
    description: "Profumo intenso e struttura compatta.",
    image: "https://i.pinimg.com/736x/47/ff/3b/47ff3bedb72e409370b80e4d84c83064.jpg"
  },
  {
    id: "c4",
    name: "Selezione della Fattoria",
    description: "Equilibrio perfetto tra cremosita e sapore.",
    image: "https://i.pinimg.com/736x/c3/18/54/c318543d2933280f84f57db305ca398f.jpg"
  },
  {
    id: "c5",
    name: "Tagliere Rustico",
    description: "I nostri migliori tagli in un unico assaggio.",
    image: "https://i.pinimg.com/1200x/8b/ae/28/8bae28a123ecc0cdfeb39eb95aafae58.jpg"
  },
  {
    id: "c6",
    name: "Specialita di Casa",
    description: "Produzione limitata, gusto deciso.",
    image: "https://i.pinimg.com/736x/b0/11/94/b01194084bf93befcadd2d9afc4a0cdc.jpg"
  },
  {
    id: "c7",
    name: "Gran Selezione",
    description: "La proposta premium di I Nostri Capolavori.",
    image: "https://i.pinimg.com/1200x/e2/38/7a/e2387a29d00e293f8dd334fa78b64606.jpg"
  }
];

function TopPicks() {
  const [selectedId, setSelectedId] = useState(galleryProducts[0].id);
  const selectedProduct = galleryProducts.find((p) => p.id === selectedId) || galleryProducts[0];

  return (
    <section className="w-full h-auto lg:h-screen bg-[#4A6741] flex relative overflow-hidden font-sans">
      {/* Wavy Top Divider (White to Green) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
        <svg className="relative block w-full h-[40px] md:h-[70px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120L1200,120L1200,40Q900,100 600,40Q300,-20 0,40Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      {/* Wavy Bottom Divider (Green to White) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
        <svg className="relative block w-full h-[40px] md:h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120L1200,120L1200,40Q900,100 600,40Q300,-20 0,40Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      {/* Left Sidebar - Navigation Column */}
      <div className="w-[100px] md:w-[180px] lg:w-[220px] bg-white flex flex-col pt-12 md:pt-24 relative z-20 border-r border-gray-50">
        <div className="flex flex-col">
          {galleryProducts.map((product) => {
            const isSelected = product.id === selectedId;
            return (
              <button
                key={product.id}
                onClick={() => setSelectedId(product.id)}
                className={`relative w-full h-[100px] md:h-[140px] lg:h-[160px] flex items-center justify-center transition-all duration-500 ${
                  isSelected ? "bg-[#4A6741]" : "bg-white"
                }`}
              >
                {/* The "Wavy" Cutout Magic - Pronounced Inverted Border Radius */}
                {isSelected && (
                  <>
                    {/* Top Curve - Larger and smoother */}
                    <div className="absolute -top-[50px] right-0 w-[50px] h-[50px] bg-[#4A6741] pointer-events-none">
                      <div className="w-full h-full bg-white rounded-br-[50px]" />
                    </div>
                    {/* Bottom Curve - Larger and smoother */}
                    <div className="absolute -bottom-[50px] right-0 w-[50px] h-[50px] bg-[#4A6741] pointer-events-none">
                      <div className="w-full h-full bg-white rounded-tr-[50px]" />
                    </div>
                    {/* Seamless Connection to Right Panel */}
                    <div className="absolute right-[-1px] top-0 bottom-0 w-[2px] bg-[#4A6741] z-10" />
                  </>
                )}

                <motion.div 
                  animate={{ 
                    scale: isSelected ? 1.1 : 0.7,
                    opacity: isSelected ? 1 : 0.3
                  }}
                  className="relative z-20"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-[1.5rem] md:rounded-[2rem] object-cover shadow-sm transition-all duration-500 ${
                      isSelected ? "shadow-2xl ring-4 ring-white/10 rotate-3" : "grayscale-[0.5]"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </button>
            );
          })}
        </div>
        
        {/* Bottom Navigation Indicator */}
        <div className="mt-8 mb-8 flex flex-col items-center gap-4">
          <ChevronDown className="text-gray-200 animate-bounce" size={20} />
        </div>
      </div>

      {/* Right Panel - Product Details */}
      <div className="flex-1 bg-[#4A6741] text-[#E8EEDF] p-8 md:p-12 lg:p-20 flex flex-col relative z-10 overflow-hidden min-h-[400px] lg:min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12"
          >
            {/* Product Info Section - Left on Desktop */}
            <div className="w-full lg:max-w-[50%] flex flex-col justify-center space-y-6 md:space-y-10 relative z-20">
              <div className="space-y-2 md:space-y-4">
                <motion.h1 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[90px] font-bold leading-[0.9] tracking-tighter text-white"
                >
                  {selectedProduct.name.split(" ").map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </motion.h1>
                
                <motion.p 
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/80"
                >
                  {selectedProduct.price}
                </motion.p>
              </div>

              {/* Attribute Icons Row */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4 md:gap-6"
              >
                {[Droplets, Thermometer, Sun].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md hover:bg-white/15 transition-all duration-300 cursor-pointer">
                    <Icon size={20} className="text-white/60" />
                  </div>
                ))}
              </motion.div>

              {/* Short Description */}
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-sm md:text-base lg:text-lg leading-relaxed text-white/50 font-normal max-w-[400px]"
              >
                {selectedProduct.description}
              </motion.p>
            </div>

            {/* Hero Image Section - Right on Desktop (Hidden on Mobile) */}
            <div className="hidden lg:flex relative w-full lg:w-[50%] h-full items-center justify-center lg:justify-end">
              <motion.div
                initial={{ scale: 0.5, rotate: -15, opacity: 0, x: 200 }}
                animate={{ scale: 1, rotate: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]"
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded-[4rem] md:rounded-[6rem] lg:rounded-[8rem] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.7)]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative background element */}
                <div className="absolute -inset-10 bg-white/5 rounded-full blur-3xl -z-10 animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [dragOffset, setDragOffset] = useState(0);
  const visibleSideItems = 2;

  const move = (dir: number) => {
    setIndex((prev) => (prev + dir + capolavoriProducts.length) % capolavoriProducts.length);
    setDragOffset(0);
    setLastInteraction(Date.now());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      // Only auto-move if 6 seconds have passed since last interaction
      if (now - lastInteraction > 6000) {
        setIndex((prev) => (prev + 1) % capolavoriProducts.length);
        setDragOffset(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [lastInteraction]);

  return (
    <div className="relative h-[450px] md:h-[800px] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oro/5 rounded-full blur-[120px]" />
      </div>

      {/* 3D Stack Container */}
      <div className="relative w-full max-w-6xl h-[250px] md:h-[500px] flex items-center justify-center perspective-[2000px] overflow-visible">
        {/* Mobile Side Buttons - Removed for cleaner look, swipe only */}

        {capolavoriProducts.map((product, i) => {
          let offset = i - index;
          if (offset < -Math.floor(capolavoriProducts.length / 2)) offset += capolavoriProducts.length;
          if (offset > Math.floor(capolavoriProducts.length / 2)) offset -= capolavoriProducts.length;

          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= visibleSideItems; // Show active + same amount on both sides
          
          const baseSpacing = window.innerWidth < 768 ? 140 : 260;
          const xPos = offset * baseSpacing + dragOffset;

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                x: xPos,
                scale: isActive ? 1 : 0.7 - Math.abs(offset) * 0.05,
                z: isActive ? 0 : -400 - Math.abs(offset) * 100,
                rotateY: (offset * -35) + (dragOffset / 10),
                opacity: isVisible ? (1 - Math.abs(offset) * 0.3) : 0,
                filter: isActive ? "blur(0px)" : `blur(${Math.abs(offset) * 4}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => {
                setLastInteraction(Date.now());
              }}
              onDrag={(_, info) => {
                setDragOffset(info.offset.x);
                setLastInteraction(Date.now());
              }}
              onDragEnd={(_, info) => {
                setLastInteraction(Date.now());
                if (info.offset.x > 100) move(-1);
                else if (info.offset.x < -100) move(1);
                else setDragOffset(0);
              }}
              className="absolute w-[200px] md:w-[320px] aspect-[4/5] cursor-grab active:cursor-grabbing"
              style={{
                zIndex: 100 - Math.abs(offset) * 10,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`w-full h-full relative group flex items-center justify-center rounded-[2rem] overflow-hidden bg-white ${
                  isActive
                    ? "border-4 border-[#4A6741] shadow-[0_20px_50px_-20px_rgba(74,103,65,0.8)]"
                    : "border-2 border-[#4A6741]/60"
                }`}
              >
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-1 rounded-[2rem] transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  animate={{
                    y: isActive ? [0, -10, 0] : 0
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {!isActive && (
                  <div className="absolute inset-0 pointer-events-none" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Desktop Navigation - Below the photo */}
      <div className="hidden md:flex mt-8 gap-4 items-center">
        <button 
          onClick={() => move(-1)}
          className="w-12 h-12 rounded-full border border-terra/10 flex items-center justify-center text-terra/40 hover:text-oro hover:border-oro transition-all"
        >
          <ChevronDown className="rotate-90" size={20} />
        </button>
        
        <div className="flex gap-2">
          {capolavoriProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ${
                i === index ? "w-10 bg-oro" : "w-2 bg-terra/10 hover:bg-terra/20"
              }`}
            />
          ))}
        </div>

        <button 
          onClick={() => move(1)}
          className="w-12 h-12 rounded-full border border-terra/10 flex items-center justify-center text-terra/40 hover:text-oro hover:border-oro transition-all"
        >
          <ChevronDown className="-rotate-90" size={20} />
        </button>
      </div>

      {/* Description Overlay */}
      <div className="mt-2 md:mt-12 text-center px-8 max-w-2xl min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px w-8 bg-oro/30" />
              <span className="font-serif text-oro italic text-xl">Eccellenza {index + 1}</span>
              <div className="h-px w-8 bg-oro/30" />
            </div>
            <h4 className="font-serif text-4xl md:text-6xl text-terra leading-none tracking-tight">
              {capolavoriProducts[index].name}
            </h4>
            <p className="text-terra/60 font-light leading-relaxed text-lg md:text-xl max-w-lg mx-auto">
              {capolavoriProducts[index].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Reset mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinksLeft = [
    { name: "Prodotti", path: "/prodotti" },
    { name: "La Storia", path: "/storia" },
  ];

  const navLinksRight = [
    { name: "Contatti", path: "/#footer" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 h-16 md:h-20 flex justify-between items-center transition-all duration-500 bg-[#4A6741] text-white border-b border-white/10`}
      >
        {/* Mobile Hamburger (Left) */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Left Links */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-bold">
          {navLinksLeft.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-[#ffcc00] transition-colors border-b-2 border-transparent hover:border-[#ffcc00] pb-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Centered Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group z-50">
          <div className="bg-[#ffcc00] px-3 md:px-8 py-1 md:py-2 rounded-lg md:rounded-xl border-2 md:border-4 border-[#4A6741] shadow-lg transform group-hover:scale-105 transition-transform">
            <span className="font-serif text-lg md:text-3xl tracking-tighter text-[#4A6741] font-black italic">SILVESTRO</span>
          </div>
        </Link>
        
        {/* Desktop Right Links */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-bold items-center">
          {navLinksRight.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-[#ffcc00] transition-colors border-b-2 border-transparent hover:border-[#ffcc00] pb-1"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Icons */}
          <div className="flex items-center gap-4 ml-4">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <Instagram size={16} />
            </div>
          </div>
        </div>

        {/* Mobile Icons (Right) */}
        <div className="md:hidden flex items-center gap-2 -mr-2">
           <div className="w-9 h-9 flex items-center justify-center">
             <Instagram size={20} />
           </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#4A6741]/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 md:p-8">
              <div className="bg-[#ffcc00] px-4 py-1 rounded-lg border-2 border-[#4A6741]">
                <span className="font-serif text-xl tracking-tighter text-[#4A6741] font-black italic">SILVESTRO</span>
              </div>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
              >
                <X size={24} />
              </motion.button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-8 gap-12">
              {[...navLinksLeft, ...navLinksRight].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link 
                    to={link.path}
                    className="text-5xl font-serif italic text-white hover:text-[#ffcc00] transition-colors relative group inline-block"
                    onClick={(e) => {
                      if (link.path.includes("#")) {
                        const id = link.path.split("#")[1];
                        const element = document.getElementById(id);
                        if (element) {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setTimeout(() => {
                            element.scrollIntoView({ behavior: "smooth" });
                          }, 500);
                        }
                      }
                    }}
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-2 left-0 h-px bg-[#ffcc00] w-0 group-hover:w-full transition-all duration-500"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 border-t border-white/10 flex justify-between items-center">
              <div className="flex gap-6 text-white/60">
                <Instagram size={20} />
                <Mail size={20} />
                <Phone size={20} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 italic">Eccellenza Italiana</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storia" element={<Storia />} />
        <Route path="/prodotti" element={<Prodotti />} />
      </Routes>

      {/* --- FOOTER SECTION --- */}
      <footer id="footer" className="bg-[#4A6741] text-white py-20 px-8 relative overflow-hidden border-t border-white/10">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-4xl">SILVESTRO</h3>
            <p className="text-white/60 leading-relaxed font-light">
              Dalle verdi colline della Toscana, portiamo sulla vostra tavola l'eccellenza casearia italiana. Una storia di famiglia, terra e dedizione assoluta.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ffcc00] hover:text-[#4A6741] transition-colors">
                <Instagram size={18} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ffcc00] hover:text-[#4A6741] transition-colors">
                <Phone size={18} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ffcc00] hover:text-[#4A6741] transition-colors">
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#ffcc00] font-bold">Contatti</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#ffcc00] shrink-0" size={20} />
                <span className="font-light">Via delle Pecore, 12<br />53024 Pienza (SI), Italia</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-[#ffcc00] shrink-0" size={20} />
                <span className="font-light">+39 0578 123456</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#ffcc00] shrink-0" size={20} />
                <span className="font-light">info@silvestro.it</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#ffcc00] font-bold">Newsletter</h4>
            <p className="text-white/60 font-light">Iscriviti per ricevere aggiornamenti sulle nostre produzioni stagionali e eventi in fattoria.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="bg-transparent border-b border-white/20 py-2 flex-1 focus:outline-none focus:border-[#ffcc00] transition-colors font-light"
              />
              <button className="text-[#ffcc00] uppercase text-xs tracking-widest font-bold hover:text-white transition-colors">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
          <p>© 2024 SILVESTRO. Tutti i diritti riservati.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#ffcc00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ffcc00] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#ffcc00] transition-colors">Termini e Condizioni</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
