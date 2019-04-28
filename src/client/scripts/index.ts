import '../scss/style.scss';
import sample from './sample';

const h1 = document.querySelector('h1') as HTMLHeadingElement;
h1.textContent = sample();
