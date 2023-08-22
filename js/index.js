import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
26-create-header
import { Header } from './components/widgets/Header/Header.js'
import { SectionSecondary } from './components/widgets/SectionSecondary/SectionSecondary.js';

 16-widget-sectionsecondary
const { header, download, care, cashback } = data.en;
main

const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', Header(header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionSecondary(care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(cashback));
 main
