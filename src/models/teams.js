import { getTeams, addTeam, deleteTeam, addVote } from '../services/teams.service'
import { assoc } from 'ramda'

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
      console.log("list model: ", list)
      yield put({ type: 'saveTeams', payload: { list } })
    },
    *addTeam(action, { call, put, select }) {
      const team = action.payload;
      const response = yield call(addTeam, team)
      const stateList = yield select(state => state.teams.list);
      const list = stateList.concat(response);
      yield put({ type: 'saveTeams', payload: { list } })
    },
    *deleteTeam(action, { call, put, select }) {
      const id = action.payload;
      const team = yield call(deleteTeam, id)
      const stateList = yield select(state => state.teams.list);
      const list = stateList.filter( item => item.id !== id);
      yield put({ type: 'saveTeams', payload: { list } })
    },
    *addVote(action, { call, put, select }) {
      const id = yield action.payload;
      const team = yield call(addVote, id)
      yield put({ type: 'new-vote', payload: team })
      const stateList = yield select(state => state.teams.list);
      const list = yield stateList.map( item => {
        if(item.id === id){
          return assoc('votes', team.votes, item);
        }else {
          return item;
        }
      })
      yield put({ type: 'saveTeams', payload: { list }});
    },
  },

  reducers: {
    saveTeams(state, action) {
      console.log("save teams: ", action.payload)
      return {
        ...state,
        ...action.payload
      }
    },
  },
};
