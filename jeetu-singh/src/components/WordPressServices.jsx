import React, { useState } from "react";
import { FaWordpress, FaPaintBrush, FaPlug, FaLock, FaRocket, FaShoppingCart, FaSync, FaSearch, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaPaintBrush />, title: "Website Design", desc: "Custom, responsive WordPress designs for any business." },
  { icon: <FaWordpress />, title: "Theme Development", desc: "Unique themes built for speed, SEO, and branding." },
  { icon: <FaPlug />, title: "Plugin Development", desc: "Custom plugins for advanced features and integrations." },
  { icon: <FaShoppingCart />, title: "E-commerce", desc: "WooCommerce stores, payment gateways, and product management." },
  { icon: <FaSearch />, title: "SEO Optimization", desc: "On-page SEO, speed, and ranking improvements." },
  { icon: <FaSync />, title: "Migration & Maintenance", desc: "Site migration, updates, backups, and ongoing support." },
  { icon: <FaLock />, title: "Security", desc: "Hardened WordPress security, malware removal, SSL setup." },
  { icon: <FaRocket />, title: "Performance", desc: "Speed optimization, caching, CDN, and analytics." }
];

const processSteps = [
  { step: "Discovery", desc: "Understanding your goals and requirements." },
  { step: "Design", desc: "Wireframes, mockups, and branding." },
  { step: "Development", desc: "Building your site with best practices." },
  { step: "Launch", desc: "Deployment, QA, and go-live." },
  { step: "Support", desc: "Ongoing updates, fixes, and growth." }
];

const faqs = [
  { q: "What platforms do you support?", a: "WordPress, WooCommerce, Elementor, and more." },
  { q: "Do you offer ongoing maintenance?", a: "Yes, monthly and annual packages available." },
  { q: "Can you migrate my old site?", a: "Absolutely, with zero downtime." },
  { q: "How secure is my site?", a: "We implement best-in-class security and monitoring." }
];

const testimonials = [
  { name: "Amit Sharma", text: "My business grew 3x after Jeetu's WordPress redesign!", avatar: "/images/people-1.jpg" },
  { name: "Priya Verma", text: "Fast, secure, and beautiful. Highly recommended!", avatar: "/images/people-2.jpg" },
  { name: "Rahul Singh", text: "The e-commerce integration was seamless.", avatar: "/images/people-3.jpg" }
];


const estimatorServices = [
  { key: "design", label: "Website Design", price: 4000 },
  { key: "theme", label: "Theme Development", price: 3500 },
  { key: "plugin", label: "Plugin Development", price: 3000 },
  { key: "ecommerce", label: "E-commerce Integration", price: 5000 },
  { key: "seo", label: "SEO Optimization", price: 2000 },
  { key: "migration", label: "Migration & Maintenance", price: 1500 },
  { key: "security", label: "Security Setup", price: 2500 },
  { key: "performance", label: "Performance Optimization", price: 2000 }
];



export default function WordPressServices() {
  const [selected, setSelected] = useState([]);

  const handleToggle = key => {
    setSelected(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const total = selected.reduce(
    (sum, key) => sum + (estimatorServices.find(s => s.key === key)?.price || 0),
    0
  );

  return (
    <section id="wordpress-services" className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-zinc-100">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold text-sky-400 mb-4 text-center">WordPress Services</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-lg text-zinc-300 mb-10 text-center">Premium WordPress solutions for businesses, startups, and creators. From design to launch, I deliver speed, security, and results.</motion.p>
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-zinc-800/80 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 border border-zinc-700">
              <div className="text-3xl text-sky-400 mb-3">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-zinc-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">How I Work</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sky-400/20 flex items-center justify-center text-xl font-bold text-sky-400 mb-2 border-2 border-sky-400">{i + 1}</div>
                <span className="font-semibold text-zinc-100 mb-1">{step.step}</span>
                <span className="text-xs text-zinc-400 text-center">{step.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Client Testimonials</h3>
          <div className="flex gap-8 justify-center items-center overflow-x-auto pb-4">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="min-w-[260px] bg-zinc-800/80 rounded-2xl p-6 shadow-xl border border-zinc-700 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mb-3 border-2 border-sky-400" />
                <p className="text-zinc-100 text-base mb-2 text-center">"{t.text}"</p>
                <span className="text-xs text-zinc-400">- {t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* FAQ Accordion */}
        <div className="mb-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-sky-400 mb-6 text-center">FAQs</h3>
          {faqs.map((faq, i) => (
            <details key={faq.q} className="mb-3 bg-zinc-800/80 rounded-xl p-4 border border-zinc-700">
              <summary className="font-semibold text-zinc-100 cursor-pointer">{faq.q}</summary>
              <div className="mt-2 text-zinc-300 text-sm">{faq.a}</div>
            </details>
          ))}
        </div>
        {/* CTA */}
        <div className="text-center mt-10">
          <motion.a initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} href="#contact" className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-yellow-400 text-zinc-900 font-extrabold text-xl shadow-lg hover:scale-105 transition-transform">Book a Free Consultation</motion.a>
        </div>
      </div>
    </section>
  );
}
