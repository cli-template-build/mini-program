import mixin from './mixin';

const PageWrapper = function (params) {
  const { mixins, ...others } = params;
  let targetParams = others;
  if (mixins) {
    mixins.forEach(mixinItem => {
      targetParams = mixin(targetParams, mixinItem);
    });
  }
  Page(targetParams)
};

export default PageWrapper;
