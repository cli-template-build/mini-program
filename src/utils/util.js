export const promise = handler => () =>
  new Promise((resolve, reject) => {
    handler({success: resolve, fail: reject});
  });
