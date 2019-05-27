export const ComponentWrapper = function (params) {
  const {mixins, ...others} = params;
  let targetParams = others;
  if (mixins) {
    mixins.forEach(mixinItem => {
      targetParams = Object.assign({}, targetParams, mixinItem);
    });
  }
  Component(targetParams);
};

export const PageWrapper = function (params) {
  const {mixins, ...others} = params;
  let targetParams = others;
  if (mixins) {
    mixins.forEach(item => {
      targetParams = Object.assign({}, targetParams, item);
    });
  }
  Page(targetParams)
};

export const AppWrapper = function (params) {
  const {mixins, ...others} = params;
  let targetParams = others;
  if (mixins) {
    mixins.forEach(item => {
      targetParams = Object.assign({}, targetParams, item);
    });
  }
  App(targetParams)
};

