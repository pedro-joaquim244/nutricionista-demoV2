import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown,
  ClipboardCheck, Clock3, HeartHandshake, Leaf, MapPin, Menu, MessageCircle,
  Monitor, Sparkles, Sprout, Target, X,
} from 'lucide-react';
import { siteConfig } from './config';
import { photos } from './data/photos';
import './redesign.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const principles = [
  { icon: ClipboardCheck, index: '01', title: 'Baseado em evidências', text: 'Orientações responsáveis, construídas a partir de conhecimento científico e contexto individual.' },
  { icon: CalendarDays, index: '02', title: 'Planejado para sua rotina', text: 'Uma estratégia possível, que considera seus horários, preferências e a vida que acontece todos os dias.' },
  { icon: HeartHandshake, index: '03', title: 'Sem culpa ou extremismos', text: 'Acolhimento para criar autonomia alimentar sem listas proibidas ou promessas irreais.' },
];

const services = [
  ['Consulta presencial', 'Em Jaboticabal, SP', 'Um encontro completo para compreender sua história, rotina e objetivos.'],
  ['Consulta online', 'De onde você estiver', 'A mesma escuta cuidadosa em uma experiência digital simples e próxima.'],
  ['Acompanhamento individual', 'Estratégia contínua', 'Revisões e ajustes para que o planejamento acompanhe suas necessidades reais.'],
  ['Reeducação alimentar', 'Autonomia no cotidiano', 'Conhecimento e ferramentas para fazer escolhas com mais confiança e flexibilidade.'],
];

const journey = [
  ['01', 'Escuta e avaliação', 'Começamos pela sua história, preferências, exames disponíveis e relação com a alimentação.'],
  ['02', 'Objetivos possíveis', 'Definimos prioridades claras, respeitando o seu momento e aquilo que realmente importa.'],
  ['03', 'Estratégia personalizada', 'Construímos um planejamento alimentar flexível, prático e conectado à sua rotina.'],
  ['04', 'Evolução e ajustes', 'Acompanhamos avanços, dificuldades e descobertas para ajustar o caminho sem cobranças.'],
];

const faqs = [
  ['Como funciona a primeira consulta?', 'É um encontro de escuta e avaliação. Conversamos sobre rotina, hábitos, preferências, histórico e objetivos antes de construir qualquer orientação.'],
  ['O atendimento também pode ser online?', 'Sim. O site prevê atendimento presencial em Jaboticabal e atendimento online. Horários e detalhes serão confirmados no contato inicial.'],
  ['Vou precisar deixar de comer tudo o que gosto?', 'A proposta demonstrada é individualizada e sem restrições desnecessárias. As escolhas são construídas considerando saúde, preferências e contexto.'],
  ['O plano alimentar é personalizado?', 'Sim. O planejamento ilustrado considera necessidades e rotina de cada pessoa. Nenhum material desta página substitui uma consulta profissional.'],
  ['Como posso agendar?', 'Use qualquer botão “Agende sua consulta”. Enquanto o número não estiver configurado, o site exibirá uma orientação para adicionar o WhatsApp real.'],
];

