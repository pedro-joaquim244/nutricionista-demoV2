import { ArrowUpRight, Heart, Sprout, Monitor } from 'lucide-react';
import styles from './style.module.css';

export default function Services({ contact }) {
 
 return (<section className={[styles['services'], 'section'].join(' ')} id="acompanhamento"><div className="wrap"><div className={[styles['section-top'], 'reveal'].join(' ')}><div><p className="eyebrow">CUIDADO QUE FAZ SENTIDO</p><h2>Seu momento.<br/><em>Seu acompanhamento.</em></h2></div><p>Cada rotina é única. O caminho para cuidar<br className={[styles['desktop-break']].join(' ')}/> de você também pode ser.</p></div><div className={[styles['service-grid']].join(' ')}>
      {[{ icon: <Sprout/>, n: '01', title: 'Reeducação alimentar', text: 'Construa hábitos possíveis e descubra como comer com mais consciência, variedade e prazer.', tags: 'Autonomia · Hábitos · Equilíbrio' }, { icon: <Heart/>, n: '02', title: 'Cuidado individualizado', text: 'Um plano que considera sua história, suas necessidades e os objetivos que você deseja trabalhar.', tags: 'Escuta · Planejamento · Acolhimento' }, { icon: <Monitor/>, n: '03', title: 'Nutrição onde você estiver', text: 'A proximidade do acompanhamento com a praticidade da consulta online, no conforto do seu espaço.', tags: 'Online · Praticidade · Conexão' }].map(s => <article className={[styles['service-card'], 'reveal'].join(' ')} key={s.n}><div className={[styles['service-head']].join(' ')}>{s.icon}<span>{s.n}</span></div><h3>{s.title}</h3><p>{s.text}</p><small>{s.tags}</small><button onClick={contact}>Quero saber mais <ArrowUpRight size={19}/></button></article>)}
      </div></div></section>);
}
