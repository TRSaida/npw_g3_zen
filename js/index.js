import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { Header } from './components/widgets/Header/Header.js'
import { SectionSecondary } from './components/widgets/SectionSecondary/SectionSecondary.js';
import { SectionTretiory } from './components/widgets/SectionTretiory/SectionTretiory.js';
console.log(data.en)
const { header, download, warranty, care, cashback, clients } = data.en;
const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', Header(header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(cashback));
$root.insertAdjacentHTML('beforeend', SectionTretiory(clients));
 