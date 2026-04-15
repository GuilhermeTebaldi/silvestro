import { motion, AnimatePresence } from "motion/react";
import { Milk, Utensils, Beef, Star, Phone, MessageCircle, X, Search, ShoppingBag } from "lucide-react";
import { useState } from "react";

const allProducts = [
  {
    id: "01",
    name: "Pecorino Riserva",
    category: "LINEA FORMAGGI",
    price: "€ 24,00",
    description: "Stagionato 18 mesi in grotte naturali di tufo. Sapore intenso e persistente.",
    image: "https://i.pinimg.com/736x/36/b0/e8/36b0e882314f65ffd4c32d2640e1bced.jpg", // Placeholder for PNG
    fallbackImage: "https://pixabay.com/pt/images/download/x-3299156_1920.png",
    tag: "ECCELLENZA"
  },
  {
    id: "02",
    name: "Ricotta di Pienza",
    category: "LINEA FRESCHI",
    price: "€ 12,50",
    description: "Prodotta artigianalmente ogni mattina con latte freschissimo.",
    image: "https://i.pinimg.com/originals/8e/9e/8e/8e9e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.png",
    fallbackImage: "https://picsum.photos/seed/cheese2/600/600",
    tag: "FRESCHEZZA"
  },
  {
    id: "03",
    name: "Salame di Pecora",
    category: "LINEA NORCINA",
    price: "€ 18,90",
    description: "Un'eccellenza rara. Carne di pecora selezionata e spezie naturali.",
    image: "https://i.pinimg.com/originals/8e/9e/8e/8e9e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.png",
    fallbackImage: "https://picsum.photos/seed/salami1/600/600",
    tag: "TRADIZIONE"
  },
  {
    id: "04",
    name: "Caciotta al Tartufo",
    category: "LINEA SPECIALITÀ",
    price: "€ 21,00",
    description: "L'equilibrio perfetto tra la dolcezza del latte e l'intensità del tartufo.",
    image: "https://i.pinimg.com/originals/8e/9e/8e/8e9e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.png",
    fallbackImage: "https://picsum.photos/seed/cheese3/600/600",
    tag: "PREMIUM"
  },
  {
    id: "05",
    name: "Yogurt Naturale",
    category: "LINEA YOGURT",
    price: "€ 4,50",
    description: "Cremoso e vellutato, senza zuccheri aggiunti. Solo latte e fermenti.",
    image: "https://i.pinimg.com/originals/8e/9e/8e/8e9e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.png",
    fallbackImage: "https://picsum.photos/seed/yogurt1/600/600",
    tag: "BIO"
  },
  {
    id: "06",
    name: "Miele di Castagno",
    category: "LINEA DOLCI",
    price: "€ 9,00",
    description: "Raccolto nei boschi circostanti, dal retrogusto amarognolo e deciso.",
    image: "https://i.pinimg.com/originals/8e/9e/8e/8e9e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.png",
    fallbackImage: "https://picsum.photos/seed/honey1/600/600",
    tag: "NATURALE"
  },
  {
    id: "07",
    name: "Crema Viso al Latte",
    category: "LINEA COSMETICI",
    price: "€ 32,00",
    description: "Idratante e nutriente, sfrutta le proprietà emollienti del latte di pecora.",
    image: "https://i.pinimg.com/originals/8e/9e/8e/8e9e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.png",
    fallbackImage: "https://picsum.photos/seed/cream1/600/600",
    tag: "BELLEZZA"
  },
  {
    id: "08",
    name: "Salsa di Pomodoro",
    category: "LINEA SALSE",
    price: "€ 6,50",
    description: "Pomodori maturati al sole e lavorati secondo la tradizione contadina.",
    image: "https://i.pinimg.com/originals/8e/9e/8e/8e9e8e8e8e8e8e8e8e8e8e8e8e8e8e8e.png",
    fallbackImage: "https://picsum.photos/seed/sauce1/600/600",
    tag: "GENUINO"
  },
];

