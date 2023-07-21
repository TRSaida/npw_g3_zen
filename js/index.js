import { data } from './components/data.js';
import { SectionPrimary } from './components/widgets/SPrimary/SectionPrimary.js';

const { download } = data;

const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
