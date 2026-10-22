import { ArrowRight } from 'lucide-react';
import styles from './style.module.css';

export default function Process() {
 
 return (<section className={[styles['process'], 'wrap', 'section', 'reveal'].join(' ')}><div><p className="eyebrow">UM PASSO DE CADA VEZ</p><h2>Você não precisa<br/>mudar tudo.<br/><em>Só começar.</em></h2><p>Um processo construído com você,<br/>do primeiro contato aos novos hábitos.</p><a className="text-link" href="#contato">Vamos dar o primeiro passo <ArrowRight size={19}/></a></div><div className={[styles['steps']].join(' ')}>{[['A gente conversa','Você compartilha sua rotina, sua relação com a comida e o que espera do acompanhamento.'],['Um plano para a sua vida','Construímos escolhas alimentares que respeitam seus gostos, suas necessidades e suas possibilidades.'],['Seguimos juntas','Nos retornos, conversamos sobre as conquistas e as dificuldades para ajustar o caminho.']].map(([title, desc], i) => <div className={[styles['step']].join(' ')} key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></section>);
}
