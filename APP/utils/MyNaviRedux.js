import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

// 注意: createReactNavigationReduxMiddleware 必须在 createReduxBoundAddListener 之前执行

const reactMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
  );

const addListener = createReduxBoundAddListener("root");

export {
    reactMiddleware,
    addListener
};

