import dva from 'dva'
import createSocket from 'dva-socket.io'
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading'

import { noticeError } from './utils/notice'
import './index.less'

const logger = store => next => action => {
  console.log('store: ', store);
  console.log('next: ', next);
  console.log('action: ', action);
  let result = next(action)
  console.log('next state', store.getState());
  return result;
}


// 1. Initialize
const app = dva({
  ...createLoading({ effects: true }),
  history: createHistory(),
  onError(error) {
    console.log("error: ", error);
    // noticeError('App OnError', error, 0)
  },
  onAction: logger,
});

app.use(createSocket('http://localhost:9000', null, {
  // when server push an server-message event,
  //  it will dispatch an action use server data,
  on: {
    'server-message': (data, dispatch, getState) => dispatch(data),
  },
  emit: {
    // when you dispatch an action with type === 'send-message',
    //  it will emit a client-message event with data('client send a message')
    'new-vote': {
      evaluate: (action, dispatch, getState) => action.type === 'new-vote',
      data: (action) => action.payload,
    },
  },
}));

// 3. Model
app.model(require('./models/teams').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
