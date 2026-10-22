import { useState } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { siteConfig } from '../../config';
import styles from './style.module.css';

export default function Header({ cta }) {
 const [menu, setMenu] = useState(false);
 return (<header className={[styles['header'], 'wrap'].join(' ')}>
      <a className="brand" href="#inicio" aria-label={`${siteConfig.name}, início`}><span className={[styles['brand-symbol']].join(' ')}><Sprout size={30} strokeWidth={1.3}/></span><span>{siteConfig.name}<small>NUTRIÇÃO & BEM-ESTAR</small></span></a>
      <nav className={[styles.nav, menu ? styles.open : ''].join(' ')} aria-label="Navegação principal"><a onClick={() => setMenu(false)} href="#sobre">Sobre mim</a><a onClick={() => setMenu(false)} href="#acompanhamento">Acompanhamento</a><a onClick={() => setMenu(false)} href="#duvidas">Dúvidas</a></nav>
      <div className={[styles['header-cta']].join(' ')}>{cta('Vamos conversar')}</div><button className={[styles['menu-toggle']].join(' ')} aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </header>);
}
