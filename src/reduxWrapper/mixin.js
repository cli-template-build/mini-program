import {mergeWith} from 'lodash';

const mixin = (...items) => {
  const args = [
    {},
    ...items,
    function(oldValue, srcValue) {
      if (typeof oldValue === 'function' && typeof srcValue === 'function') {
        return function (...args) {
          srcValue.apply(this, args);
          oldValue.apply(this, args)
        }
      }
    }
  ];

  return mergeWith.apply(null, args);
};

export default mixin;
