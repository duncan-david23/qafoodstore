// App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



// Food products data
const foodProducts = [
  {
    id: 1,
    name: "Premium Gari",
    price: 5,
    image: 'https://issanny.com/wp-content/uploads/2021/04/GARI-2-scaled.jpg',
    description: "Finely ground cassava flour, perfect for traditional dishes",
    category: "staples"
  },
  {
    id: 2,
    name: "Kako",
    price: 5,
    image: "https://bigsampsmarket.com/wp-content/uploads/2024/05/Kako.jpg",
    description: "Smoked and dried fish, ideal for soups and stews",
    category: "protein"
  },
  {
    id: 3,
    name: "Dates (Fresh)",
    price: 5,
    image: "https://www.realsimple.com/thmb/ihYlExhCm2oPQgRRZlo5Ww0M-x8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dates-nutrition-facts-2000-367b6229847b4b9887d85b0946806035.jpg",
    description: "Sweet, succulent dates packed with natural energy",
    category: "snacks"
  },
  {
    id: 4,
    name: "Premium Beef",
    price: 2,
    image: "https://i.ytimg.com/vi/QR_m2DB96UU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQn4XkooAPw-CFTgfwxR7mhCDYyA",
    description: "High-quality cuts of beef, perfect for stews and grills",
    category: "protein"
  },
  {
    id: 5,
    name: "Tiger Nuts",
    price: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwjlZdz0tjVchVtjByy73kcaP-aZBc3sm_A&s",
    description: "Nutritious tiger nuts for snacking or making horchata",
    category: "snacks"
  },
  {
    id: 6,
    name: "Nkulenu",
    price: 10,
    image: "https://alphansofoods.co.uk/wp-content/uploads/2025/05/nkulenus-prekese-abedru-palm-soup-base-780g.png",
    description: "Rich, flavorful palm nut soup base for authentic dishes",
    category: "soups"
  },
  {
    id: 7,
    name: "Kivo Pepper (Big Size)",
    price: 10,
    image: "https://i.ebayimg.com/images/g/dzEAAOSwYP9mfnCe/s-l1200.jpg",
    description: "Spicy African pepper for authentic heat in your dishes",
    category: "spices"
  },
  {
    id: 8,
    name: "Remie Spices",
    price: 1,
    image: "https://ghbasket.com/wp-content/uploads/2021/07/Remie-Spices-Beef-Seasoning-Powder-50G-X10-500G.jpg",
    description: "Versatile spice blend for enhancing the flavor of various dishes",
    category: "spices"
  },
  {
    id: 9,
    name: "Konkonte",
    price: 5,
    image: "https://paramount-foods.co.uk/wp-content/uploads/2024/04/kokonte-copy-scaled.jpg",
    description: "Crispy plantain chips, lightly salted for perfect snacking",
    category: "staples"
  },
  {
    id: 10,
    name: "Onga Spices",
    price: 1,
    image: "https://4wayfoods.com/wp-content/uploads/2025/08/Onga-The-Seasoning-Brand-at-the-Heart-of-African-Cooking.jpg",
    description: "Essential seasoning blend for authentic African flavors",
    category: "spices"
  },
  {
    id: 11,
    name: "Onga Maggie (10 Cubes)",
    price: 5,
    image: "https://kaloxstore.com/wp-content/uploads/2024/12/Maggi-Cube-.jpg",
    description: "Flavorful bouillon cubes for enhancing soups and stews",
    category: "spices"
  },
  {
    id: 12,
    name: "Neat Fufu",
    price: 12,
    image: "https://www.chopboxonline.com/wp-content/uploads/2024/08/NewBookImages1.png",
    description: "Convenient fufu dough preparation for authentic dishes",
    category: "staples"
  }
];

// WhatsApp number - replace with your actual number
const whatsappNumber = "+60104219874";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "staples", name: "Staples" },
    { id: "soups", name: "Soups & Stews" },
    { id: "snacks", name: "Snacks" },
    { id: "protein", name: "Protein" },
    { id: "beverages", name: "Beverages" },
    { id: "spices", name: "Spices" },
    { id: "oils", name: "Oils" },
    { id: "meat", name: "Meat" },
    { id: "fruits", name: "Fruits" },
  ];

  const filteredProducts = activeCategory === "all" 
    ? foodProducts 
    : foodProducts.filter(product => product.category === activeCategory);

  const handleBuyClick = (product) => {
    const message = `Hello! I'm interested in purchasing ${product.name} for $${product.price}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = () => {
    const message = "Hello! I would like to get more information about your food products.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${whatsappNumber}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">QA</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Queen Ash</h1>
            </div>
            
            <nav className="flex space-x-1 bg-amber-100 rounded-full p-1">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'text-amber-700 hover:bg-amber-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleContactClick}
                className="hidden sm:flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
              >
                <span>Order Now</span>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Authentic African
              </span>
              <br />
              <span className="text-gray-800">Food Delights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the rich flavors of Africa with our premium selection of traditional foods, 
              spices, and ingredients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all"
                onClick={handleContactClick}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating food items */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-amber-200 rounded-full hidden lg:block"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-12 h-12 bg-orange-200 rounded-full hidden lg:block"
        ></motion.div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-amber-200 hover:bg-amber-50'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Premium Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Carefully selected traditional African foods, spices, and ingredients to bring authentic flavors to your kitchen
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100 hover:border-amber-200 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{product.description}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleBuyClick(product)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center space-x-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.447"/>
                      </svg>
                      <span>Buy Now</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Queen Ash was born from a passion for sharing the authentic flavors of Africa with the world. 
                    We believe that food is more than just sustenance—it's a connection to culture, heritage, and community.
                  </p>
                  <p>
                    Our team carefully sources each product directly from trusted farmers and producers across Africa, 
                    ensuring the highest quality while supporting local communities. From the spicy kick of Kivo Pepper 
                    to the comforting taste of freshly prepared Gari, we bring you genuine African culinary experiences.
                  </p>
                  <p>
                    Whether you're recreating traditional recipes or exploring African cuisine for the first time, 
                    we're here to provide the authentic ingredients that make every meal special.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">20+</div>
                    <div className="text-sm text-gray-600">Products</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">5K+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">10+</div>
                    <div className="text-sm text-gray-600">African Countries</div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop" 
                    alt="African food spread"
                    className="rounded-2xl w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Fresh & Authentic</div>
                      <div className="text-sm text-gray-600">Direct from source</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-amber-100 text-lg mb-8">
              Ready to taste authentic African flavors? Contact us today for orders, inquiries, or custom requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all flex items-center justify-center space-x-3 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.447"/>
                </svg>
                <span>Message on WhatsApp</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCallClick}
                className="bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-900 transition-all flex items-center justify-center space-x-3 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">QA</span>
                </div>
                <h3 className="text-xl font-bold">Queen Ash</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Bringing authentic African flavors to your table with premium quality ingredients and traditional recipes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Products</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Staples</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Spices</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Beverages</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Snacks</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>📞 +60 104 219 874</div>
                <div>✉️ queenash011@gmail.com</div>
                <div>📍 Available Worldwide</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Queen Ash. All rights reserved. | Authentic African Food Products</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;