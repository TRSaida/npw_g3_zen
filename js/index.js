import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { SectionSecondary } from './components/widgets/SectionSecondary/SectionSecondary.js';

 16-widget-sectionsecondary
const { download, care, cashback } = data.en;

const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionSecondary(care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(cashback));
 main
