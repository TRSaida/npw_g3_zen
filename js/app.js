import { data } from './data/data.js';
import { 
  Header,
  SectionPrimary,
  SectionSecondary,
  SectionTretiory, 
} from './index.js';

const { header, download, warranty, care, cashback, clients } = data.en;
const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Header(header));
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
$root.insertAdjacentHTML('beforeend', SectionPrimary(warranty));
$root.insertAdjacentHTML('beforeend', SectionPrimary(care));
$root.insertAdjacentHTML('beforeend', SectionSecondary(cashback));
$root.insertAdjacentHTML('beforeend', SectionTretiory(clients));
 