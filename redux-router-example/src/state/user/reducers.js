import { handleActions } from 'redux-actions';
import { omit } from 'lodash';
import * as actions from './actions';

const defaultUser = {};

const user = handleActions(
  {
    [actions.userDataLoaded]: (state, { payload }) => {

      return {
        ...state,
        ...payload
      };
    },
  },
  defaultUser
);

export default user;
