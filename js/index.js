import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { SectionTretiory } from './components/widgets/SectionTretiory/SectionTretiory.js';
import { Header } from './components/widgets/Header/Header.js'
import { SectionSecondary } from './components/widgets/SectionSecondary/SectionSecondary.js';

const { header, download, care, cashback, clients } = data.en;

const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', Header(header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionSecondary(care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(cashback));
$root.insertAdjacentHTML('beforeend', SectionTretiory(clients));
 