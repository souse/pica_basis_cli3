import { ADD_ORGANIZATION } from './mutation-types';

export default {
  [ADD_ORGANIZATION](state, { organization }) {
    console.log(state, organization);
  }
};
