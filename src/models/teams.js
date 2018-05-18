import { getTeams, addTeam, deleteTeam } from '../services/teams.service'

export default {

  namespace: 'teams',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  
      return history.listen(({ pathname }) => {
          dispatch({ type: 'getTeams' })
      })
    },
  },

  effects: {
    *getTeams(action, { call, put }) {
      const list = yield call(getTeams)
      yield put({ type: 'saveTeams', payload: { list } })
    },
    *addTeam(action, { call, put, select }) {
      const team = action.payload;
      const response = yield call(addTeam, team)
      const stateList = yield select(state => state.teams.list);
      const list = stateList.concat(response);
      yield put({ type: 'saveTeam', payload: { list } })
    },
    *deleteTeam(action, { call, put, select }) {
      const id = action.payload;
      const team = yield call(deleteTeam, id)
      const stateList = yield select(state => state.teams.list);
      const list = stateList.filter( item => item.id !== id);
      yield put({ type: 'saveTeams', payload: { list } })
    },
  },

  reducers: {
    saveTeams(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    saveTeam(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
  },

};
