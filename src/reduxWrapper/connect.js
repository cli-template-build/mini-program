const connect = store =>
  function (mapStateToProps = state => state) {
    let unsubscribe;
    const update = function () {
      const state = mapStateToProps(store.getState());
      this.setData(state)
    };

    const install = function () {
      unsubscribe = store.subscribe(update.bind(this));
      update.call(this);
    };

    const uninstall = function () {
      if (unsubscribe) unsubscribe();
    };

    return {
      install,
      uninstall,
      dispatch: store.dispatch,
    };
  };

const createPageConnectMixins = store => {
  const connectFactory = connect(store);
  return mapStateToProps => {
    const {install, uninstall, dispatch} = connectFactory(mapStateToProps);
    return {
      onLoad: install,
      onUnload: uninstall,
      dispatch,
    }
  };
};

const createComponentConnectMixins = store => {
  const connectFactory = connect(store);
  return mapStateToProps => {
    const {install, uninstall, dispatch} = connectFactory(mapStateToProps);
    return {
      attached: install,
      detached: uninstall,
      methods: {
        dispatch,
      }
    }
  };
};

const createAppConnectMixins = store => {
  const connectFactory = connect(store);
  return mapStateToProps => {
    const {install, dispatch} = connectFactory(mapStateToProps);
    return {
      onLaunch: install,
      dispatch,
    }
  };
};

export const createConnect = store => ({
  app: createAppConnectMixins(store),
  page: createPageConnectMixins(store),
  component: createComponentConnectMixins(store),
});
