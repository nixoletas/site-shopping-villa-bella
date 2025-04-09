import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingBag, 
  Utensils, 
  Film, 
  Calendar, 
  Tag, 
  MapPin, 
  Wrench,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MapPinned,
  Menu
} from 'lucide-react';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ShoppingBag className="h-10 w-10 text-gray-800" />
              <span className="text-3xl font-light tracking-wider text-gray-800">VILA BELLA</span>
            </motion.div>
            <nav className="hidden lg:flex space-x-12">
              {['gastronomia', 'cinema', 'eventos', 'ofertas', 'visitar', 'servicos'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-600 hover:text-gray-800 font-light tracking-wide"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </nav>
            <motion.button 
              className="lg:hidden"
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-6 w-6 text-gray-800" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000" 
          alt="Shopping Vila Bella" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-6xl font-light mb-6 text-white tracking-wider"
            >
              SHOPPING VILA BELLA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-2xl text-white font-light tracking-wide"
            >
              Luxo, Estilo e Sofisticação
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Dining Section */}
      <section id="gastronomia" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="section-heading">Gastronomia</h2>
            <p className="section-subheading">Experiências culinárias excepcionais</p>
          </FadeInWhenVisible>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Restaurantes Premium",
                description: "Culinária internacional de alto padrão",
                image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=800"
              },
              {
                title: "Cafeterias Exclusivas",
                description: "Momentos únicos com café premium",
                image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800"
              },
              {
                title: "Praça Gourmet",
                description: "Diversidade gastronômica premium",
                image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800"
              }
            ].map((item, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <div className="group relative overflow-hidden">
                  <motion.img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section id="cinema" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="section-heading">Cinema VIP</h2>
            <p className="section-subheading">Experiência cinematográfica de luxo</p>
          </FadeInWhenVisible>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              'Sala VIP 1 - Reclinável',
              'Sala VIP 2 - Serviço Premium',
              'IMAX Experience',
              'Sala Platinum'
            ].map((sala, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <motion.div 
                  className="bg-white group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="overflow-hidden">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800"
                      alt={sala}
                      className="w-full h-72 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light mb-2">{sala}</h3>
                    <p className="text-gray-600 text-sm">Poltronas premium com serviço exclusivo</p>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="section-heading">Eventos Exclusivos</h2>
            <p className="section-subheading">Programação especial para nossos visitantes</p>
          </FadeInWhenVisible>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Exposição de Arte',
                image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=800',
                date: '20 de Março, 2025'
              },
              {
                title: 'Fashion Week',
                image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=800',
                date: '25 de Março, 2025'
              },
              {
                title: 'Wine Tasting',
                image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800',
                date: '30 de Março, 2025'
              }
            ].map((evento, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <motion.div 
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="overflow-hidden">
                    <motion.img 
                      src={evento.image}
                      alt={evento.title}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-light mb-2">{evento.title}</h3>
                    <p className="text-gray-600">{evento.date}</p>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="ofertas" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="section-heading">Lojas Premium</h2>
            <p className="section-subheading">As melhores marcas nacionais e internacionais</p>
          </FadeInWhenVisible>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                category: 'Moda Luxo',
                description: 'Marcas internacionais exclusivas',
                image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800'
              },
              {
                category: 'Joalheria',
                description: 'Peças únicas e sofisticadas',
                image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800'
              },
              {
                category: 'Design & Decoração',
                description: 'Mobiliário e objetos exclusivos',
                image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800'
              }
            ].map((store, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <motion.div 
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="overflow-hidden">
                    <motion.img 
                      src={store.image}
                      alt={store.category}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-light mb-2">{store.category}</h3>
                    <p className="text-gray-600">{store.description}</p>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visitar" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="section-heading">Visite-nos</h2>
            <p className="section-subheading">Localização privilegiada e fácil acesso</p>
          </FadeInWhenVisible>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible>
              <div>
                <h3 className="text-2xl font-light mb-8">Informações</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Clock className="h-6 w-6 text-gray-800 mr-4" />
                    <div>
                      <p className="font-light">Segunda a Sábado</p>
                      <p className="text-gray-600">10h às 22h</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Clock className="h-6 w-6 text-gray-800 mr-4" />
                    <div>
                      <p className="font-light">Domingo</p>
                      <p className="text-gray-600">14h às 20h</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MapPinned className="h-6 w-6 text-gray-800 mr-4" />
                    <div>
                      <p className="font-light">Endereço</p>
                      <p className="text-gray-600">Av. Shopping, 1000 - Jardins, São Paulo</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <motion.div 
                className="bg-gray-100 h-96 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200"
                  alt="Fachada Shopping Vila Bella"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="section-heading">Serviços Exclusivos</h2>
            <p className="section-subheading">Comodidade e conforto para nossos clientes</p>
          </FadeInWhenVisible>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Valet Premium',
                description: 'Serviço personalizado de estacionamento'
              },
              {
                name: 'Concierge',
                description: 'Assistência exclusiva para compras'
              },
              {
                name: 'Personal Shopper',
                description: 'Consultoria de moda personalizada'
              },
              {
                name: 'VIP Lounge',
                description: 'Área exclusiva para descanso'
              }
            ].map((service, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <motion.div 
                  className="bg-white p-8 shadow-sm"
                  whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-light mb-4">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-4 gap-12"
          >
            <div>
              <h3 className="text-xl font-light mb-6">Contato</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="font-light">(11) 1234-5678</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="font-light">contato@vilabella.com.br</span>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6">Redes Sociais</h3>
              <div className="flex space-x-6">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Instagram className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Facebook className="h-6 w-6 cursor-pointer hover:text-gray-300" />
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6">Newsletter</h3>
              <motion.div 
                className="flex"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 bg-gray-800 text-white w-full focus:outline-none"
                />
                <motion.button 
                  className="bg-white text-gray-900 px-6 py-2 font-light hover:bg-gray-100"
                  whileTap={{ scale: 0.95 }}
                >
                  Assinar
                </motion.button>
              </motion.div>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6">Localização</h3>
              <motion.p 
                className="font-light"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Av. Shopping, 1000<br />
                Jardins, São Paulo - SP<br />
                CEP: 01000-000
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 pt-8 border-t border-gray-800 text-center"
          >
            <p className="font-light">&copy; 2025 Shopping Vila Bella. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;