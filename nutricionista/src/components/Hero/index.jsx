import { Leaf, Heart, Monitor, MapPin } from 'lucide-react';
import { photos } from '../../data/photos';
import styles from './style.module.css';

export default function Hero({ cta }) {
 
 return (<section className={[styles['hero'], 'wrap'].join(' ')} id="inicio">
        <div className={[styles['hero-copy']].join(' ')}><p className="eyebrow"><span/> NUTRIÇÃO COM CIÊNCIA E ACOLHIMENTO</p><h1>Comer bem.<br/>Viver leve.<br/><em>Ser você.</em></h1><p className={[styles['intro']].join(' ')}>Uma relação mais leve com a comida começa com um cuidado que entende a sua vida.</p><p className={[styles['hero-detail']].join(' ')}>Nutrição individualizada, sem fórmulas prontas.<br/>No seu ritmo, com escolhas que fazem sentido para você.</p>{cta()}<div className={[styles['hero-meta']].join(' ')}><span><Monitor size={15}/> Atendimento online</span><i/> <span><MapPin size={15}/> E presencial</span></div></div>
        <div className={[styles['hero-visual']].join(' ')}><img className={[styles['hero-photo']].join(' ')} src={photos.food} alt="Prato colorido com vegetais frescos para uma refeição equilibrada" fetchPriority="high"/><div className={[styles['round-note']].join(' ')}>NUTRIR O CORPO<Leaf size={31} strokeWidth={1.1}/><span>ACOLHER A VIDA</span></div><div className={[styles['photo-note']].join(' ')}><span className={[styles['note-icon']].join(' ')}><Heart size={22} strokeWidth={1.4}/></span><div>Mais equilíbrio, menos regras.<small>Uma alimentação que cabe na sua vida.</small></div></div><span className={[styles['photo-index']].join(' ')}>01 / UM NOVO OLHAR PARA A ALIMENTAÇÃO</span></div>
      </section>);
}
