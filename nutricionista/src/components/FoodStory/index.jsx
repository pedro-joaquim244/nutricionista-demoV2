import { Leaf } from 'lucide-react';
import { photos } from '../../data/photos';
import styles from './style.module.css';

export default function FoodStory() {
 
 return (<section className={[styles['food-story'], 'wrap', 'reveal'].join(' ')}><img src={photos.fruit} alt="Frutas frescas em diferentes cores" loading="lazy"/><div><Leaf size={35} strokeWidth={1}/><h2>Saúde também é<br/>ter prazer<br/><em>à mesa.</em></h2><p>Mais cores. Mais possibilidades.<br/>Mais espaço para a vida real.</p></div><img src={photos.bowl} alt="Salada variada com folhas e vegetais" loading="lazy"/></section>);
}
