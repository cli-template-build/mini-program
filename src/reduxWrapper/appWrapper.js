import { concat, compact } from 'lodash';
import mixin from './mixin';

const appSetDataMixin = function () {
  return {
    setData: function (data) {
      Object.assign(this, data)
    }
  }
};

const AppWrapper = function (params) {
  const {mixins, ...others} = params;
  const presetMixins = [appSetDataMixin()];
  const allMixins = compact(concat(mixins, presetMixins));
  let targetParams = others;
  allMixins.forEach(mixinItem => {
    targetParams = mixin(targetParams, mixinItem)
  });

  App(targetParams);
};

export default AppWrapper;