export default function Prodotti() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleContact = (type: 'whatsapp' | 'phone') => {
    const number = "+390578123456";
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${number.replace('+', '')}`, '_blank');
    } else {
      window.location.href = `tel:${number}`;
    }
  };

  const filteredProducts = allProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#4A6741] min-h-screen pt-24 md:pt-32 pb-40 text-white overflow-x-hidden">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#ffcc00]" />
              <span className="text-[#ffcc00] font-bold tracking-[0.3em] text-xs uppercase">I Nostri Prodotti</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif italic leading-tight">
              Our <span className="text-[#ffcc00]">Top Selling</span>
            </h1>
          </div>
          
          <div className="relative w-full md:w-96 group">
            <input 
              type="text" 
              placeholder="Cerca un'eccellenza..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-[#ffcc00]/50 backdrop-blur-xl transition-all placeholder:text-white/30"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#ffcc00] transition-colors" size={20} />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-24">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="relative group"
                onClick={() => setSelectedProduct(product.id)}
              >
                {/* 3D Pop-out Image Container */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[85%] aspect-square z-20 pointer-events-none">
                  <motion.div
                    whileHover={{ y: -15, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative w-full h-full"
                  >
                    {/* Shadow for the product */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl rounded-full" />
                    
                    {/* The Product Image - Using fallback for now, but styled for PNG look */}
                    <img 
                      src={product.fallbackImage} 
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] rounded-full border-4 border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                {/* Card Body */}
                <div className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-[40px] pt-32 pb-8 px-8 backdrop-blur-md hover:border-[#ffcc00]/30 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <div className="text-center space-y-4">
                    <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">{product.category}</h3>
                    <h2 className="text-2xl font-serif italic text-white group-hover:text-[#ffcc00] transition-colors">{product.name}</h2>
                    <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="pt-6 flex items-center justify-between">
                      <div className="text-xl font-bold text-white">
                        {product.price}
                        <span className="text-[10px] text-white/30 ml-1 font-normal">/ cad.</span>
                      </div>
                      
                      <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ffcc00] group-hover:text-[#4A6741] transition-all duration-300 shadow-lg">
                        <ShoppingBag size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Modal Overlay */}
                <AnimatePresence>
                  {selectedProduct === product.id && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 bg-[#4A6741]/95 backdrop-blur-xl z-30 rounded-[40px] flex flex-col items-center justify-center p-8 text-center border border-[#ffcc00]/20"
                    >
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedProduct(null); }}
                        className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                      >
                        <X size={24} />
                      </button>
                      
                      <div className="w-16 h-16 bg-[#ffcc00]/10 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="text-[#ffcc00]" size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-serif italic text-white mb-2">Ordina Ora</h3>
                      <p className="text-white/50 text-xs mb-8 uppercase tracking-widest">Contattaci per disponibilità e spedizione</p>
                      
                      <div className="flex flex-col gap-3 w-full">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleContact('whatsapp'); }}
                          className="bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform font-bold text-xs uppercase tracking-widest shadow-lg"
                        >
                          <MessageCircle size={18} />
                          WhatsApp
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleContact('phone'); }}
                          className="bg-[#ffcc00] text-[#4A6741] py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform font-bold text-xs uppercase tracking-widest shadow-lg"
                        >
                          <Phone size={18} />
                          Chiamaci
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 space-y-6">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto">
              <Search className="text-white/20" size={40} />
            </div>
            <h2 className="text-3xl font-serif italic text-white">Nessun prodotto trovato</h2>
            <p className="text-white/30 font-light max-w-xs mx-auto">Prova a cambiare i termini di ricerca per trovare l'eccellenza che cerchi.</p>
          </div>
        )}
      </section>

      {/* Decorative Footer Element */}
      <div className="mt-60 flex flex-col items-center gap-8 opacity-20">
        <div className="h-20 w-[1px] bg-gradient-to-b from-transparent to-[#ffcc00]" />
        <Star className="text-[#ffcc00]" size={24} />
        <div className="h-20 w-[1px] bg-gradient-to-t from-transparent to-[#ffcc00]" />
      </div>
    </div>
  );
}
