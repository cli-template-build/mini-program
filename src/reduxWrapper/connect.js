import {Store, Unsubscribe, Dispatch} from 'redux';

const createConnectFactory = store =>
  function (mapStateToProps) {
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
  const connectFactory = createConnectFactory(store);
  const connect = (mapStateToProps = state => state) => {
    const {install, uninstall, dispatch} = connectFactory(mapStateToProps);
    return {
      onLoad: install,
      onUnload: uninstall,
      dispatch,
    }
  };
  return {connect};
};

const createComponentConnectMixins = store => {
  const connectFactory = createConnectFactory(store);
  const connect = (mapstateToProps = state => state) => {
    const {install, uninstall, dispatch} = connectFactory(mapstateToProps);
    return {
      attached: install,
      detached: uninstall,
      methods: {
        dispatch,
      }
    }
  };
  return {
    connect,
  };
};

const createAppConnectMixins = store => {
  const connectFactory = createConnectFactory(store);
  const connect = (mapstateToProps = state => state) => {
    const {install, dispatch} = connectFactory(mapstateToProps);
    return {
      onLaunch: install,
      dispatch,
    }
  };
  return {connect};
};

export const createConnect = store => ({
  app: createAppConnectMixins(store),
  page: createPageConnectMixins(store),
  component: createComponentConnectMixins(store),
});
