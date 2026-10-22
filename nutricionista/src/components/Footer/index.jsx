import { ArrowUpRight, Sprout } from 'lucide-react';
import { siteConfig } from '../../config';
import styles from './style.module.css';

export default function Footer() {
 
 return (<footer className="wrap"><div className={[styles['footer-main']].join(' ')}><a className="brand" href="#inicio"><Sprout size={29}/><span>{siteConfig.name}<small>NUTRIÇÃO & BEM-ESTAR</small></span></a><div><a href="#sobre">Sobre mim</a><a href="#acompanhamento">Acompanhamento</a><a href="#contato">Contato</a></div><a className={[styles['back-top']].join(' ')} href="#inicio" aria-label="Voltar ao início"><ArrowUpRight/></a></div><div className={[styles['footer-bottom']].join(' ')}><span>© {new Date().getFullYear()} {siteConfig.name}. Feito para nutrir.</span><span>Site demonstrativo · Profissional e conteúdo fictícios.</span></div></footer>);
}
