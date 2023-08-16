import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { Header } from './components/widgets/Header/Header.js'
import { Navigation } from './components/features/Navigation/Navigation.js';

const { download } = data.en;
const { header } = data.en;

const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', Header(header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
