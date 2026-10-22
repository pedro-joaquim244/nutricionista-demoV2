import { useEffect, useRef } from 'react';
import { ArrowUpRight, Check, X, MessageCircle } from 'lucide-react';
import { siteConfig } from './config';
import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import FoodStory from './components/FoodStory';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
  const modal = useRef(null);
  const lastContact = useRef(null);
  const contact = (event) => {
    if (siteConfig.whatsappNumber) {
      window.open(`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`, '_blank', 'noopener,noreferrer');
    } else { lastContact.current = event.currentTarget; modal.current?.showModal(); }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const cta = (label = 'Agendar minha consulta', light = false) => <button className={`button ${light ? 'button-light' : ''}`} onClick={contact}>{label}<ArrowUpRight size={18}/></button>;
  return <>
    <Header contact={contact} cta={cta}/>
    <main>
      <Hero contact={contact} cta={cta}/>
      <Values contact={contact} cta={cta}/>
      <About contact={contact} cta={cta}/>
      <Services contact={contact} cta={cta}/>
      <Process contact={contact} cta={cta}/>
      <FoodStory contact={contact} cta={cta}/>
      <Faq contact={contact} cta={cta}/>
      <Contact contact={contact} cta={cta}/>
    </main>
    <Footer/>
    <button className="floating-contact" onClick={contact} aria-label="Conversar pelo WhatsApp"><MessageCircle size={24}/></button>
    <dialog ref={modal} onClose={() => lastContact.current?.focus()} onClick={e => { if (e.target === modal.current) modal.current.close(); }}><button className="close-dialog" onClick={() => modal.current?.close()} aria-label="Fechar"><X/></button><MessageCircle size={34}/><h2>Vamos conversar?</h2><p>Esta é uma página de demonstração. O WhatsApp da profissional ainda não foi cadastrado.</p><p>Em um site personalizado, este botão abre uma conversa diretamente com a nutricionista.</p><button className="button" onClick={() => modal.current?.close()}>Entendi <Check size={18}/></button></dialog>
  </>;
}
