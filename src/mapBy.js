import curry from 'lodash/fp/curry';
import map from 'lodash/fp/map';

export default curry((predicate, iteratee, xs) => map(
  x => (predicate(x) ? iteratee(x) : x),
  xs,
));
