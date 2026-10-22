import { Sprout } from 'lucide-react';
import { photos } from '../../data/photos';
import styles from './style.module.css';

export default function About() {
 
 return (<section className={[styles['about'], 'wrap', 'section', 'reveal'].join(' ')} id="sobre"><div className={[styles['about-image']].join(' ')}><img src={photos.portrait} alt="Imagem ilustrativa de uma profissional em um ambiente acolhedor" loading="lazy"/><span className={[styles['image-caption']].join(' ')}>CONEXÃO ANTES DE QUALQUER PLANO.</span></div><div className={[styles['about-copy']].join(' ')}><p className="eyebrow">PRAZER, CLARA MARTINS</p><h2>Antes do prato,<br/>existe <em>uma pessoa.</em></h2><p>Acredito em uma nutrição que acolhe a sua história, respeita seus gostos e acompanha os seus objetivos.</p><p>Meu trabalho começa pela escuta. Juntas, vamos construir possibilidades para o seu dia a dia — com conhecimento, autonomia e espaço para o prazer de comer.</p><div className={[styles['signature']].join(' ')}>Clara Martins <Sprout size={24}/></div><span className={[styles['small-note']].join(' ')}>Perfil fictício • Imagem ilustrativa</span></div></section>);
}
