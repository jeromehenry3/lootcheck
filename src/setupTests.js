/**
 * https://www.udemy.com/course/react-tdd/learn/lecture/8115608#overview
 */


import requestAnimationFrame from './tempPolyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });