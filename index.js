import R from 'ramda';
import c from 'rho-contracts';

// rejectNil :: Object -> Object
const rejectNil = R.reject(R.isNil);

// isStored :: Object -> Boolean
const isStored = R.propEq('store', true);

// isList :: Object -> Boolean
const isList = R.propEq('type', 'list');

// getListDefault :: Object -> String
const getListDefault = R.converge(R.nth, [R.prop('default'), R.prop('choices')]);

// getDefault :: Object -> String
const getDefault = R.ifElse(isList, getListDefault, R.prop('default'));

// nameAndDefaultArr :: Object -> [String]
const nameAndDefaultArr = R.unapply(R.ap([R.prop('name'), getDefault]));

// storedDefaultsObj :: Object -> Object
const storedDefaultsObj = R.pipe(
  nameAndDefaultArr,
  R.unapply(R.fromPairs),
  rejectNil);

// reduceStoreDefaults :: Object -> Object -> Object
const reduceStoreDefaults = (state, item) =>
  isStored(item) ? R.merge(state, storedDefaultsObj(item)) : state;

// storedYoDefaults :: [Object] -> Object
const storedYoDefaults = R.pipe(
  questions => c.array(c.object).check(questions),
  R.reduce(reduceStoreDefaults, {}));

export default storedYoDefaults;
