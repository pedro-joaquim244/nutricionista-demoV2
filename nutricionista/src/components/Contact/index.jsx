import { Check } from 'lucide-react';
import styles from './style.module.css';

export default function Contact({ cta }) {
 
 return (<section className={[styles['contact-section'], 'wrap', 'reveal'].join(' ')} id="contato"><span className="eyebrow">UM CONVITE PARA CUIDAR DE VOCÊ</span><h2>Uma vida mais leve<br/>começa com <em>uma conversa.</em></h2><p>Vamos encontrar um caminho que faça sentido para você?</p>{cta('Conversar pelo WhatsApp', true)}<span className={[styles['contact-bottom']].join(' ')}><Check size={14}/> Sem pressa. Sem julgamentos. Com acolhimento.</span></section>);
}
