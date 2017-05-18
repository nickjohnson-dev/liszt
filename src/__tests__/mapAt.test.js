import test from 'ava';
import mapAt from '../mapAt';

test('should return array with item at index mapped to return value of iteratee', (t) => {
  const input = [1, 2, 3, 4, 5];
  const index = 2;
  const iteratee = () => 'a';
  const result = mapAt(
    index,
    iteratee,
    input,
  );
  const expected = [1, 2, 'a', 4, 5];
  t.deepEqual(result, expected);
});

test.todo('should work when index is 0');

test.todo('should work when index is length - 1');

test.todo('should return input array when index is out of bounds');

test.todo('should work with currying');
