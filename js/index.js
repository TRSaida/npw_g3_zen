import { data } from './data/data.js';
import { SectionPrimary } from './components/widgets/SectionPrimary/SectionPrimary.js';
import { Theme } from './components/features/Theme/Theme.js';

const { download } = data;

const $root = document.querySelector('#root');
$root.insertAdjacentHTML('beforeend', Theme ('header'));
$root.insertAdjacentHTML('beforeend', SectionPrimary(download));
