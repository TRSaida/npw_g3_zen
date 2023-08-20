import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { SectionTretiory } from './components/widgets/SectionTretiory/SectionTretiory.js';
//import { Links } from './components/widgets/SectionTretiory/Links/Links.js';
const {  download, clients } = data;


const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
//$root.insertAdjacentHTML('beforeend', Links(clients));
$root.insertAdjacentHTML('beforeend', SectionTretiory(clients));
//$root.insertAdjacentHTML('beforeend', SectionTretiory(data, 'section-tretiory'));
