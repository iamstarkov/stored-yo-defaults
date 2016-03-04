import test from 'ava';
import storedYoDefaults from './index';

test('should storedYoDefaults', (t) =>
  t.same(storedYoDefaults('unicorns'), 'unicorns'));

test('should storedYoDefaults invalid input', (t) =>
  t.same(storedYoDefaults(), undefined));
