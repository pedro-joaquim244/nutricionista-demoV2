import { Sprout } from 'lucide-react';
import styles from './style.module.css';

export default function Values() {
 
 return (<div className={[styles['values']].join(' ')}><div className="wrap"><span>Comida de verdade</span><Sprout/><span>Escuta sem julgamentos</span><Sprout/><span>Respeito à sua rotina</span><Sprout/><span>Cuidado em cada etapa</span></div></div>);
}
