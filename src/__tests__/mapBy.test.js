import test from 'ava';
import mapBy from '../mapBy';

test('should return array with items that satisfy predicate mapped to return value of iteratee', (t) => {
  const input = [1, 2, 3, 4, 5];
  const predicate = item => item === 4;
  const iteratee = () => 'a';
  const result = mapBy(
    predicate,
    iteratee,
    input,
  );
  const expected = [1, 2, 3, 'a', 5];
  t.deepEqual(result, expected);
});

test.todo('should work with currying');
