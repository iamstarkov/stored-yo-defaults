import test from 'ava';
import storedYoDefaults from './index';

const input = [{
  name: 'moduleVersion',
  message: '☯ preferred version to start:',
  store: true,
  default: '0.0.0',
}, {
  name: 'moduleLicense',
  message: '☯ preferred license:',
  store: true,
  default: 'MIT',
}, {
  name: 'moduleTest',
  message: '☯ preferred test framework:',
  type: 'list',
  choices: ['mocha', 'tape', 'ava'],
  store: true,
  default: 1,
}, {
  name: 'username',
  default: 'asd',
}, {
  name: 'website',
  message: '☯ your website:',
  store: true,
}];

test('should storedYoDefaults', (t) =>
  t.same(storedYoDefaults(input), {
    moduleVersion: '0.0.0',
    moduleLicense: 'MIT',
    moduleTest: 'tape',
  }));

test('should storedYoDefaults invalid input', (t) =>
  t.throws(() => { storedYoDefaults(); }, /Expected array, but got undefined/));
