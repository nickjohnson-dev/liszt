import curry from 'lodash/fp/curry';
import slice from 'lodash/fp/slice';

export default curry((index, iteratee, xs) => [
  ...slice(0, index, xs),
  iteratee(xs[index]),
  ...slice(index + 1, xs.length, xs),
]);