function Brand({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? 'brand--inverse' : ''}`} href="#inicio" aria-label="Clara Martins — início">
      <span className="brand__mark" aria-hidden="true"><Leaf size={18} /></span>
      <span className="brand__type"><strong>Clara Martins</strong><small>NUTRIÇÃO PARA A VIDA REAL</small></span>
    </a>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{children}</span>;
}

export default function App() {
  const root = useRef(null);
  const modal = useRef(null);
  const lastContact = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openContact = (event) => {
    if (siteConfig.whatsappNumber) {
      const number = siteConfig.whatsappNumber.replace(/\D/g, '');
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`, '_blank', 'noopener,noreferrer');
      return;
    }
    lastContact.current = event.currentTarget;
    modal.current?.showModal();
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ desktop: '(min-width: 821px)', mobile: '(max-width: 820px)', reduce: '(prefers-reduced-motion: reduce)' }, (context) => {
      if (context.conditions.reduce) {
        gsap.set('[data-reveal], .hero__line > span, .hero__visual, .hero__support', { clearProps: 'all' });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from('.announcement', { yPercent: -100, duration: 0.45 })
        .from('.site-header', { y: -20, opacity: 0, duration: 0.55 }, '-=0.18')
        .from('.hero__eyebrow', { y: 14, opacity: 0, duration: 0.45 }, '-=0.1')
        .from('.hero__line > span', { yPercent: 110, opacity: 0, duration: 0.85, stagger: 0.11 }, '-=0.16')
        .from('.hero__support', { y: 20, opacity: 0, duration: 0.6 }, '-=0.46')
        .from('.hero__visual', { y: 35, opacity: 0, clipPath: 'inset(12% 0 0 0 round 24px)', duration: 0.95 }, '-=0.67');

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 34, opacity: 0, duration: 0.78, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 87%', once: true } });
      });
      gsap.to('.hero__photo img', { yPercent: 7, scale: 1.055, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 } });
      gsap.to('.story__image img', { yPercent: 9, ease: 'none', scrollTrigger: { trigger: '.story', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });

      if (context.conditions.desktop) {
        gsap.to('.journey__rail', {
          y: () => Math.max(0, document.querySelector('.journey__steps')?.offsetHeight - 164),
          ease: 'none',
          scrollTrigger: { trigger: '.journey__steps', start: 'top 58%', end: 'bottom 62%', scrub: 0.5 },
        });
      }
      gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.1 } });
    });
    return () => media.revert();
  }, { scope: root });

  return (
    <div ref={root}>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="announcement">
        <span>Atendimento presencial em Jaboticabal e online</span>
        <a href="#contato">Conheça os formatos <ArrowRight size={13} /></a>
      </div>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Brand />
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="main-navigation" className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
            <a href="#abordagem" onClick={closeMenu}>Abordagem</a>
            <a href="#atendimentos" onClick={closeMenu}>Atendimentos</a>
            <a href="#processo" onClick={closeMenu}>Como funciona</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <button className="button button--dark nav-cta" type="button" onClick={openContact}>Agende sua consulta <ArrowUpRight size={16} /></button>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <Eyebrow><span className="hero__eyebrow">NUTRIÇÃO CLÍNICA E COMPORTAMENTAL</span></Eyebrow>
              <h1>
                <span className="hero__line"><span>Nutrição que</span></span>
                <span className="hero__line"><span>acolhe a sua</span></span>
                <span className="hero__line"><span className="accent">vida real.</span></span>
              </h1>
              <div className="hero__support">
                <p>Um acompanhamento individualizado para transformar sua alimentação com equilíbrio, autonomia e escolhas que fazem sentido na sua rotina.</p>
                <div className="hero__actions">
                  <button className="button button--dark" type="button" onClick={openContact}>Agende sua consulta <ArrowUpRight size={17} /></button>
                  <a className="button button--outline" href="#abordagem">Conheça meu trabalho <ArrowDown size={16} /></a>
                </div>
                <div className="hero__meta">
                  <span><MapPin size={15} /> {siteConfig.city}</span>
                  <span><Monitor size={15} /> Presencial e online</span>
                </div>
              </div>
            </div>

            <div className="hero__visual" aria-label="Composição ilustrativa sobre alimentação e acompanhamento nutricional">
              <figure className="hero__photo">
                <img src={photos.prep} alt="Pessoas preparando uma refeição em uma cozinha clara" fetchPriority="high" />
                <figcaption>Imagem documental ilustrativa</figcaption>
              </figure>
              <div className="consult-card consult-card--top">
                <span className="consult-card__icon"><Sparkles size={16} /></span>
                <div><small>PLANO POSSÍVEL</small><strong>Feito para a sua rotina</strong></div>
              </div>
              <div className="consult-card consult-card--bottom">
                <div className="consult-card__row"><span>ACOMPANHAMENTO</span><span>INDIVIDUAL</span></div>
                <p>“O que pode funcionar melhor para você esta semana?”</p>
                <span className="consult-card__status"><i /> Próxima revisão planejada</span>
              </div>
              <span className="hero__stamp"><Leaf size={21} /> CIÊNCIA<br />COM ESCUTA</span>
            </div>
          </div>
          <a className="hero__scroll" href="#abordagem"><span>DESCUBRA A ABORDAGEM</span><ArrowDown size={14} /></a>
        </section>

        <section className="manifesto" id="abordagem">
          <div className="container manifesto__grid">
            <Eyebrow>UMA NUTRIÇÃO MAIS HUMANA</Eyebrow>
            <div className="manifesto__copy" data-reveal>
              <h2>Comer bem não precisa ser viver em <em>restrição.</em></h2>
              <p>Saúde não nasce de uma fórmula pronta. Ela é construída no encontro entre ciência, contexto e escolhas que você consegue sustentar com tranquilidade.</p>
            </div>
          </div>
        </section>

        <section className="principles section">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div><Eyebrow>O QUE ORIENTA CADA ENCONTRO</Eyebrow><h2>Clareza para escolher.<br /><em>Liberdade para viver.</em></h2></div>
              <p>Uma abordagem sem atalhos, com responsabilidade clínica e espaço para a sua singularidade.</p>
            </div>
            <div className="principles__grid">
              {principles.map(({ icon: Icon, index, title, text }) => (
                <article className="principle-card" data-reveal key={index}>
                  <div className="principle-card__top"><span>{index}</span><Icon size={22} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="atendimentos">
          <div className="container">
            <div className="services__intro" data-reveal>
              <div><Eyebrow>ATENDIMENTOS</Eyebrow><h2>Cuidado que acompanha o seu <em>momento.</em></h2></div>
              <p>Formatos demonstrativos para uma jornada individual, próxima e construída em conjunto.</p>
            </div>
            <div className="services__list">
              {services.map(([title, meta, text], index) => (
                <article className="service-row" data-reveal key={title}>
                  <span className="service-row__number">0{index + 1}</span><h3>{title}</h3><span className="service-row__meta">{meta}</span><p>{text}</p><ArrowUpRight className="service-row__arrow" size={20} />
                </article>
              ))}
            </div>
            <p className="demo-disclaimer">Serviços apresentados exclusivamente para fins demonstrativos.</p>
          </div>
        </section>

        <section className="story">
          <div className="story__image" aria-hidden="true"><img src={photos.food} alt="" loading="lazy" /></div>
          <div className="story__panel" data-reveal>
            <Eyebrow light>PARA ALÉM DO PRATO</Eyebrow>
            <blockquote>“Uma alimentação possível não ocupa toda a sua vida. Ela ajuda você a vivê-la melhor.”</blockquote>
            <div className="story__details"><span><Leaf size={16} /> Corpo</span><span><Clock3 size={16} /> Rotina</span><span><HeartHandshake size={16} /> Acolhimento</span></div>
          </div>
        </section>

        <section className="journey section" id="processo">
          <div className="container journey__grid">
            <div className="journey__intro" data-reveal>
              <Eyebrow>COMO FUNCIONA</Eyebrow><h2>Um caminho construído <em>com você.</em></h2>
              <p>Da primeira conversa aos ajustes do dia a dia, cada etapa existe para tornar o cuidado mais claro e sustentável.</p>
              <button className="button button--dark" type="button" onClick={openContact}>Comece por uma conversa <ArrowUpRight size={17} /></button>
            </div>
            <div className="journey__steps">
              <span className="journey__line" aria-hidden="true"><i className="journey__rail" /></span>
              {journey.map(([number, title, text]) => <article className="journey-step" data-reveal key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="editorial section">
          <div className="container">
            <div className="editorial__headline" data-reveal><Eyebrow>VIDA REAL, TODOS OS DIAS</Eyebrow><h2>Alimentação é também rotina, memória, prazer e <em>presença.</em></h2></div>
            <div className="editorial__grid">
              <figure className="editorial-card editorial-card--large" data-reveal><img src={photos.table} alt="Refeição colorida organizada sobre uma mesa de madeira" loading="lazy" /><figcaption><span>01 / AUTONOMIA</span><strong>Escolhas com mais confiança</strong></figcaption></figure>
              <div className="editorial__notes">
                <article data-reveal><Target size={21} /><span>SEM FÓRMULAS UNIVERSAIS</span><h3>Objetivos que respeitam o seu ponto de partida.</h3></article>
                <article data-reveal><Sprout size={21} /><span>MUDANÇAS SUSTENTÁVEIS</span><h3>Pequenos passos que encontram espaço para permanecer.</h3></article>
              </div>
              <figure className="editorial-card editorial-card--small" data-reveal><img src={photos.herbs} alt="Folhas verdes em fundo branco" loading="lazy" /><figcaption><span>02 / EQUILÍBRIO</span><strong>Menos regras. Mais consciência.</strong></figcaption></figure>
            </div>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="container about__grid">
            <div className="about__profile" data-reveal>
              <div className="about__monogram"><span>CM</span><Leaf size={24} /></div>
              <div className="about__profile-copy"><span>PERFIL PROFISSIONAL DEMONSTRATIVO</span><strong>Clara Martins</strong><small>Nutricionista · CRN [A INSERIR]</small></div>
              <div className="about__location"><MapPin size={15} /> {siteConfig.city}</div>
            </div>
            <div className="about__copy" data-reveal>
              <Eyebrow>SOBRE CLARA</Eyebrow><h2>Ciência para orientar.<br /><em>Escuta para acolher.</em></h2>
              <p>Clara Martins é uma identidade profissional fictícia criada para esta demonstração. A proposta do atendimento representa uma nutrição clínica próxima, individualizada e baseada em evidências.</p>
              <p>Este espaço está preparado para receber futuramente a fotografia oficial, formação, número de registro e demais informações verificadas da profissional.</p>
              <div className="about__signature">Clara Martins <span>— Nutrição para a Vida Real</span></div>
            </div>
          </div>
        </section>

        <section className="faq section" id="duvidas">
          <div className="container faq__grid">
            <div className="faq__intro" data-reveal><Eyebrow>PERGUNTAS FREQUENTES</Eyebrow><h2>Antes de começar, vamos deixar tudo mais <em>simples.</em></h2><p>As respostas abaixo são demonstrativas e poderão ser ajustadas à prática profissional real.</p></div>
            <div className="faq__list">{faqs.map(([question, answer]) => <details data-reveal key={question}><summary><span>{question}</span><ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="container contact__panel" data-reveal>
            <div className="contact__copy"><Eyebrow light>SEU PRÓXIMO PASSO PODE SER UMA CONVERSA</Eyebrow><h2>Sua alimentação pode acompanhar a vida que você quer <em>viver.</em></h2></div>
            <div className="contact__action"><p>Agende uma conversa inicial e conheça os formatos de acompanhamento.</p><button className="button button--light" type="button" onClick={openContact}>Agende sua consulta <ArrowUpRight size={17} /></button><small>WhatsApp configurável · nenhuma mensagem é enviada sem sua ação</small></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__top">
          <Brand inverse />
          <div className="site-footer__column"><strong>Atendimento</strong><span>Presencial em Jaboticabal, SP</span><span>Online · disponibilidade a confirmar</span></div>
          <div className="site-footer__column"><strong>Contato</strong><span>WhatsApp: {siteConfig.whatsappNumber || '[A CONFIGURAR]'}</span><span>E-mail: {siteConfig.email || '[A INSERIR]'}</span><span>Instagram: {siteConfig.instagramUrl || '[A INSERIR]'}</span></div>
          <div className="site-footer__column"><strong>Informações</strong><span>CRN: {siteConfig.crn || '[A INSERIR]'}</span><span>Política de privacidade: [A ADICIONAR]</span><a href="https://www.pexels.com" target="_blank" rel="noreferrer">Imagens ilustrativas · Pexels</a><a href="#inicio">Voltar ao topo ↑</a></div>
        </div>
        <div className="container site-footer__bottom"><span>© 2026 Clara Martins — Projeto demonstrativo.</span><span>Profissional, conteúdo e dados de contato fictícios.</span></div>
      </footer>

      <button className="floating-contact" type="button" onClick={openContact} aria-label="Agendar pelo WhatsApp"><MessageCircle size={22} /><span>Agendar</span></button>
      <dialog ref={modal} className="contact-dialog" onClose={() => lastContact.current?.focus()} onClick={(event) => { if (event.target === modal.current) modal.current.close(); }}>
        <button className="contact-dialog__close" type="button" onClick={() => modal.current?.close()} aria-label="Fechar"><X size={20} /></button>
        <span className="contact-dialog__icon"><MessageCircle size={25} /></span><Eyebrow>CONTATO DEMONSTRATIVO</Eyebrow>
        <h2>O WhatsApp ainda não foi configurado.</h2><p>Adicione o número real em <code>src/config.js</code>. Até lá, nenhum contato externo será aberto.</p>
        <button className="button button--dark" type="button" onClick={() => modal.current?.close()}>Entendi <Check size={17} /></button>
      </dialog>
    </div>
  );
}
