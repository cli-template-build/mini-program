import mixin from './mixin';

const ComponentWrapper = function (params) {
  const { mixins, ...others } = params;
  let targetParams = others;
  if (mixins) {
    mixins.forEach(mixinItem => {
      targetParams = mixin(targetParams, mixinItem);
    });
  }
  Component(targetParams);
};

export default ComponentWrapper;
