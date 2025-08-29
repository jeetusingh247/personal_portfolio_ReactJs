/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Components <-- //
import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://www.github.com/jeetusingh247' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeetu-singh-b6980a258' },
  { label: 'Twitter X', href: 'https://x.com/codewithsadee_' },
  { label: 'Instagram', href: 'https://www.instagram.com/jeetusingh1929' },
  { label: 'CodePen', href: 'https://codepen.io/codewithsadee' }
];


import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Subscribed! Thank you.");
    setEmail("");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <footer className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-yellow-400/10 via-zinc-900/80 to-sky-400/10"></div>
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 gap-10">
          <div className="mb-8 reveal-up">
            <h2 className="headline-1 mb-10 lg:max-w-[12ch] text-yellow-400">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary href="mailto:jeetusingh11010@gmail.com" label="Start Project" icon="chevron_right" />
            <form onSubmit={handleSubscribe} className="mt-8 flex gap-2 items-center">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Subscribe for updates"
                className="text-field px-4 py-2 rounded-lg bg-zinc-800 text-zinc-100 border border-zinc-700 focus:border-yellow-400 focus:outline-none transition-all"
                required
              />
              <button type="submit" className="btn btn-primary px-6 py-2 rounded-lg bg-yellow-400 text-zinc-900 font-bold hover:bg-yellow-500 transition-all">Subscribe</button>
            </form>
            {status && <p className="mt-2 text-yellow-400 text-sm">{status}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="reveal-up">
              <p className="mb-2 text-white font-semibold">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-yellow-400 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-up">
              <p className="mb-2 text-white font-semibold">Socials</p>
              <ul className="flex flex-col gap-2">
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-yellow-400 reveal-up group">
                      <span className="inline-block mr-2 group-hover:animate-bounce">🔗</span>{label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-10 mb-8 lg:flex-row">
          <a href="/" className="logo mb-4 lg:mb-0">
            <img src="/images/logo_white.svg" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-yellow-400">Jeetu Singh</span>. All rights reserved.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradient 10s ease-in-out infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .group-hover\:animate-bounce:hover { animation: bounce 0.6s; }
      `}</style>
    </footer>
  );
}

export default Footer;