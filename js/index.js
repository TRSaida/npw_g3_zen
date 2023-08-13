import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';

const { header, download } = data.en;

const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', SectionPrimary(header, download));
