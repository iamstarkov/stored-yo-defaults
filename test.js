import test from 'ava';
import storedYoDefaults from './index';

const questions = [{
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
  name: 'username', // this one is not stored
  default: 'asd',   // so it will be skipped
}, {
  name: 'website',
  message: '☯ your website:', // this one has no default value
  store: true,                // will be skipped as well
}];

test('should storedYoDefaults', (t) =>
  t.same(storedYoDefaults(questions), {
    moduleVersion: '0.0.0',
    moduleLicense: 'MIT',
    moduleTest: 'tape',
  }));

test('should storedYoDefaults invalid input', (t) =>
  t.throws(() => { storedYoDefaults(); }, /Expected array, but got undefined/));

test('should storedYoDefaults invalid input v2', (t) =>
  t.throws(() => { storedYoDefaults(['a', 'b']); }, /Expected hash/));
